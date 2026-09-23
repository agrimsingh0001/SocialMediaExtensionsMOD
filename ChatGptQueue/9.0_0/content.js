// Define a queue to store messages
let messageQueue = [];
let sendingInProgress = false;
let userInput = "";
const isPro = true;
const userTier = "enterprise";

function isTrialActive() {
  return false;
}

function isFeatureUnlocked() {
  return true;
}

let currentURL = window.location.href;
let proStatusRequested = false;
const listenerMap = new WeakMap();
let userTyping = false;
let currentTypedMessage = "";
let lastMessageTime = 0;
let countdownInterval = null;
let editingInProgress = false;
let lastProStatusCheck = 0;
let queuePaused = false;
let queuePauseReason = "";
let stagedAttachments = [];
let batchDraftJobs = [];
let replayingAttachments = false;
const PRO_STATUS_CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes
const ATTACHMENT_UPLOAD_TIMEOUT = 45 * 1000;
const SEND_CONFIRMATION_TIMEOUT = 10 * 1000;
const SUPPORTED_IMAGE_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
]);

function createId(prefix = "queue") {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createQueueItem(prompt, attachments = []) {
  return {
    id: createId(),
    prompt: typeof prompt === "string" ? prompt : "",
    attachments,
    status: "waiting",
    error: "",
    attempts: 0,
    createdAt: Date.now(),
  };
}

function normalizeQueueItem(item) {
  if (typeof item === "string") return createQueueItem(item);
  item.id = item.id || createId();
  item.prompt = typeof item.prompt === "string" ? item.prompt : "";
  item.attachments = Array.isArray(item.attachments) ? item.attachments : [];
  item.status = item.status || "waiting";
  item.error = item.error || "";
  item.attempts = Number.isFinite(item.attempts) ? item.attempts : 0;
  item.createdAt = item.createdAt || Date.now();
  return item;
}

function getQueueItem(index) {
  if (index < 0 || index >= messageQueue.length) return null;
  const normalized = normalizeQueueItem(messageQueue[index]);
  messageQueue[index] = normalized;
  return normalized;
}

function createAttachment(file) {
  return {
    id: createId("attachment"),
    file,
    name: file.name || "Untitled image",
    type: file.type || "application/octet-stream",
    size: file.size || 0,
    lastModified: file.lastModified || 0,
    previewUrl: file.type && file.type.startsWith("image/")
      ? URL.createObjectURL(file)
      : "",
  };
}

function createBatchDraftJob(attachments, promptOverride = null) {
  return {
    id: createId("draft-job"),
    attachments,
    promptOverride,
    selected: false,
    validationError: false,
  };
}

function getBatchDraftAttachments() {
  return batchDraftJobs.flatMap((job) => job.attachments);
}

function getBatchSharedPrompt() {
  return document.querySelector("#cq-batch-prompt")?.value.trim() || "";
}

function getEffectiveBatchPrompt(job) {
  return job.promptOverride === null
    ? getBatchSharedPrompt()
    : job.promptOverride.trim();
}

function attachmentKey(attachment) {
  return [
    attachment.name,
    attachment.size,
    attachment.lastModified,
    attachment.type,
  ].join(":");
}

function appendUniqueAttachments(target, files) {
  const known = new Set(target.map(attachmentKey));
  Array.from(files || []).forEach((file) => {
    if (!(file instanceof File)) return;
    const attachment = createAttachment(file);
    const key = attachmentKey(attachment);
    if (known.has(key)) {
      if (attachment.previewUrl) URL.revokeObjectURL(attachment.previewUrl);
      return;
    }
    known.add(key);
    target.push(attachment);
  });
}

function cleanupAttachments(attachments) {
  (attachments || []).forEach((attachment) => {
    if (attachment.previewUrl) URL.revokeObjectURL(attachment.previewUrl);
  });
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );
  const value = bytes / 1024 ** index;
  return `${value >= 10 || index === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[index]}`;
}

function isSupportedImageAttachment(attachment) {
  return SUPPORTED_IMAGE_TYPES.has(attachment.type) ||
    /\.(png|jpe?g|webp|gif)$/i.test(attachment.name || "");
}

// Add this utility function near the top of the file
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getHiddenTextarea() {
  const div = document.querySelector("div#prompt-textarea");
  if (!div) return null;
  let sibling = div.previousElementSibling;
  while (sibling) {
    if (sibling.tagName === "TEXTAREA") return sibling;
    sibling = sibling.previousElementSibling;
  }
  const parent = div.parentElement;
  if (parent) {
    const ta = parent.querySelector("textarea");
    if (ta) return ta;
  }
  return null;
}

function setProseMirrorContent(div, text) {
  div.focus();
  document.execCommand("selectAll");
  document.execCommand("delete");
  const lines = text.split("\n");
  for (let idx = 0; idx < lines.length; idx++) {
    if (idx > 0) document.execCommand("insertParagraph");
    if (lines[idx].length > 0)
      document.execCommand("insertText", false, lines[idx]);
  }
}

function checkQueueLimit() {
  return true; // Enterprise Edition: unlimited queueing
}

function setUniqueEventListener(element, eventType, listener, options) {
  if (!listenerMap.has(element)) {
    listenerMap.set(element, new Map());
  }

  const elementListeners = listenerMap.get(element);

  if (!elementListeners.has(eventType)) {
    element.addEventListener(eventType, listener, options);
    elementListeners.set(eventType, listener);
  }
}

function getPromptInput() {
  return document.querySelector("div#prompt-textarea[contenteditable='true']") ||
    document.querySelector("div#prompt-textarea");
}

function getComposerRoot() {
  const input = getPromptInput();
  return input?.closest("form") || input?.parentElement?.parentElement || document.body;
}

function findSendButton() {
  return document.querySelector('button[data-testid="send-button"]') ||
    document.querySelector('button[aria-label="Send message"]') ||
    document.querySelector('button[data-testid="fruitjuice-send-button"]') ||
    document.querySelector('button[aria-label="Send prompt"]');
}

function findLoadingIndicator() {
  return document.querySelector('button[data-testid="stop-button"]') ||
    document.querySelector('button[aria-label="Stop generating"]') ||
    document.querySelector('button[data-testid="fruitjuice-stop-button"]') ||
    document.querySelector('button[aria-label="Stop streaming"]');
}

function findComposerFileInput() {
  const root = getComposerRoot();
  const localInputs = Array.from(root.querySelectorAll('input[type="file"]'));
  const pageInputs = Array.from(document.querySelectorAll('input[type="file"]'))
    .filter((input) => !input.closest("#chatgpt-queue-batch-drawer"));
  const candidates = [...localInputs, ...pageInputs];
  return candidates.find((input) => {
    const accept = (input.getAttribute("accept") || "").toLowerCase();
    return !accept || accept.includes("image") || accept.includes("*");
  }) || candidates[0] || null;
}

function getComposerAttachmentCount() {
  const root = getComposerRoot();
  const removeButtonSelectors = [
    'button[aria-label*="Remove file"]',
    'button[aria-label*="Remove attachment"]',
    'button[aria-label*="Remove image"]',
  ];
  const removeButtons = new Set(
    removeButtonSelectors.flatMap((selector) => Array.from(root.querySelectorAll(selector)))
  );
  if (removeButtons.size > 0) return removeButtons.size;

  const previewNodes = Array.from(
    root.querySelectorAll('[data-testid*="attachment"], [data-testid*="file-preview"]')
  );
  return previewNodes.filter((node) =>
    !previewNodes.some((candidate) => candidate !== node && candidate.contains(node))
  ).length;
}

