// GPT Queue Enterprise Edition - Background Service Worker
// Universal Institute Version - All features permanently unlocked offline

let extensionState = {
  textareaFound: false,
  currentInteraction: "Idle",
  queuedMessages: [],
  lastMessageStatus: "No messages sent yet.",
};

const isPro = true;
const userTier = "enterprise";

// Initialize default extension settings
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    isPro: true,
    userTier: "enterprise",
  });

  chrome.storage.local.get(["promptDelay"], function (result) {
    if (typeof result.promptDelay === "undefined") {
      chrome.storage.local.set({ promptDelay: 0 });
    }
  });

  notifyTabsOfStatus();
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.set({
    isPro: true,
    userTier: "enterprise",
  });
  notifyTabsOfStatus();
});

// Broadcast permanent Enterprise unlock status to all active tabs
function notifyTabsOfStatus() {
  chrome.tabs.query({}, function (tabs) {
    for (let tab of tabs) {
      chrome.tabs.sendMessage(
        tab.id,
        {
          type: "tierStatus",
          tier: "enterprise",
          isPro: true,
        },
        () => {
          if (chrome.runtime.lastError) {
            // Ignore tabs without content script
          }
        }
      );
      chrome.tabs.sendMessage(
        tab.id,
        { type: "proStatus", isPro: true },
        () => {
          if (chrome.runtime.lastError) {}
        }
      );
    }
  });
}

// Runtime message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPopup") {
    chrome.action.openPopup();
  } else if (
    request.action === "checkProStatus" ||
    request.action === "getTierStatus" ||
    request.type === "getProStatus"
  ) {
    sendResponse({
      success: true,
      isPro: true,
      tier: "enterprise",
    });
  }
  return true;
});

// Re-inject content script on navigation if needed
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (
      tab.url &&
      (tab.url.includes("chat.openai.com") || tab.url.includes("chatgpt.com"))
    ) {
      if (changeInfo.url && chrome.scripting) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["content.js"],
        });
      }
    }
  }
});
