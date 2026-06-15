// Load i18n and initialize popup
document.addEventListener('DOMContentLoaded', async () => {
  // i18n.js is loaded via <script> tag in popup.html, so it should be available
  // If not, wait a bit for it to load
  if (!window.t) {
    console.log('Waiting for i18n to load...');
    let attempts = 0;
    while (!window.t && attempts < 10) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
    if (!window.t) {
      console.error('i18n.js failed to load');
    }
  }

  // Initialize popup
  initializePopup();
});

const EXTENSION_API_KEY = "ext_osZG3A@l{F)ykK]=LGJ2Ozhf_extension";

// Local state for unfollow
let isUnfollowing = false;

// Initialize popup
async function initializePopup() {
  // Wait for i18n to be ready
  await loadLanguage();

  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');
  const userLimitInput = document.getElementById('user-limit');
  const likeRandomCheckbox = document.getElementById('like-random');
  const statusDot = document.getElementById('status-indicator');
  const statCount = document.getElementById('stat-count');
  const statSkipped = document.getElementById('stat-skipped');
  const statTotalProcessed = document.getElementById('stat-total-processed');
  const statTotalSkipped = document.getElementById('stat-total-skipped');
  const logContainer = document.getElementById('log-container');
  const currentTask = document.getElementById('current-task');
  const languageSelect = document.getElementById('language-select');

  // Tab elements
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Settings elements
  const followPrivateCheckbox = document.getElementById('follow-private');
  const actionDelayInput = document.getElementById('action-delay');
  const maxFollowersInput = document.getElementById('max-followers');

  // Test backend connectivity on popup open
  console.log('🧪 [POPUP] Testing backend connectivity...');
  chrome.runtime.sendMessage({ action: 'GET_USER_ID' }, (response) => {
    if (chrome.runtime.lastError) {
      console.error('❌ [POPUP] Error getting userId:', chrome.runtime.lastError);
    } else {
      console.log('✅ [POPUP] userId from background:', response?.userId);
      if (response?.userId) {
        // Test backend call
        fetch(`https://falconbot.duckdns.org/extension/status/${response.userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': EXTENSION_API_KEY
          }
        })
          .then(res => {
            console.log(`📡 [POPUP] Backend status check: ${res.status} ${res.statusText}`);
            return res.json();
          })
          .then(data => {
            console.log('✅ [POPUP] Backend response:', data);
          })
          .catch(error => {
            console.error('❌ [POPUP] Backend test failed:', error);
          });
      } else {
        console.warn('⚠️ [POPUP] No userId available');
      }
    }
  });

  // Load saved settings and state
  const data = await chrome.storage.local.get(['isRunning', 'userLimit', 'likeRandom', 'stats', 'totalStats', 'logs', 'currentTask', 'followPrivate', 'actionDelay', 'maxFollowers']);

  if (data.userLimit) userLimitInput.value = data.userLimit;
  if (data.likeRandom !== undefined) likeRandomCheckbox.checked = data.likeRandom;

  // Load settings
  if (followPrivateCheckbox) {
    followPrivateCheckbox.checked = data.followPrivate !== false; // Default: true (follow private)
  }
  if (actionDelayInput) {
    actionDelayInput.value = data.actionDelay || 15; // Default: 15 seconds
  }
  if (maxFollowersInput) {
    maxFollowersInput.value = data.maxFollowers || 1000; // Default: 1000
  }
  if (data.stats) {
    statCount.textContent = data.stats.processed || 0;
    statSkipped.textContent = data.stats.skipped || 0;
  }
  if (data.totalStats) {
    statTotalProcessed.textContent = data.totalStats.processed || 0;
    statTotalSkipped.textContent = data.totalStats.skipped || 0;
  }
  if (data.currentTask) currentTask.textContent = data.currentTask;
  if (data.logs) renderLogs(data.logs);

  // Set language selector
  languageSelect.value = getCurrentLanguage();

  // Update all UI texts
  updateUITexts();

  // Debug: Log current language and some translations
  console.log('Popup language:', getCurrentLanguage());
  console.log('Sample translations:', {
    aboutTitle: t('aboutTitle'),
    linksTitle: t('linksTitle'),
    websiteLink: t('websiteLink')
  });

  updateUI(data.isRunning);

  // Initialize prices and account status
  updatePricesForCurrency();

  // Update placeholders with translations (will be set later when activationCodeInput is declared)

  // Ensure translations are loaded before updating account status
  setTimeout(() => {
    updateAccountStatus();
  }, 100);

  // Tab functionality
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');

      // Remove active class from all tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab
      btn.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');

      // Update account status when switching to specific tabs
      if (tabName === 'automation') {
        setTimeout(() => updateAutomationAccountStatus(), 100);
      } else if (tabName === 'premium') {
        setTimeout(() => updatePremiumAccountStatus(), 100);
      }

      // Ensure translations are applied to the newly visible tab
      setTimeout(() => updateUITexts(), 10);
    });
  });

  // Language selector
  languageSelect.addEventListener('change', async () => {
    const newLang = languageSelect.value;
    console.log('Changing language to:', newLang);
    setLanguage(newLang);
    await loadLanguage(); // Ensure language is loaded
    updateUITexts();
    updateAccountStatus(); // Refresh dynamic texts (like "Unlimited")

    // Test translation
    console.log('Testing translation - start button should be:', t('startAutomation'));
  });

  // Settings event listeners
  if (followPrivateCheckbox) {
    followPrivateCheckbox.addEventListener('change', () => {
      chrome.storage.local.set({ followPrivate: followPrivateCheckbox.checked });
      addLog(followPrivateCheckbox.checked ?
        t('followPrivateEnabled') :
        t('followPrivateDisabled'));
    });
  }

  if (actionDelayInput) {
    actionDelayInput.addEventListener('change', () => {
      const delay = parseInt(actionDelayInput.value) || 15;
      if (delay < 5) actionDelayInput.value = 5;
      if (delay > 60) actionDelayInput.value = 60;
      chrome.storage.local.set({ actionDelay: parseInt(actionDelayInput.value) });
      addLog(t('delayUpdated', { seconds: actionDelayInput.value }));
    });
  }

  if (maxFollowersInput) {
    maxFollowersInput.addEventListener('change', () => {
      const max = parseInt(maxFollowersInput.value) || 1000;
      chrome.storage.local.set({ maxFollowers: max });
    });
  }

  startBtn.addEventListener('click', () => {
    console.log('Start button clicked');
    const limit = parseInt(userLimitInput.value);
    const likeRandom = likeRandomCheckbox.checked;

    console.log('Sending message:', { action: 'START_AUTOMATION', settings: { limit, likeRandom } });

    chrome.runtime.sendMessage({
      action: 'START_AUTOMATION',
      settings: {
        limit,
        likeRandom,
        maxFollowers: parseInt(maxFollowersInput.value) || 1000
      }
    }).then(() => {
      console.log('Message sent successfully');
      // Reset current session counters immediately
      statCount.textContent = '0';
      statSkipped.textContent = '0';
      updateUI(true);
    }).catch((error) => {
      console.error('Error sending message:', error);
      addLog(t('errorSending', { error: error.message }));
    });
  });

  stopBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'STOP_AUTOMATION' });
    updateUI(false);
    addLog(t('automationStoppedByUser'));
  });

  // Unfollow handlers
  const unfollowStartBtn = document.getElementById('unfollow-start-btn');
  const unfollowStopBtn = document.getElementById('unfollow-stop-btn');
  const unfollowLimitInput = document.getElementById('unfollow-limit');
  const unfollowStatCount = document.getElementById('unfollow-stat-count');
  const unfollowStatSkipped = document.getElementById('unfollow-stat-skipped');

  unfollowStartBtn.addEventListener('click', () => {
    const limit = parseInt(unfollowLimitInput.value) || 10;
    chrome.runtime.sendMessage({
      action: 'START_UNFOLLOW',
      limit: limit
    }).then(() => {
      unfollowStatCount.textContent = '0';
      unfollowStatSkipped.textContent = '0';
      updateUI(false, true); // (isRunning, isUnfollowing)
    }).catch((error) => {
      addLog(t('errorSending', { error: error.message }));
    });
  });

  unfollowStopBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'STOP_UNFOLLOW' });
    updateUI(false, false);
    addLog(t('unfollowStopped'));
  });

  // Premium tab handlers
  const premiumActivationCodeInput = document.getElementById('premium-activation-code');
  const premiumActivateBtn = document.getElementById('premium-activate-btn');
  const premiumPlanButtons = document.querySelectorAll('.plan-btn');

  // Update placeholder with translation
  if (premiumActivationCodeInput) {
    premiumActivationCodeInput.placeholder = t('activationCodePlaceholder');
  }

  if (premiumActivateBtn) {
    premiumActivateBtn.addEventListener('click', () => {
      const code = premiumActivationCodeInput.value.trim();
      if (!code) return;

      addLog(t('validatingCode', { code }));

      // Validate code via backend
      makeApiRequest('https://falconbot.duckdns.org/extension/validate-code', 'POST', { code: code })
        .then(data => {
          if (data.valid) {
            addLog(t('codeValid', { days: data.days }));

            // Activate premium - get userId first
            chrome.runtime.sendMessage({ action: 'GET_USER_ID' }, (userResponse) => {
              const userId = userResponse?.userId || 'anonymous';

              makeApiRequest('https://falconbot.duckdns.org/extension/activate', 'POST', {
                code: code,
                userId: userId
              })
                .then(activateData => {
                  if (activateData.success) {
                    addLog(t('premiumActivatedSuccess', { expiry: activateData.expiry }));

                    // Update local storage with premium status
                    const expiryDate = new Date(activateData.expiry);
                    chrome.storage.local.set({
                      userPlan: 'premium',
                      premiumExpiry: expiryDate.toISOString()
                    }, () => {
                      addLog(t('premiumSavedLocally'));
                      premiumActivationCodeInput.value = '';

                      // Force background script to reload state
                      chrome.runtime.sendMessage({ action: 'RELOAD_STATE' });

                      // Wait for background to reload, then update all UI
                      setTimeout(() => {
                        updateAccountStatus();
                        updatePremiumAccountStatus();
                        updateAutomationAccountStatus();
                      }, 300);
                    });
                  } else {
                    addLog(t('activationError', { reason: activateData.reason }));
                  }
                })
                .catch(error => {
                  addLog(t('activationErrorGeneric', { error: error.message }));
                });
            }); // Close chrome.runtime.sendMessage callback
          } else {
            addLog(t('codeInvalid'));
          }
        })
        .catch(error => {
          addLog(t('validationError', { error: error.message }));
        });
    });
  }

  premiumPlanButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const plan = btn.dataset.plan;
      const price = btn.dataset.price;

      // Prevent multiple clicks
      if (btn.classList.contains('loading')) return;

      btn.classList.add('loading');
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span>Loading...</span>`; // Temporary feedback

      addLog(t('creatingCheckout', { price, plan }));

      try {
        // Get user ID from background script (persistent UUID)
        const response = await new Promise((resolve) => {
          chrome.runtime.sendMessage({ action: 'GET_USER_ID' }, resolve);
        });

        const userId = response?.userId || 'anonymous';

        // Now create checkout session directly (no redundant health check)
        const data = await makeApiRequest('https://falconbot.duckdns.org/extension/checkout', 'POST', {
          planType: plan,
          userId: userId
        });

        if (data.checkoutUrl) {
          addLog(t('redirectingStripe'));
          // Open Stripe checkout in new tab
          chrome.tabs.create({ url: data.checkoutUrl });
        } else {
          addLog(t('checkoutError', { error: data.error || 'Invalid response' }));
        }
      } catch (error) {
        addLog(t('connectionFailed', { error: error.message }));
        addLog(t('checkBackend'));
      } finally {
        btn.classList.remove('loading');
        btn.innerHTML = originalText;
      }
    });
  });

  // Function to update prices (always USD)
  function updatePricesForCurrency() {
    // Prices are always displayed in USD
  }

  // Function to calculate reset time (midnight)
  function getResetTime() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  }

  // Function to format reset time
  function formatResetTime(date) {
    const isPT = getCurrentLanguage() === 'pt-BR';
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Function to update unfollow account status
  async function updateUnfollowAccountStatus() {
    try {
      const accountStatus = await new Promise((resolve) => {
        chrome.runtime.sendMessage({ action: 'GET_ACCOUNT_STATUS' }, resolve);
      });
      const localData = await chrome.storage.local.get(['userPlan', 'premiumExpiry', 'isUnfollowing']);

      const remainingElement = document.getElementById('unfollow-remaining-actions');
      const resetTimeElement = document.getElementById('unfollow-reset-time');
      const resetInfo = document.getElementById('unfollow-reset-info');

      const isPremium = true;

      if (isPremium) {
        if (remainingElement) {
          remainingElement.textContent = t('unlimited');
          remainingElement.classList.remove('low');
        }
        if (resetInfo) resetInfo.style.display = 'none';
      } else {
        const remainingActions = accountStatus?.remainingFollows || 0;
        if (remainingElement) {
          remainingElement.textContent = remainingActions.toString();
          remainingElement.classList.toggle('low', remainingActions <= 2);
        }

        if (resetTimeElement && resetInfo) {
          const resetTime = getResetTime();
          resetTimeElement.textContent = formatResetTime(resetTime);
          resetInfo.style.display = 'block';
        }

        // Only update buttons if NOT currently running (otherwise updateUI handles it)
        if (!localData.isUnfollowing && unfollowStartBtn) {
          if (!isPremium && remainingActions <= 0) {
            unfollowStartBtn.disabled = false;
            unfollowStartBtn.classList.add('disabled-by-limit');
            unfollowStartBtn.setAttribute('title', t('premiumUpgradeTooltip'));
          } else {
            unfollowStartBtn.disabled = false;
            unfollowStartBtn.classList.remove('disabled-by-limit');
            unfollowStartBtn.removeAttribute('title');
          }
        }
      }
    } catch (error) {
      console.error('Error updating unfollow account status:', error);
    }
  }

  // Function to update premium tab account status
  async function updatePremiumAccountStatus() {
    try {
      const localData = await chrome.storage.local.get(['userPlan', 'premiumExpiry']);
      const planElement = document.getElementById('premium-current-plan');
      const premiumExpiry = document.getElementById('premium-expiry');
      const expiryDate = document.getElementById('premium-expiry-date');
      const upgradeSection = document.getElementById('premium-upgrade-section');

      const isPremium = true;

      if (isPremium) {
        if (planElement) planElement.textContent = t('planPremium');
        if (upgradeSection) upgradeSection.style.display = 'none';

        if (localData.premiumExpiry && premiumExpiry && expiryDate) {
          const expiryDateObj = new Date(localData.premiumExpiry);
          const isPT = getCurrentLanguage() === 'pt-BR';

          let formattedDate;
          const hours = String(expiryDateObj.getHours()).padStart(2, '0');
          const minutes = String(expiryDateObj.getMinutes()).padStart(2, '0');
          const time = `${hours}:${minutes}`;

          if (isPT) {
            const day = String(expiryDateObj.getDate()).padStart(2, '0');
            const month = String(expiryDateObj.getMonth() + 1).padStart(2, '0');
            const year = expiryDateObj.getFullYear();
            formattedDate = `${day}/${month}/${year} ${time}`;
          } else {
            const month = String(expiryDateObj.getMonth() + 1).padStart(2, '0');
            const day = String(expiryDateObj.getDate()).padStart(2, '0');
            const year = expiryDateObj.getFullYear();
            formattedDate = `${month}/${day}/${year} ${time}`;
          }

          expiryDate.textContent = formattedDate;
          premiumExpiry.style.display = 'block';
        }
      } else {
        if (planElement) planElement.textContent = t('planFree');
        if (premiumExpiry) premiumExpiry.style.display = 'none';
        if (upgradeSection) upgradeSection.style.display = 'block';

        // Enable elements for free users
        if (premiumActivationCodeInput) premiumActivationCodeInput.disabled = false;
        if (premiumActivateBtn) premiumActivateBtn.disabled = false;
        premiumPlanButtons.forEach(btn => btn.disabled = false);

        // Reset placeholders and button text
        if (premiumActivationCodeInput) premiumActivationCodeInput.placeholder = t('activationCodePlaceholder');
        if (premiumActivateBtn) premiumActivateBtn.textContent = t('activateBtn');
      }
    } catch (error) {
      console.error('Error updating premium account status:', error);
    }
  }

  // Function to update automation account status
  async function updateAutomationAccountStatus() {
    try {
      const accountStatus = await new Promise((resolve) => {
        chrome.runtime.sendMessage({ action: 'GET_ACCOUNT_STATUS' }, resolve);
      });
      const localData = await chrome.storage.local.get(['userPlan', 'premiumExpiry', 'isRunning']);

      const remainingElement = document.getElementById('automation-remaining-follows');
      const resetTimeElement = document.getElementById('automation-reset-time');
      const resetInfo = document.getElementById('automation-reset-info');

      const isPremium = true;

      if (isPremium) {
        if (remainingElement) {
          remainingElement.textContent = t('unlimited');
          remainingElement.classList.remove('low');
        }
        if (resetInfo) resetInfo.style.display = 'none';
      } else {
        const remainingActions = accountStatus?.remainingFollows || 0;
        if (remainingElement) {
          remainingElement.textContent = remainingActions.toString();
          remainingElement.classList.toggle('low', remainingActions <= 2);
        }

        // Show reset time
        if (resetTimeElement && resetInfo) {
          const resetTime = getResetTime();
          resetTimeElement.textContent = formatResetTime(resetTime);
          resetInfo.style.display = 'block';
        }

        // Disable start button if no follows remaining
        if (startBtn && !isPremium && remainingActions <= 0) {
          startBtn.disabled = false;
          startBtn.classList.add('disabled-by-limit');
          startBtn.setAttribute('data-premium-tooltip', t('premiumUpgradeTooltip'));
          startBtn.setAttribute('title', t('premiumUpgradeTooltip'));
        } else if (startBtn && !localData.isRunning) {
          startBtn.disabled = false;
          startBtn.classList.remove('disabled-by-limit');
          startBtn.removeAttribute('data-premium-tooltip');
          startBtn.removeAttribute('title');
        }
      }
    } catch (error) {
      console.error('Error updating automation account status:', error);
    }
  }

  // Function to update account status display
  async function updateAccountStatus() {
    updateAutomationAccountStatus();
    updateUnfollowAccountStatus();
    updatePremiumAccountStatus();
  }

  // Prices are always in USD

  // Helper function for API requests with fetch (Better MV3 support)
  async function makeApiRequest(url, method = 'GET', data = null) {
    console.log(`[API] ${method} ${url}`, data);

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': EXTENSION_API_KEY
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, options);
      console.log(`[API] Response status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`[API] Request failed for ${url}:`, error);
      throw error;
    }
  }

  // Listen for updates from background
  chrome.runtime.onMessage.addListener((message) => {
    console.log('Popup received message:', message);

    if (message.action === 'UPDATE_STATS') {
      statCount.textContent = message.stats.processed;
      statSkipped.textContent = message.stats.skipped;
      if (message.totalStats) {
        statTotalProcessed.textContent = message.totalStats.processed;
        statTotalSkipped.textContent = message.totalStats.skipped;
      }
      // Update automation account status to refresh remaining follows
      updateAutomationAccountStatus();
    } else if (message.action === 'UPDATE_UNFOLLOW_STATS') {
      const unfollowStatCount = document.getElementById('unfollow-stat-count');
      const unfollowStatSkipped = document.getElementById('unfollow-stat-skipped');
      if (unfollowStatCount) unfollowStatCount.textContent = message.stats.processed;
      if (unfollowStatSkipped) unfollowStatSkipped.textContent = message.stats.skipped;
      updateUnfollowAccountStatus();
    } else if (message.action === 'UPDATE_LOG') {
      addLog(message.log);
    } else if (message.action === 'UPDATE_STATUS') {
      currentTask.textContent = message.status;
    } else if (message.action === 'AUTOMATION_FINISHED') {
      updateUI(false, false);
      addLog(t('automationFinished'));
    } else if (message.action === 'UNFOLLOW_FINISHED') {
      updateUI(false, false);
      addLog(t('unfollowFinished'));
    } else if (message.action === 'UNFOLLOW_STOPPED') {
      updateUI(false, false);
    } else if (message.action === 'LIMIT_REACHED') {
      updateUI(false, false);
      addLog(t('dailyLimitReached'));
      updateAccountStatus();
    }
  });

  // Update all UI texts based on current language
  function updateUITexts() {
    try {
      // Check if t function is available
      if (typeof t !== 'function') {
        console.log('Translation function not available yet, retrying...');
        setTimeout(updateUITexts, 100);
        return;
      }

      console.log('Applying translations...');

      // Update data-i18n elements (including spans inside buttons and hidden elements)
      const i18nElements = document.querySelectorAll('[data-i18n]');
      console.log(`Found ${i18nElements.length} elements with data-i18n`);

      i18nElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = t(key);
          console.log(`Translating ${key} -> ${translation}`);
          // Use textContent for safety, but allow HTML if translation contains HTML tags
          if (translation.includes('<') && translation.includes('>')) {
            element.innerHTML = translation;
          } else {
            element.textContent = translation;
          }
        }
      });

      // Update tab buttons (including custom tooltip via data-tooltip attribute)
      tabBtns.forEach(btn => {
        const tabName = btn.getAttribute('data-tab');
        if (tabName) {
          const titleKey = tabName === 'automation' ? 'automationTab' :
            tabName === 'unfollow' ? 'unfollowTab' :
              tabName === 'premium' ? 'premiumTab' :
                tabName === 'settings' ? 'settingsTab' :
                  tabName === 'about' ? 'aboutTab' : null;
          if (titleKey) {
            const tooltipText = t(titleKey);
            btn.setAttribute('title', tooltipText); // Keep for accessibility
            btn.setAttribute('data-tooltip', tooltipText); // For custom CSS tooltip (faster)
          }
        }
        const span = btn.querySelector('span[data-i18n]');
        if (span) {
          const key = span.getAttribute('data-i18n');
          if (key) {
            span.textContent = t(key);
          }
        }
      });

      // Update input placeholders with data-i18n-placeholder
      const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
      placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (key) {
          element.placeholder = t(key);
        }
      });

      // Update placeholder
      const placeholder = logContainer.querySelector('.log-placeholder');
      if (placeholder) {
        placeholder.textContent = t('ready');
      }

      // Update current task only if it shows default text
      if (currentTask && currentTask.textContent.trim() === '' || currentTask.textContent === 'Idle') {
        currentTask.textContent = t('idle');
      }

      console.log('UI texts updated to:', getCurrentLanguage());
    } catch (error) {
      console.error('Error updating UI texts:', error);
    }
  }

  // Test function for debugging
  window.testExtension = () => {
    console.log(t('testingExtension'));
    chrome.runtime.sendMessage({ action: 'START_AUTOMATION', settings: { limit: 1, likeRandom: false } })
      .then(() => console.log(t('messageSent')))
      .catch(error => console.error(t('errorSending', { error: error.message })));
  };

  // Diagnostic function
  window.diagnoseExtension = async () => {
    console.log('=== Extension Diagnostic ===');

    try {
      // Check if background script is responding
      console.log('1. Testing background script...');
      await chrome.runtime.sendMessage({ action: 'PING' });
      console.log('✅ Background script is responding');

      // Check active tab
      console.log('2. Checking active tab...');
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      console.log('Active tab:', tab.url);

      if (tab.url.includes('instagram.com')) {
        console.log('✅ On Instagram page');

        // Check if content script is loaded
        console.log('3. Testing content script...');
        try {
          const response = await chrome.tabs.sendMessage(tab.id, { action: 'PING' });
          console.log('✅ Content script is responding:', response);
        } catch (error) {
          console.error('❌ Content script not responding:', error);
          console.log('💡 Try refreshing the Instagram page');
        }
      } else {
        console.log('❌ Not on Instagram page');
      }

    } catch (error) {
      console.error('❌ Diagnostic failed:', error);
    }

    console.log('=== End Diagnostic ===');
  };

  async function updateUI(isRunning, isUnfollowingSession = false) {
    // Get account status to check limits
    const accountStatus = await new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: 'GET_ACCOUNT_STATUS' }, resolve);
    });

    // Check premium status from local storage (more reliable)
    const localData = await chrome.storage.local.get(['userPlan', 'premiumExpiry', 'isRunning', 'isUnfollowing']);
    const isPremium = true;

    const remainingActions = accountStatus?.remainingFollows || 0;
    const currentlyUnfollowing = localData.isUnfollowing || isUnfollowingSession;
    const currentlyRunning = localData.isRunning || isRunning;

    // Automation UI
    startBtn.disabled = currentlyRunning || currentlyUnfollowing || (!isPremium && remainingActions <= 0);
    stopBtn.disabled = !currentlyRunning;
    userLimitInput.disabled = currentlyRunning;
    likeRandomCheckbox.disabled = currentlyRunning;

    // Unfollow UI
    if (unfollowStartBtn) {
      unfollowStartBtn.disabled = currentlyRunning || currentlyUnfollowing || (!isPremium && remainingActions <= 0);
    }
    if (unfollowStopBtn) {
      unfollowStopBtn.disabled = !currentlyUnfollowing;
    }
    if (unfollowLimitInput) {
      unfollowLimitInput.disabled = currentlyUnfollowing;
    }

    if (currentlyRunning || currentlyUnfollowing) {
      statusDot.classList.add('active');
    } else {
      statusDot.classList.remove('active');
    }

    // Handle premium settings
    if (maxFollowersInput) {
      if (isPremium) {
        maxFollowersInput.disabled = currentlyRunning;
        maxFollowersInput.removeAttribute('title');
      } else {
        maxFollowersInput.disabled = false;
        maxFollowersInput.title = t('premiumTabTitle'); // Simple tooltip
      }
    }
  }

  function addLog(text) {
    const placeholder = logContainer.querySelector('.log-placeholder');
    if (placeholder) placeholder.remove();

    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
    logContainer.prepend(entry);

    // Limit log entries
    if (logContainer.children.length > 20) {
      logContainer.removeChild(logContainer.lastChild);
    }
  }

  function renderLogs(logs) {
    if (!logs || logs.length === 0) return;
    const placeholder = logContainer.querySelector('.log-placeholder');
    if (placeholder) placeholder.remove();

    logContainer.innerHTML = '';
    logs.forEach(log => {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      entry.textContent = log;
      logContainer.appendChild(entry);
    });
  }
};