function waitForCondition(predicate, timeout, interval = 100) {
  const startedAt = Date.now();
  return new Promise((resolve) => {
    const check = () => {
      let value = false;
      try {
        value = predicate();
      } catch (error) {
        console.debug("Queue condition check failed:", error);
      }
      if (value) {
        resolve(value);
      } else if (Date.now() - startedAt >= timeout) {
        resolve(false);
      } else {
        setTimeout(check, interval);
      }
    };
    check();
  });
}

async function attachFilesToComposer(attachments) {
  if (!attachments.length) return { success: true };
  const input = findComposerFileInput();
  if (!input) {
    return {
      success: false,
      error: "ChatGPT's file input could not be found. Reload ChatGPT and retry.",
    };
  }

  const initialAttachmentCount = getComposerAttachmentCount();
  const transfer = new DataTransfer();
  attachments.forEach((attachment) => transfer.items.add(attachment.file));

  try {
    replayingAttachments = true;
    input.files = transfer.files;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  } catch (error) {
    return {
      success: false,
      error: `The image could not be attached: ${error.message}`,
    };
  } finally {
    replayingAttachments = false;
  }

  const attachmentAppeared = await waitForCondition(
    () => getComposerAttachmentCount() >= initialAttachmentCount + attachments.length,
    ATTACHMENT_UPLOAD_TIMEOUT,
    200
  );

  if (!attachmentAppeared) {
    return {
      success: false,
      error: "ChatGPT did not finish adding the image. Retry the item or attach it manually.",
    };
  }

  return { success: true };
}

function getUserMessageCount() {
  return document.querySelectorAll('[data-message-author-role="user"]').length;
}

async function attemptToSendMessage(queueItem, options = {}) {
  const item = normalizeQueueItem(queueItem);
  const inputDiv = getPromptInput();

  console.log("Attempting to send queue item:", item.id);

  if (sendingInProgress) {
    return { success: false, retryable: true, error: "Another queue item is sending." };
  }
  await new Promise((resolve) => setTimeout(resolve, 200));

  const continueButton = Array.from(document.querySelectorAll("button.btn"))
    .find((btn) => btn.textContent.includes("Continue generating"));

  if (continueButton) {
    continueButton.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: false, retryable: true, error: "ChatGPT continued its response." };
  }

  if (!options.allowExistingComposerContent && inputDiv?.innerText.trim()) {
    userTyping = true;
    updateMessageList();
    return { success: false, retryable: true, error: "Waiting for you to finish typing." };
  }

  userTyping = false;
  sendingInProgress = true;

  try {
    if (findLoadingIndicator() || !inputDiv) {
      return { success: false, retryable: true, error: "ChatGPT is still responding." };
    }

    if (item.attachments.length && !options.composerAlreadyHasAttachments) {
      if (getComposerAttachmentCount() > 0 && stagedAttachments.length === 0) {
        clearComposerAttachments();
        await new Promise((resolve) => setTimeout(resolve, 150));
      }
      item.status = "uploading";
      updateMessageList();
      const attachmentResult = await attachFilesToComposer(item.attachments);
      if (!attachmentResult.success) return attachmentResult;
    }

    item.status = "sending";
    updateMessageList();
    const hiddenTA = getHiddenTextarea();
    if (hiddenTA) {
      hiddenTA.value = item.prompt;
      hiddenTA.dispatchEvent(new InputEvent("input", { bubbles: true }));
    }
    setProseMirrorContent(inputDiv, item.prompt);
    inputDiv.dispatchEvent(
      new InputEvent("input", { bubbles: true, cancelable: true, inputType: "insertText" })
    );

    const readyButton = await waitForCondition(() => {
      const button = findSendButton();
      return button && !button.disabled && button.getAttribute("aria-disabled") !== "true"
        ? button
        : false;
    }, ATTACHMENT_UPLOAD_TIMEOUT, 150);

    if (!readyButton) {
      return {
        success: false,
        error: "ChatGPT never enabled Send. Check the image upload and retry.",
      };
    }

    const userMessageCount = getUserMessageCount();
    readyButton.dispatchEvent(new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    }));

    const sent = await waitForCondition(() => {
      const composerCleared = !getPromptInput()?.innerText.trim();
      return getUserMessageCount() > userMessageCount ||
        (composerCleared && Boolean(findLoadingIndicator()));
    }, SEND_CONFIRMATION_TIMEOUT, 150);

    if (!sent) {
      return {
        success: false,
        error: "Send could not be confirmed. The queue was paused to avoid a duplicate.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error during message sending:", error);
    return { success: false, error: error.message || "The queue item could not be sent." };
  } finally {
    sendingInProgress = false;
  }
}

function showQueueLimitAlert() {
  // Enterprise Edition: No queue limits or paywalls
}

// async function processMessageQueue() {
//   console.log("Processing message queue");
//   if (sendingInProgress || messageQueue.length === 0) {
//     console.log(
//       "Queue processing aborted: ",
//       sendingInProgress ? "Sending in progress" : "Queue is empty"
//     );
//     return;
//   }
//   const message = messageQueue[0];
//   console.log("Attempting to send message from queue:", message);

//   const success = await attemptToSendMessage(message);

//   if (success) {
//     console.log("Message sent successfully, removing from queue");
//     messageQueue.shift();
//     chrome.storage.local.set({ queuedMessages: messageQueue });
//   } else {
//     console.log("Failed to send message, keeping in queue");
//   }

//   updateQueueIndicator();
//   updateMessageList();
// }

function updateQueueIndicator() {
  let queueIndicator = document.querySelector("#queue-indicator");
  const inputDiv = document.querySelector(
    "div#prompt-textarea[contenteditable='true']"
  );
  if (!inputDiv) return;
  if (queueIndicator && queueIndicator.tagName !== "BUTTON") {
    queueIndicator.remove();
    queueIndicator = null;
  }
  if (!queueIndicator) {
    queueIndicator = document.createElement("button");
    queueIndicator.type = "button";
    queueIndicator.id = "queue-indicator";
    queueIndicator.style.cssText =
      "position: absolute; z-index: 999; top: 0; right: 30px; background-color: #b42318; color: white; border: 2px solid white; border-radius: 999px; min-width: 28px; height: 28px; padding: 0 7px; display: flex; align-items: center; justify-content: center; font: 700 12px/1 system-ui, sans-serif; cursor: pointer;";
    queueIndicator.addEventListener("click", () => {
      const messageList = document.querySelector("#message-list");
      if (messageList) {
        messageList.hidden = !messageList.hidden;
      }
    });
    inputDiv.parentNode.insertBefore(queueIndicator, inputDiv.nextSibling);
  }
  queueIndicator.textContent = messageQueue.length.toString();
  queueIndicator.setAttribute(
    "aria-label",
    `${messageQueue.length} ${messageQueue.length === 1 ? "item" : "items"} in queue`
  );
  queueIndicator.style.display = messageQueue.length > 0 ? "flex" : "none";
}

function queueStatusLabel(item) {
  const labels = {
    waiting: "Waiting",
    uploading: "Uploading image",
    sending: "Sending",
    failed: "Needs attention",
  };
  return labels[item.status] || "Waiting";
}

