// GPT Queue Enterprise Edition - Popup Script
// Universal Free Version - All features enabled by default

document.addEventListener("DOMContentLoaded", function () {
  const promptChainLink = document.getElementById("promptChainLink");
  const batchImagesLink = document.getElementById("batchImagesLink");
  const bulkInputContainer = document.getElementById("bulkInputContainer");
  const queueButton = document.getElementById("queueButton");
  const bulkQueueInput = document.getElementById("bulkQueueInput");
  const promptDelayInput = document.getElementById("promptDelay");
  const delaySettingsLink = document.getElementById("delaySettingsLink");
  const delaySettingsContainer = document.getElementById("delaySettingsContainer");

  // Load saved prompt delay
  chrome.storage.local.get(["promptDelay"], function (result) {
    if (result.promptDelay) {
      promptDelayInput.value = (result.promptDelay || 0) / 1000;
    } else {
      promptDelayInput.value = "0";
    }
  });

  // Save prompt delay when changed
  promptDelayInput.addEventListener("change", () => {
    const delaySeconds = Math.max(0, parseInt(promptDelayInput.value) || 0);
    const delayMs = delaySeconds * 1000;
    chrome.storage.local.set({ promptDelay: delayMs });
  });

  // Toggle Bulk Prompt Chains Container
  promptChainLink.addEventListener("click", function () {
    const isHidden = bulkInputContainer.style.display === "none";
    bulkInputContainer.style.display = isHidden ? "block" : "none";
    if (isHidden) {
      bulkQueueInput.focus();
    }
  });

  // Open Batch Image Jobs in ChatGPT DOM
  batchImagesLink.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (!tabs[0]) return;
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "openBatchBuilder" },
        function (response) {
          if (chrome.runtime.lastError) {
            console.error("Error opening batch image jobs:", chrome.runtime.lastError.message);
          } else if (response && response.success) {
            window.close();
          }
        }
      );
    });
  });

  // Toggle Delay Settings Container
  delaySettingsLink.addEventListener("click", function () {
    const isHidden = delaySettingsContainer.style.display === "none";
    delaySettingsContainer.style.display = isHidden ? "block" : "none";
    if (isHidden) {
      promptDelayInput.focus();
    }
  });

  // Auto-resize bulk prompt textarea
  bulkQueueInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  // Queue bulk messages
  queueButton.addEventListener("click", function () {
    const messages = bulkQueueInput.value
      .split("~")
      .map((msg) => msg.trim())
      .filter((msg) => msg !== "");

    if (messages.length === 0) {
      console.log("No valid prompts to queue");
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (!tabs[0]) return;
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "addToQueue", messages: messages },
        function (response) {
          if (chrome.runtime.lastError) {
            console.error("Error sending queue messages:", chrome.runtime.lastError.message);
          } else if (response && response.success) {
            bulkQueueInput.value = "";
            bulkQueueInput.style.height = "40px";
            window.close();
          }
        }
      );
    });
  });
});