function ensureQueueStyles() {
  if (document.querySelector("#chatgpt-queue-styles")) return;
  const style = document.createElement("style");
  style.id = "chatgpt-queue-styles";
  style.textContent = `
    #message-list, #chatgpt-queue-batch-drawer {
      --cq-bg: #ffffff;
      --cq-surface: #f7f7f8;
      --cq-text: #202123;
      --cq-muted: #5d6065;
      --cq-border: #d7d7d9;
      --cq-primary: #087f5b;
      --cq-danger: #b42318;
      color-scheme: light dark;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--cq-text);
    }
    #message-list *, #chatgpt-queue-batch-drawer * { box-sizing: border-box; }
    #message-list button, #chatgpt-queue-batch-drawer button,
    #chatgpt-queue-batch-drawer textarea, #chatgpt-queue-batch-drawer input {
      font: inherit;
    }
    #message-list button, #chatgpt-queue-batch-drawer button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 14px;
      border: 1px solid var(--cq-border);
      border-radius: 8px;
      background: var(--cq-bg);
      color: var(--cq-text);
      cursor: pointer;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
    }
    #message-list button:hover, #message-list button:focus-visible,
    #chatgpt-queue-batch-drawer button:hover, #chatgpt-queue-batch-drawer button:focus-visible {
      border-color: var(--cq-primary);
    }
    #message-list button:focus-visible, #chatgpt-queue-batch-drawer button:focus-visible,
    #chatgpt-queue-batch-drawer textarea:focus-visible,
    #chatgpt-queue-batch-drawer input:focus-visible {
      outline: 3px solid #66d9b7;
      outline-offset: 2px;
    }
    #message-list .cq-primary, #chatgpt-queue-batch-drawer .cq-primary {
      background: var(--cq-primary);
      border-color: var(--cq-primary);
      color: #fff;
      font-weight: 700;
    }
    #message-list .cq-danger, #chatgpt-queue-batch-drawer .cq-danger { color: var(--cq-danger); }
    #message-list .cq-queue-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-block-end: 10px;
    }
    #message-list .cq-queue-header strong { font-size: 14px; }
    #message-list .cq-header-actions { display: flex; gap: 6px; }
    #message-list .cq-header-actions button { padding-inline: 12px; }
    #message-list .cq-queue-items { list-style: none; padding: 0; margin: 0; }
    #message-list .cq-queue-item {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 9px;
      padding-block: 9px;
      border-block-end: 1px solid var(--cq-border);
    }
    #message-list .cq-thumb {
      width: 46px;
      height: 46px;
      border-radius: 8px;
      border: 1px solid var(--cq-border);
      object-fit: cover;
      background: var(--cq-surface);
    }
    #message-list .cq-file-icon {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border-radius: 8px;
      background: var(--cq-surface);
      border: 1px solid var(--cq-border);
    }
    #message-list .cq-item-copy { min-width: 0; }
    #message-list .cq-prompt, #message-list .cq-filename {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    #message-list .cq-prompt { font-size: 13px; font-weight: 600; }
    #message-list .cq-filename, #message-list .cq-status {
      color: var(--cq-muted);
      font-size: 12px;
    }
    #message-list .cq-status[data-status="failed"] { color: var(--cq-danger); font-weight: 700; }
    #message-list .cq-item-actions { display: flex; gap: 4px; }
    #message-list .cq-item-actions button { min-width: 44px; padding-inline: 8px; }
    #message-list .cq-queue-note { margin: 8px 0 0; color: var(--cq-muted); font-size: 12px; }
    #chatgpt-queue-batch-drawer {
      position: fixed;
      inset-block: 12px;
      inset-inline-end: 12px;
      z-index: 2147483646;
      width: min(540px, calc(100vw - 24px));
      padding: 18px;
      overflow-y: auto;
      border: 1px solid var(--cq-border);
      border-radius: 14px;
      background: var(--cq-bg);
      color: var(--cq-text);
      box-shadow: 0 20px 60px rgba(0,0,0,.32);
    }
    #chatgpt-queue-batch-drawer[hidden] { display: none; }
    #chatgpt-queue-batch-drawer .cq-drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-block-end: 16px;
    }
    #chatgpt-queue-batch-drawer h2 { margin: 0; font-size: 20px; line-height: 1.3; }
    #chatgpt-queue-batch-drawer p { margin: 6px 0 0; color: var(--cq-muted); font-size: 13px; line-height: 1.5; }
    #chatgpt-queue-batch-drawer .cq-close-btn { min-width: 44px; padding: 0; font-size: 22px; }
    #chatgpt-queue-batch-drawer .cq-field { display: grid; gap: 7px; margin-block-end: 16px; }
    #chatgpt-queue-batch-drawer label { font-size: 13px; font-weight: 700; }
    #chatgpt-queue-batch-drawer textarea {
      width: 100%;
      min-height: 86px;
      resize: vertical;
      padding: 10px 12px;
      border: 1px solid var(--cq-border);
      border-radius: 9px;
      background: var(--cq-bg);
      color: var(--cq-text);
      line-height: 1.45;
    }
    #chatgpt-queue-batch-drawer .cq-drop-zone {
      display: grid;
      place-items: center;
      gap: 7px;
      min-height: 132px;
      padding: 18px;
      border: 2px dashed var(--cq-border);
      border-radius: 11px;
      background: var(--cq-surface);
      text-align: center;
    }
    #chatgpt-queue-batch-drawer .cq-drop-zone[data-dragging="true"] { border-color: var(--cq-primary); }
    #chatgpt-queue-batch-drawer .cq-drop-zone small { color: var(--cq-muted); }
    #chatgpt-queue-batch-drawer .cq-file-input { display: none; }
    #chatgpt-queue-batch-drawer .cq-jobs-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-block: 4px 10px;
    }
    #chatgpt-queue-batch-drawer .cq-jobs-toolbar-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
    #chatgpt-queue-batch-drawer .cq-jobs-toolbar-actions button,
    #chatgpt-queue-batch-drawer .cq-job-actions button,
    #chatgpt-queue-batch-drawer .cq-job-footer button {
      padding-inline: 13px;
      font-size: 13px;
    }
    #chatgpt-queue-batch-drawer .cq-jobs-list {
      display: grid;
      gap: 12px;
      list-style: none;
      max-height: min(460px, 48vh);
      margin: 0 0 16px;
      padding: 0;
      overflow-y: auto;
    }
    #chatgpt-queue-batch-drawer .cq-draft-job {
      display: grid;
      gap: 10px;
      padding: 12px;
      border: 1px solid var(--cq-border);
      border-radius: 12px;
      background: var(--cq-bg);
    }
    #chatgpt-queue-batch-drawer .cq-draft-job[data-selected="true"] {
      border-color: var(--cq-primary);
      box-shadow: inset 0 0 0 1px var(--cq-primary);
    }
    #chatgpt-queue-batch-drawer .cq-job-header,
    #chatgpt-queue-batch-drawer .cq-job-footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    #chatgpt-queue-batch-drawer .cq-job-select {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 44px;
      cursor: pointer;
    }
    #chatgpt-queue-batch-drawer .cq-job-select input {
      width: 20px;
      height: 20px;
      min-height: 20px;
      accent-color: var(--cq-primary);
    }
    #chatgpt-queue-batch-drawer .cq-job-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
    #chatgpt-queue-batch-drawer .cq-job-images {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
      gap: 8px;
    }
    #chatgpt-queue-batch-drawer .cq-job-image {
      position: relative;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      align-items: center;
      gap: 8px;
      min-width: 0;
      padding: 7px;
      border: 1px solid var(--cq-border);
      border-radius: 9px;
      background: var(--cq-surface);
    }
    #chatgpt-queue-batch-drawer .cq-draft-thumb {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      object-fit: cover;
      background: var(--cq-surface);
    }
    #chatgpt-queue-batch-drawer .cq-draft-copy { min-width: 0; }
    #chatgpt-queue-batch-drawer .cq-draft-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
      font-weight: 700;
    }
    #chatgpt-queue-batch-drawer .cq-draft-meta {
      overflow: hidden;
      color: var(--cq-muted);
      font-size: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    #chatgpt-queue-batch-drawer .cq-draft-meta[data-error="true"] { color: var(--cq-danger); font-weight: 700; }
    #chatgpt-queue-batch-drawer .cq-remove-job-image {
      position: absolute;
      inset-block-start: -8px;
      inset-inline-end: -8px;
      min-width: 28px;
      min-height: 28px;
      width: 28px;
      height: 28px;
      padding: 0;
      border-radius: 999px;
      color: var(--cq-danger);
      font-weight: 800;
    }
    #chatgpt-queue-batch-drawer .cq-remove-job-image::after {
      content: "";
      position: absolute;
      inset: -8px;
    }
    #chatgpt-queue-batch-drawer .cq-job-prompt {
      min-height: 74px;
    }
    #chatgpt-queue-batch-drawer .cq-job-prompt[aria-invalid="true"] {
      border-color: var(--cq-danger);
      box-shadow: 0 0 0 1px var(--cq-danger);
    }
    #chatgpt-queue-batch-drawer .cq-prompt-source {
      color: var(--cq-muted);
      font-size: 12px;
    }
    #chatgpt-queue-batch-drawer .cq-shared-actions {
      display: flex;
      justify-content: flex-end;
      margin-block-start: 2px;
    }
    #chatgpt-queue-batch-drawer .cq-apply-shared-btn {
      max-width: 100%;
      padding: 8px 16px;
      white-space: normal;
    }
    #chatgpt-queue-batch-drawer .cq-queue-note {
      padding: 12px;
      color: var(--cq-muted);
      font-size: 13px;
      text-align: center;
    }
    #chatgpt-queue-batch-drawer .cq-builder-error {
      min-height: 20px;
      margin-block: 0 10px;
      color: var(--cq-danger);
      font-size: 13px;
      font-weight: 700;
    }
    #chatgpt-queue-batch-drawer .cq-builder-footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-block-start: 14px;
      border-block-start: 1px solid var(--cq-border);
    }
    #chatgpt-queue-batch-drawer .cq-builder-summary { color: var(--cq-muted); font-size: 13px; }
    #chatgpt-queue-batch-drawer .cq-add-jobs-btn { min-height: 44px; padding-inline: 16px; }
    @media (prefers-color-scheme: dark) {
      #message-list, #chatgpt-queue-batch-drawer {
        --cq-bg: #202123;
        --cq-surface: #2d2f31;
        --cq-text: #f5f5f5;
        --cq-muted: #b7b7bd;
        --cq-border: #55575b;
        --cq-primary: #19a37c;
        --cq-danger: #ff8a80;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      #message-list *, #chatgpt-queue-batch-drawer * { transition: none !important; }
    }
  `;
  document.head.appendChild(style);
}

function updateMessageList(remainingDelay = 0) {
  // Don't re-render while the user is editing a queue item
  if (editingInProgress) return;

  let messageList = document.querySelector("#message-list");

  // If there are no messages and no delay, clear any existing countdown
  if (messageQueue.length === 0 && remainingDelay === 0) {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
    if (messageList) {
      messageList.style.display = "none";
      messageList.replaceChildren();
    }
    return;
  }

  if (!messageList) {
    ensureQueueStyles();
    messageList = document.createElement("aside");
    messageList.id = "message-list";
    messageList.setAttribute("aria-label", "ChatGPT Queue");
    messageList.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: min(360px, calc(100vw - 24px));
      max-height: min(520px, calc(100vh - 40px));
      background: var(--cq-bg);
      border: 1px solid var(--cq-border);
      border-radius: 12px;
      color: var(--cq-text);
      padding: 12px;
      overflow-y: auto;
      box-shadow: 0 16px 48px rgba(0,0,0,.22);
      z-index: 2147483645;
      display: none;
    `;
    document.body.appendChild(messageList);
  }

  messageList.style.display = "block";
  const pauseLabel = queuePaused ? "Resume" : "Pause";
  let content = `
    <div class="cq-queue-header">
      <strong>${messageQueue.length} ${messageQueue.length === 1 ? "job" : "jobs"} remaining</strong>
      <div class="cq-header-actions">
        <button type="button" class="cq-add-images-btn">Add images</button>
        <button type="button" class="cq-pause-btn">${pauseLabel}</button>
      </div>
    </div>
    <ul class="cq-queue-items">
  `;

  content += messageQueue.map((rawItem, index) => {
    const item = normalizeQueueItem(rawItem);
    messageQueue[index] = item;
    const firstAttachment = item.attachments[0];
    const media = firstAttachment?.previewUrl
      ? `<img class="cq-thumb" src="${escapeHtml(firstAttachment.previewUrl)}" alt="Preview of ${escapeHtml(firstAttachment.name)}" width="46" height="46">`
      : `<span class="cq-file-icon" aria-hidden="true">${item.attachments.length ? "📎" : "💬"}</span>`;
    const fileCopy = firstAttachment
      ? `<div class="cq-filename" title="${escapeHtml(firstAttachment.name)}">${escapeHtml(firstAttachment.name)}${item.attachments.length > 1 ? ` +${item.attachments.length - 1}` : ""}</div>`
      : "";
    const editable = item.status !== "uploading" && item.status !== "sending";
    const actions = item.status === "failed"
      ? `<button type="button" class="queue-retry-btn" data-index="${index}">Retry</button>
         <button type="button" class="queue-delete-btn cq-danger" data-index="${index}" aria-label="Skip ${escapeHtml(firstAttachment?.name || item.prompt)}">Skip</button>`
      : editable
        ? `<button type="button" class="queue-edit-btn" data-index="${index}" aria-label="Edit queue item">Edit</button>
           <button type="button" class="queue-delete-btn cq-danger" data-index="${index}" aria-label="Delete queue item">Delete</button>`
        : "";
    const error = item.error ? `: ${escapeHtml(item.error)}` : "";
    return `
      <li class="cq-queue-item" data-index="${index}">
        ${media}
        <div class="cq-item-copy">
          <div class="cq-prompt" dir="auto" title="${escapeHtml(item.prompt)}">${escapeHtml(item.prompt || "Image-only prompt")}</div>
          ${fileCopy}
          <div class="cq-status" data-status="${escapeHtml(item.status)}" role="status">${queueStatusLabel(item)}${error}</div>
        </div>
        <div class="cq-item-actions">${actions}</div>
      </li>
    `;
  }).join("");

  if (userTyping) {
    content += `<li class="cq-queue-note">Waiting for you to finish the current draft…</li>`;
  }

  if (remainingDelay > 0) {
    const secondsRemaining = Math.ceil(remainingDelay / 1000);
    content += `<li class="cq-queue-note">Waiting ${secondsRemaining}s before the next job…</li>`;
  }

  if (queuePaused) {
    content += `<li class="cq-queue-note" role="status">Queue paused${queuePauseReason ? `: ${escapeHtml(queuePauseReason)}` : "."}</li>`;
  }

  content += "</ul>";
  messageList.innerHTML = content;

  messageList.querySelector(".cq-add-images-btn")?.addEventListener("click", openBatchBuilder);
  messageList.querySelector(".cq-pause-btn")?.addEventListener("click", () => {
    queuePaused = !queuePaused;
    queuePauseReason = queuePaused ? "Paused by you." : "";
    updateMessageList();
    if (!queuePaused) processMessageQueue();
  });

  // Attach delete button handlers
  messageList.querySelectorAll(".queue-delete-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = parseInt(btn.getAttribute("data-index"));
      deleteQueueItem(index);
    });
  });

  // Attach edit button handlers
  messageList.querySelectorAll(".queue-edit-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = parseInt(btn.getAttribute("data-index"));
      startEditQueueItem(index);
    });
  });

  messageList.querySelectorAll(".queue-retry-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = getQueueItem(parseInt(btn.getAttribute("data-index")));
      if (!item) return;
      resetFailedQueueComposer(item);
      item.status = "waiting";
      item.error = "";
      queuePaused = false;
      queuePauseReason = "";
      updateMessageList();
      processMessageQueue();
    });
  });
}

function startEditQueueItem(index) {
  if (index < 0 || index >= messageQueue.length) return;

  const messageList = document.querySelector("#message-list");
  if (!messageList) return;

  const li = messageList.querySelector(`li[data-index="${index}"]`);
  if (!li) return;

  const currentItem = getQueueItem(index);
  if (!currentItem) return;
  const currentMsg = currentItem.prompt;
  editingInProgress = true;

  // Replace li contents with an input and save button
  li.innerHTML = `
    <input class="queue-edit-input" type="text" aria-label="Queue item prompt" value="${escapeHtml(currentMsg)}" style="flex: 1; padding: 3px 5px; border: 1px solid #ccc; border-radius: 4px; font-size: 13px; background: inherit; color: inherit;">
    <button class="queue-btn queue-save-btn" aria-label="Save queue item" title="Save" style="background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px 4px; color: #27ae60;">✓</button>
    <button class="queue-btn queue-delete-btn" data-index="${index}" aria-label="Delete queue item" title="Delete" style="background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px 4px; color: #e74c3c;">✕</button>
  `;

  const input = li.querySelector(".queue-edit-input");
  const saveBtn = li.querySelector(".queue-save-btn");
  const deleteBtn = li.querySelector(".queue-delete-btn");

  input.focus();
  input.select();

  function saveEdit() {
    const newValue = input.value.trim();
    if (newValue && newValue !== currentMsg) {
      currentItem.prompt = newValue;
    }
    editingInProgress = false;
    updateMessageList();
  }

  function cancelEdit() {
    editingInProgress = false;
    updateMessageList();
  }

  saveBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    saveEdit();
  });

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    editingInProgress = false;
    deleteQueueItem(index);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      saveEdit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      cancelEdit();
    }
  });

  // Prevent keydown from propagating to ChatGPT's input handler
  input.addEventListener("keydown", (e) => {
    e.stopPropagation();
  }, { capture: true });

  // Cancel edit if the input loses focus (e.g. user clicks elsewhere)
  input.addEventListener("blur", () => {
    // Short delay so that clicks on save/delete buttons register before blur fires
    setTimeout(() => {
      if (editingInProgress) {
        cancelEdit();
      }
    }, 150);
  });
}

function deleteQueueItem(index) {
  if (index < 0 || index >= messageQueue.length) return;
  const [removed] = messageQueue.splice(index, 1);
  const removedItem = normalizeQueueItem(removed);
  if (index === 0 && removedItem.status === "failed") {
    resetFailedQueueComposer(removedItem);
  }
  cleanupAttachments(removedItem.attachments);
  if (messageQueue.length === 0) {
    queuePaused = false;
    queuePauseReason = "";
  }
  updateQueueIndicator();
  updateMessageList();
}

function findBatchDraftJob(jobId) {
  return batchDraftJobs.find((job) => job.id === jobId) || null;
}

function setBatchBuilderError(message) {
  const error = document.querySelector("#chatgpt-queue-batch-drawer .cq-builder-error");
  if (error) error.textContent = message;
}

function renderBatchDraft(options = {}) {
  const drawer = document.querySelector("#chatgpt-queue-batch-drawer");
  if (!drawer) return;
  const list = drawer.querySelector(".cq-jobs-list");
  const summary = drawer.querySelector(".cq-builder-summary");
  const addButton = drawer.querySelector(".cq-add-jobs-btn");
  const jobCount = drawer.querySelector(".cq-job-count");
  const combineButton = drawer.querySelector(".cq-combine-jobs-btn");
  const selectAllButton = drawer.querySelector(".cq-select-all-btn");
  const previousScrollTop = list.scrollTop;
  const attachmentCount = getBatchDraftAttachments().length;
  const selectedCount = batchDraftJobs.filter((job) => job.selected).length;

  if (batchDraftJobs.length === 0) {
    list.innerHTML = '<li class="cq-queue-note">Choose images to create draft jobs.</li>';
  } else {
    list.innerHTML = batchDraftJobs.map((job, index) => {
      const effectivePrompt = getEffectiveBatchPrompt(job);
      const isCustom = job.promptOverride !== null;
      const images = job.attachments.map((attachment) => {
        const supported = isSupportedImageAttachment(attachment);
        return `
          <div class="cq-job-image">
            ${attachment.previewUrl
              ? `<img class="cq-draft-thumb" src="${escapeHtml(attachment.previewUrl)}" alt="Preview of ${escapeHtml(attachment.name)}" width="44" height="44">`
              : `<span class="cq-file-icon" aria-hidden="true">📎</span>`}
            <div class="cq-draft-copy">
              <div class="cq-draft-name" title="${escapeHtml(attachment.name)}">${escapeHtml(attachment.name)}</div>
              <div class="cq-draft-meta" data-error="${supported ? "false" : "true"}">${supported ? formatFileSize(attachment.size) : "Unsupported image type"}</div>
            </div>
            <button type="button" class="cq-remove-job-image" data-job-id="${job.id}" data-attachment-id="${attachment.id}" aria-label="Remove ${escapeHtml(attachment.name)} from job ${index + 1}">×</button>
          </div>
        `;
      }).join("");

      return `
        <li class="cq-draft-job" data-job-id="${job.id}" data-selected="${job.selected ? "true" : "false"}">
          <div class="cq-job-header">
            <label class="cq-job-select">
              <input type="checkbox" class="cq-job-checkbox" data-job-id="${job.id}" ${job.selected ? "checked" : ""}>
              Job ${index + 1} · ${job.attachments.length} ${job.attachments.length === 1 ? "image" : "images"}
            </label>
            <div class="cq-job-actions">
              ${job.attachments.length > 1 ? `<button type="button" class="cq-split-job-btn" data-job-id="${job.id}">Split images</button>` : ""}
              <button type="button" class="cq-remove-job-btn cq-danger" data-job-id="${job.id}">Remove job</button>
            </div>
          </div>
          <div class="cq-job-images">${images}</div>
          <div class="cq-field">
            <label for="cq-job-prompt-${job.id}">Prompt for job ${index + 1}</label>
            <textarea id="cq-job-prompt-${job.id}" class="cq-job-prompt" data-job-id="${job.id}" dir="auto" aria-invalid="${job.validationError ? "true" : "false"}" placeholder="Describe what ChatGPT should do with ${job.attachments.length === 1 ? "this image" : "these images"}.">${escapeHtml(effectivePrompt)}</textarea>
          </div>
          <div class="cq-job-footer">
            <span class="cq-prompt-source">${isCustom ? "Custom prompt" : "Using shared prompt"}</span>
            <button type="button" class="cq-use-shared-btn" data-job-id="${job.id}" ${isCustom ? "" : "hidden"}>Use shared prompt</button>
          </div>
        </li>
      `;
    }).join("");
  }

  jobCount.textContent = `${batchDraftJobs.length} draft ${batchDraftJobs.length === 1 ? "job" : "jobs"}`;
  combineButton.textContent = selectedCount
    ? `Combine selected (${selectedCount})`
    : "Combine selected";
  selectAllButton.textContent = batchDraftJobs.length > 0 && selectedCount === batchDraftJobs.length
    ? "Clear selection"
    : "Select all";
  summary.textContent = attachmentCount === 0
    ? "No files selected"
    : `${attachmentCount} ${attachmentCount === 1 ? "image" : "images"} → ${batchDraftJobs.length} queue ${batchDraftJobs.length === 1 ? "job" : "jobs"}`;
  addButton.textContent = batchDraftJobs.length
    ? `Add ${batchDraftJobs.length} ${batchDraftJobs.length === 1 ? "job" : "jobs"}`
    : "Add jobs";

  list.querySelectorAll(".cq-job-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const job = findBatchDraftJob(checkbox.getAttribute("data-job-id"));
      if (!job) return;
      job.selected = checkbox.checked;
      renderBatchDraft();
    });
  });

  list.querySelectorAll(".cq-job-prompt").forEach((input) => {
    input.addEventListener("input", () => {
      const job = findBatchDraftJob(input.getAttribute("data-job-id"));
      if (!job) return;
      job.promptOverride = input.value;
      job.validationError = false;
      input.setAttribute("aria-invalid", "false");
      const card = input.closest(".cq-draft-job");
      card.querySelector(".cq-prompt-source").textContent = "Custom prompt";
      card.querySelector(".cq-use-shared-btn").hidden = false;
      setBatchBuilderError("");
    });
  });

  list.querySelectorAll(".cq-use-shared-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const job = findBatchDraftJob(button.getAttribute("data-job-id"));
      if (!job) return;
      job.promptOverride = null;
      job.validationError = false;
      renderBatchDraft({ focusJobId: job.id });
    });
  });

  list.querySelectorAll(".cq-remove-job-image").forEach((button) => {
    button.addEventListener("click", () => {
      const job = findBatchDraftJob(button.getAttribute("data-job-id"));
      if (!job) return;
      const attachmentIndex = job.attachments.findIndex(
        (attachment) => attachment.id === button.getAttribute("data-attachment-id")
      );
      if (attachmentIndex < 0) return;
      const [removed] = job.attachments.splice(attachmentIndex, 1);
      cleanupAttachments([removed]);
      if (job.attachments.length === 0) {
        batchDraftJobs = batchDraftJobs.filter((candidate) => candidate.id !== job.id);
      }
      renderBatchDraft();
    });
  });

  list.querySelectorAll(".cq-remove-job-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const job = findBatchDraftJob(button.getAttribute("data-job-id"));
      if (!job) return;
      cleanupAttachments(job.attachments);
      batchDraftJobs = batchDraftJobs.filter((candidate) => candidate.id !== job.id);
      renderBatchDraft();
    });
  });

  list.querySelectorAll(".cq-split-job-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const jobIndex = batchDraftJobs.findIndex(
        (job) => job.id === button.getAttribute("data-job-id")
      );
      if (jobIndex < 0) return;
      const job = batchDraftJobs[jobIndex];
      const splitJobs = job.attachments.map((attachment) =>
        createBatchDraftJob([attachment], job.promptOverride)
      );
      batchDraftJobs.splice(jobIndex, 1, ...splitJobs);
      setBatchBuilderError("");
      renderBatchDraft({ focusJobId: splitJobs[0]?.id });
    });
  });

  if (options.focusJobId) {
    list.querySelector(`.cq-job-prompt[data-job-id="${options.focusJobId}"]`)?.focus();
  } else {
    list.scrollTop = previousScrollTop;
  }
}

function addFilesToBatchDraft(files) {
  const known = new Set(getBatchDraftAttachments().map(attachmentKey));
  let added = 0;
  Array.from(files || []).forEach((file) => {
    if (!(file instanceof File)) return;
    const attachment = createAttachment(file);
    const key = attachmentKey(attachment);
    if (known.has(key)) {
      cleanupAttachments([attachment]);
      return;
    }
    known.add(key);
    batchDraftJobs.push(createBatchDraftJob([attachment]));
    added += 1;
  });
  setBatchBuilderError(added ? "" : "Those images are already in the builder.");
  renderBatchDraft();
}

function combineSelectedBatchJobs() {
  const selectedJobs = batchDraftJobs.filter((job) => job.selected);
  if (selectedJobs.length < 2) {
    setBatchBuilderError("Select at least two jobs to combine their images.");
    return;
  }

  const prompts = selectedJobs.map(getEffectiveBatchPrompt);
  const promptsMatch = prompts.every((prompt) => prompt === prompts[0]);
  if (!promptsMatch) {
    setBatchBuilderError(
      "Selected jobs have different prompts. Make their prompts match before combining."
    );
    return;
  }
  const promptOverride = selectedJobs.every((job) => job.promptOverride === null)
    ? null
    : prompts[0];
  const combinedJob = createBatchDraftJob(
    selectedJobs.flatMap((job) => job.attachments),
    promptOverride
  );
  const selectedIds = new Set(selectedJobs.map((job) => job.id));
  const firstSelectedIndex = batchDraftJobs.findIndex((job) => selectedIds.has(job.id));
  const nextJobs = [];
  batchDraftJobs.forEach((job, index) => {
    if (index === firstSelectedIndex) nextJobs.push(combinedJob);
    if (!selectedIds.has(job.id)) nextJobs.push(job);
  });
  batchDraftJobs = nextJobs;
  setBatchBuilderError("");
  renderBatchDraft({ focusJobId: combinedJob.id });
}

function ensureBatchBuilder() {
  let drawer = document.querySelector("#chatgpt-queue-batch-drawer");
  if (drawer) return drawer;
  ensureQueueStyles();
  drawer = document.createElement("aside");
  drawer.id = "chatgpt-queue-batch-drawer";
  drawer.hidden = true;
  drawer.setAttribute("aria-labelledby", "cq-batch-title");
  drawer.innerHTML = `
    <div class="cq-drawer-header">
      <div>
        <h2 id="cq-batch-title">Batch image jobs</h2>
        <p>Create separate or grouped image requests, each with shared or custom instructions.</p>
      </div>
      <button type="button" class="cq-close-btn" aria-label="Close batch image jobs">×</button>
    </div>
    <div class="cq-field">
      <label for="cq-file-input">Images</label>
      <div class="cq-drop-zone">
        <strong>Drop PNG, JPEG, WebP, or GIF images here</strong>
        <small>Files stay in this browser tab until they are sent.</small>
        <button type="button" class="cq-choose-files-btn">Choose images</button>
        <input id="cq-file-input" class="cq-file-input" type="file" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
      </div>
    </div>
    <div class="cq-field">
      <label for="cq-batch-prompt">Shared prompt (optional)</label>
      <textarea id="cq-batch-prompt" dir="auto" aria-describedby="cq-batch-prompt-hint" placeholder="For example: Make the background transparent."></textarea>
      <p id="cq-batch-prompt-hint">New jobs use this prompt until you customize them individually.</p>
      <div class="cq-shared-actions">
        <button type="button" class="cq-apply-shared-btn">Use shared prompt for all jobs</button>
      </div>
    </div>
    <div class="cq-jobs-toolbar">
      <strong class="cq-job-count">0 draft jobs</strong>
      <div class="cq-jobs-toolbar-actions">
        <button type="button" class="cq-select-all-btn">Select all</button>
        <button type="button" class="cq-combine-jobs-btn">Combine selected</button>
      </div>
    </div>
    <ul class="cq-jobs-list" aria-label="Draft image jobs"></ul>
    <div class="cq-builder-error" role="alert" aria-live="assertive"></div>
    <div class="cq-builder-footer">
      <span class="cq-builder-summary" aria-live="polite">No files selected</span>
      <button type="button" class="cq-add-jobs-btn cq-primary">Add jobs</button>
    </div>
  `;
  document.body.appendChild(drawer);

  const fileInput = drawer.querySelector(".cq-file-input");
  const dropZone = drawer.querySelector(".cq-drop-zone");
  const error = drawer.querySelector(".cq-builder-error");
  const sharedPromptInput = drawer.querySelector("#cq-batch-prompt");
  drawer.querySelector(".cq-close-btn").addEventListener("click", () => {
    drawer.hidden = true;
  });
  drawer.querySelector(".cq-choose-files-btn").addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    addFilesToBatchDraft(fileInput.files);
    fileInput.value = "";
  });
  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.dataset.dragging = "true";
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.dataset.dragging = "false";
    });
  });
  dropZone.addEventListener("drop", (event) => addFilesToBatchDraft(event.dataTransfer.files));
  sharedPromptInput.addEventListener("input", () => {
    batchDraftJobs.forEach((job) => {
      if (job.promptOverride === null && sharedPromptInput.value.trim()) {
        job.validationError = false;
      }
    });
    drawer.querySelectorAll('.cq-job-prompt').forEach((input) => {
      const job = findBatchDraftJob(input.getAttribute("data-job-id"));
      if (!job || job.promptOverride !== null) return;
      input.value = sharedPromptInput.value;
      input.setAttribute("aria-invalid", job.validationError ? "true" : "false");
    });
    setBatchBuilderError("");
  });
  drawer.querySelector(".cq-apply-shared-btn").addEventListener("click", () => {
    batchDraftJobs.forEach((job) => {
      job.promptOverride = null;
      job.validationError = false;
    });
    setBatchBuilderError("");
    renderBatchDraft();
  });
  drawer.querySelector(".cq-select-all-btn").addEventListener("click", () => {
    const shouldSelect = !batchDraftJobs.length ||
      !batchDraftJobs.every((job) => job.selected);
    batchDraftJobs.forEach((job) => { job.selected = shouldSelect; });
    renderBatchDraft();
  });
  drawer.querySelector(".cq-combine-jobs-btn").addEventListener("click", combineSelectedBatchJobs);
  drawer.querySelector(".cq-add-jobs-btn").addEventListener("click", () => {
    const attachments = getBatchDraftAttachments();
    const unsupported = attachments.filter(
      (attachment) => !isSupportedImageAttachment(attachment)
    );
    if (batchDraftJobs.length === 0) {
      error.textContent = "Choose at least one image.";
      drawer.querySelector(".cq-choose-files-btn").focus();
      return;
    }
    if (unsupported.length) {
      error.textContent = "Remove unsupported files before adding these jobs.";
      return;
    }
    const invalidJobs = batchDraftJobs.filter((job) => !getEffectiveBatchPrompt(job));
    batchDraftJobs.forEach((job) => {
      job.validationError = invalidJobs.includes(job);
    });
    if (invalidJobs.length) {
      error.textContent = `${invalidJobs.length} ${invalidJobs.length === 1 ? "job needs" : "jobs need"} a prompt before queueing.`;
      renderBatchDraft({ focusJobId: invalidJobs[0].id });
      return;
    }

    const newItems = batchDraftJobs.map((job) =>
      createQueueItem(getEffectiveBatchPrompt(job), job.attachments)
    );
    batchDraftJobs = [];
    messageQueue.push(...newItems);
    sharedPromptInput.value = "";
    error.textContent = "";
    renderBatchDraft();
    drawer.hidden = true;
    updateQueueIndicator();
    updateMessageList();
    if (!queuePaused) processMessageQueue();
  });
  drawer.addEventListener("keydown", (event) => {
    if (event.key === "Escape") drawer.hidden = true;
  });
  return drawer;
}

function openBatchBuilder() {
  const drawer = ensureBatchBuilder();
  drawer.hidden = false;
  renderBatchDraft();
  drawer.querySelector(
    batchDraftJobs.length ? "#cq-batch-prompt" : ".cq-choose-files-btn"
  )?.focus();
}

function clearComposerAttachments() {
  const root = getComposerRoot();
  const selectors = [
    'button[aria-label*="Remove file"]',
    'button[aria-label*="Remove attachment"]',
    'button[aria-label*="Remove image"]',
  ];
  const removeButtons = new Set(
    selectors.flatMap((selector) => Array.from(root.querySelectorAll(selector)))
  );
  removeButtons.forEach((button) => button.click());
  const input = findComposerFileInput();
  if (input) input.value = "";
}

function resetFailedQueueComposer(item) {
  if (stagedAttachments.length > 0) return;
  clearComposerAttachments();
  const input = getPromptInput();
  if (input && input.innerText.trim() === item.prompt.trim()) {
    setProseMirrorContent(input, "");
    input.dispatchEvent(new InputEvent("input", { bubbles: true }));
  }
}

function captureComposerFiles(files) {
  if (replayingAttachments) return;
  appendUniqueAttachments(stagedAttachments, files);
}

document.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.type !== "file") return;
  if (input.closest("#chatgpt-queue-batch-drawer")) return;
  captureComposerFiles(input.files);
}, true);

document.addEventListener("drop", (event) => {
  if (event.target?.closest?.("#chatgpt-queue-batch-drawer")) return;
  const root = getComposerRoot();
  if (root.contains(event.target) && event.dataTransfer?.files?.length) {
    captureComposerFiles(event.dataTransfer.files);
  }
}, true);

document.addEventListener("paste", (event) => {
  if (event.target?.closest?.("#chatgpt-queue-batch-drawer")) return;
  const root = getComposerRoot();
  if (root.contains(event.target) && event.clipboardData?.files?.length) {
    captureComposerFiles(event.clipboardData.files);
  }
}, true);

function handleKeyDown(event) {
  const sendButton = findSendButton();
  const loading = findLoadingIndicator();

  const inputDiv = document.querySelector("div#prompt-textarea");
  const currentInputValue = inputDiv ? inputDiv.innerText.trim() : "";

  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    event.stopPropagation();

    // Store the raw message without any escaping
    if (currentInputValue !== currentTypedMessage) {
      currentTypedMessage = currentInputValue;
    }

    if (messageQueue.length === 0 && !loading && (currentTypedMessage || stagedAttachments.length)) {
      const immediateAttachments = stagedAttachments.splice(0);
      const immediateItem = createQueueItem(currentTypedMessage, immediateAttachments);
      attemptToSendMessage(immediateItem, {
        allowExistingComposerContent: true,
        composerAlreadyHasAttachments: immediateAttachments.length > 0,
      }).then((result) => {
        if (result.success) {
          cleanupAttachments(immediateAttachments);
        } else {
          appendUniqueAttachments(
            stagedAttachments,
            immediateAttachments.map((attachment) => attachment.file)
          );
          cleanupAttachments(immediateAttachments);
        }
      });
      return;
    }

    if ((currentTypedMessage || stagedAttachments.length) && (isFeatureUnlocked() || checkQueueLimit())) {
      const attachments = stagedAttachments.splice(0);
      messageQueue.push(createQueueItem(currentTypedMessage, attachments));

      if (inputDiv) {
        setProseMirrorContent(inputDiv, "");
        inputDiv.dispatchEvent(new InputEvent("input", { bubbles: true }));
      }
      if (attachments.length) clearComposerAttachments();
      currentTypedMessage = "";
      updateQueueIndicator();
      updateMessageList();
      processMessageQueue();
    } else {
      console.log(
        "Message not queued:",
        currentTypedMessage,
        "Pro status:",
        isPro,
        "Queue length:",
        messageQueue.length,
        "Send button:",
        sendButton,
        "Loading:",
        loading
      );
    }
  }
}

function reinjectUIComponents() {
  editingInProgress = false;

  const inputDiv = document.querySelector(
    "div#prompt-textarea[contenteditable='true']"
  );

  if (inputDiv) {
    inputDiv.removeEventListener("keydown", handleKeyDown);
    inputDiv.removeEventListener("input", handleInput);
    inputDiv.hasListener = false;
    addEventListeners();
  }
}

function addEventListeners() {
  const inputDiv = document.querySelector(
    "div#prompt-textarea[contenteditable='true']"
  );

  if (inputDiv) {
    if (!inputDiv.hasListener) {
      inputDiv.addEventListener("keydown", handleKeyDown, {
        capture: true,
        passive: false,
      });
      inputDiv.addEventListener("input", handleInput);
      inputDiv.hasListener = true;
    }
  }
}

function handleInput(event) {
  currentTypedMessage = event.target.innerText;
}

function scheduleQueueProcessing() {
  setTimeout(async () => {
    if (!sendingInProgress && messageQueue.length > 0) {
      await processMessageQueue();
    }
    scheduleQueueProcessing();
  }, 1000);
}
setInterval(() => {
  if (window.location.href !== currentURL) {
    currentURL = window.location.href;
    if (messageQueue.length > 0) {
      queuePaused = true;
      queuePauseReason = "The ChatGPT conversation changed. Resume when this is the intended chat.";
      updateMessageList();
    }
    reinjectUIComponents();
  }

  const inputDiv = document.querySelector(
    "div#prompt-textarea[contenteditable='true']"
  );
  if (inputDiv) {
    if (inputDiv.innerText !== userInput) {
      userInput = inputDiv.innerText;
      reinjectUIComponents();
    }
  }
}, 2000);

(function injectUI(retryCount = 0) {
  function handleInjection(inputDiv) {
    inputDiv.addEventListener("keydown", handleKeyDown, {
      capture: true,
      passive: false,
    });
    inputDiv.addEventListener("input", handleInput);
    inputDiv.hasListener = true;
    scheduleQueueProcessing();
    requestProStatus();
    setupContinueButtonWatcher();
  }

  let inputDiv = document.querySelector(
    "div#prompt-textarea[contenteditable='true']"
  );
  if (inputDiv) {
    handleInjection(inputDiv);
  } else {
    const observer = new MutationObserver((mutations, obs) => {
      inputDiv = document.querySelector(
        "div#prompt-textarea[contenteditable='true']"
      );
      if (inputDiv) {
        handleInjection(inputDiv);
        obs.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    if (retryCount < 50) {
      setTimeout(() => injectUI(retryCount + 1), 500);
    }
  }
})();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openBatchBuilder") {
    openBatchBuilder();
    sendResponse({ success: true });
  } else if (request.action === "addToQueue") {
    try {
      if (!request.messages || !Array.isArray(request.messages)) {
        console.error("Invalid messages array in addToQueue request");
        sendResponse({ success: false, error: "Invalid messages array" });
        return true;
      }

      messageQueue.push(...request.messages.map((message) => createQueueItem(message)));

      updateQueueIndicator();
      updateMessageList();
      processMessageQueue();
      sendResponse({ success: true });
    } catch (error) {
      console.error("Error in addToQueue handler:", error);
      sendResponse({ success: false, error: error.message });
    }
  }
  return true;
});

async function processMessageQueue() {
  if (
    editingInProgress ||
    sendingInProgress ||
    queuePaused ||
    messageQueue.length === 0
  ) return;

  const inputDiv = document.querySelector(
    "div#prompt-textarea[contenteditable='true']"
  );
  if (inputDiv && (inputDiv.innerText.trim().length > 0 || stagedAttachments.length > 0)) {
    userTyping = true;
    updateMessageList();
    return;
  }

  // Check if we need to wait due to delay
  const now = Date.now();
  const result = await chrome.storage.local.get(["promptDelay"]);
  const promptDelay = result.promptDelay || 0;
  const timeToWait = Math.max(0, lastMessageTime + promptDelay - now);

  if (timeToWait > 0) {
    // Clear any existing countdown
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    // Start a new countdown
    let remainingTime = timeToWait;
    updateMessageList(remainingTime);

    countdownInterval = setInterval(() => {
      remainingTime = Math.max(0, remainingTime - 1000);
      updateMessageList(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
    }, 1000);

    await new Promise((resolve) => setTimeout(resolve, timeToWait));
  }

  userTyping = false;
  const item = getQueueItem(0);
  if (!item) return;
  item.attempts += 1;
  item.status = "waiting";
  item.error = "";
  const sendResult = await attemptToSendMessage(item);

  if (sendResult.success) {
    lastMessageTime = Date.now();
    messageQueue.shift();
    cleanupAttachments(item.attachments);
  } else if (sendResult.retryable) {
    item.status = "waiting";
    item.error = "";
  } else {
    item.status = "failed";
    item.error = sendResult.error || "This job could not be sent.";
    queuePaused = true;
    queuePauseReason = "A job needs attention.";
  }

  updateQueueIndicator();
  updateMessageList();
}

function setupContinueButtonWatcher() {
  let lastClickTime = 0;
  const CLICK_COOLDOWN = 2000; // 2 seconds cooldown between clicks

  const observer = new MutationObserver((mutations) => {
    const now = Date.now();
    if (now - lastClickTime < CLICK_COOLDOWN) {
      return; // Skip if we're still in cooldown
    }

    const continueButton = Array.from(
      document.querySelectorAll("button.btn")
    ).find((btn) => btn.textContent.includes("Continue generating"));

    if (continueButton) {
      console.log("Continue button found, clicking automatically");
      continueButton.click();
      lastClickTime = now;
    }
  });

  // Reduce the scope of what we're observing and optimize the configuration
  const chatArea = document.querySelector("main") || document.body;
  observer.observe(chatArea, {
    childList: true,
    subtree: true,
    attributes: false, // We don't need attribute changes
    characterData: false, // We don't need text changes
  });

  return observer;
}
