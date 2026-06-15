// Internationalization / Traduções
const translations = {
    'pt-BR': {
        // Popup
        'howToUse': '📱 <strong>Como usar:</strong> Abra um post no Instagram e clique em "Iniciar Automação" para seguir todos os perfis que comentaram no post.',
        'settings': '⚙️ Configure o limite de usuários e se quer dar like em fotos aleatórias.',
        'followLimit': 'Limite de Seguidores',
        'likeRandomPhoto': 'Curtir 1 foto aleatória',
        'processed': 'Processados',
        'skipped': 'Ignorados',
        'totalProcessed': 'Total Processados',
        'totalSkipped': 'Total Ignorados',
        'startAutomation': 'Iniciar Automação',
        'stop': 'Parar',
        'ready': 'Pronto para iniciar...',
        'idle': 'Ocioso',

        // UI Tabs
        'automationTab': 'Automação',
        'aboutTab': 'Sobre',

        // About Tab
        'aboutTitle': 'Sobre o IG Auto-Follow',
        'aboutDescription': 'Extensão gratuita para Chrome que automatiza seu engajamento no Instagram, seguindo perfis que comentaram em seus posts e aumentando sua visibilidade organicamente.',
        'featuresTitle': 'Funcionalidades',
        'featureSmartAI': '🤖 IA inteligente para detectar comentários legítimos',
        'featureMultiLanguage': '🌐 Suporte completo em português e inglês',
        'featureAnalytics': '📊 Analytics detalhado em tempo real',
        'featureSafe': '🔒 Totalmente seguro e respeita os termos do Instagram',
        'linksTitle': 'Links Úteis',
        'websiteLink': 'Site Oficial',
        'websiteLinkEn': 'Official Website (EN)',
        'privacyLink': 'Política de Privacidade',
        'updateLink': 'Verificar Atualizações',
        'developedByTitle': 'Desenvolvido por',
        'developedByDesc': 'Soluções tecnológicas para o seu negócio',

        // Logs
        'automationStarted': '🚀 Automação iniciada! Verificando se estamos em um post...',
        'automationStopped': '⏹️ Automação parada.',
        'automationFinished': '🎉 Automação finalizada com sucesso!',
        'automationStoppedByUser': '⏹️ Automação parada pelo usuário.',
        'postDetected': '📱 Post do Instagram detectado! Procurando comentários...',
        'notOnInstagram': '❌ Não estamos no Instagram. Redirecionando...',
        'notLoggedIn': '❌ Usuário não está logado no Instagram. Faça login primeiro.',
        'notOnPost': '❌ Não estamos em um post do Instagram. URL atual: {url}',
        'scrapingComments': 'Procurando comentários...',
        'usersFound': '🎯 Encontrados {count} perfis únicos nos comentários!',
        'usersToProcess': '🎯 Encontrados {count} perfis únicos para processar',
        'navigatingToProfile': '🌐 Navegando para perfil: @{username} ({current}/{total})',
        'processingProfile': '👤 Iniciando processamento do perfil @{username}',
        'privateAccount': '🔒 Conta @{username} é privada. Pulando.',
        'accountNotPrivate': '✅ Conta @{username} não é privada. Prosseguindo...',
        'clickedFollow': '👆 Clicou em Follow para @{username}',
        'alreadyFollowing': 'ℹ️ Já seguindo @{username} ou botão Follow não encontrado',
        'likedPhoto': '❤️ Deu like em uma foto aleatória de @{username}',
        'waiting': '⏳ Aguardando {seconds}s antes da próxima ação...',
        'limitReached': '🎯 Limite de {limit} perfis atingido! Finalizando automação.',
        'allProcessed': '✅ Todos os perfis foram processados! Automação finalizada.',
        'navigationError': '❌ Erro ao navegar para @{username}: {error}',
        'analysisComplete': '✅ Análise concluída! Preparando {count} perfis para seguir.',
        'startingDetection': '🔍 Iniciando detecção da página...',

        // Debug
        'testingExtension': 'Testing extension...',
        'messageSent': 'Message sent successfully',
        'errorSending': 'Error sending message: {error}',
        'contentScriptResponding': '✅ Content script is responding',
        'contentScriptNotResponding': '❌ Content script not responding',
        'onInstagram': '✅ On Instagram page',
        'notOnInstagramPage': '❌ Not on Instagram page',
        'diagnosticFailed': '❌ Diagnostic failed: {error}',
        'extensionDiagnostic': '=== Extension Diagnostic ===',
        'endDiagnostic': '=== End Diagnostic ===',
        'checkingActiveTab': '2. Checking active tab...',
        'testingBackground': '1. Testing background script...',
        'testingContentScript': '3. Testing content script...',

        // Monetization
        'dailyLimitReached': '❌ Limite diário de follows atingido. Aguarde até amanhã ou ative o Premium.',
        'premiumActivated': '🎉 Premium ativado! {days} dias restantes até {expiry}',
        'premiumExpired': '⚠️ Seu premium expirou. Renove para continuar usando.',
        'remainingFollows': '📊 Follows restantes hoje: {count}'
    },
    'en': {
        // Popup
        'howToUse': '📱 <strong>How to use:</strong> Open an Instagram post and click "Start Automation" to follow all profiles that commented on the post.',
        'settings': '⚙️ Configure the user limit and whether to like random photos.',
        'followLimit': 'Follow Limit',
        'likeRandomPhoto': 'Like 1 random photo',
        'processed': 'Processed',
        'skipped': 'Skipped',
        'totalProcessed': 'Total Processed',
        'totalSkipped': 'Total Skipped',
        'startAutomation': 'Start Automation',
        'stop': 'Stop',
        'ready': 'Ready to start...',
        'idle': 'Idle',

        // UI Tabs
        'automationTab': 'Automação',
        'aboutTab': 'Sobre',

        // About Tab
        'aboutTitle': 'Sobre o IG Auto-Follow',
        'aboutDescription': 'Extensão gratuita para Chrome que automatiza seu engajamento no Instagram, seguindo perfis que comentaram em seus posts e aumentando sua visibilidade organicamente.',
        'featuresTitle': 'Funcionalidades',
        'featureSmartAI': '🤖 IA inteligente para detectar comentários legítimos',
        'featureMultiLanguage': '🌐 Suporte completo em português e inglês',
        'featureAnalytics': '📊 Analytics detalhado em tempo real',
        'featureSafe': '🔒 Totalmente seguro e respeita os termos do Instagram',
        'linksTitle': 'Links Úteis',
        'websiteLink': 'Site Oficial',
        'websiteLinkEn': 'Official Website (EN)',
        'privacyLink': 'Política de Privacidade',
        'updateLink': 'Verificar Atualizações',
        'developedByTitle': 'Desenvolvido por',
        'developedByDesc': 'Soluções tecnológicas para o seu negócio',

        // Logs
        'automationStarted': '🚀 Automation started! Checking if we\'re on a post...',
        'automationStopped': '⏹️ Automation stopped.',
        'automationFinished': '🎉 Automation finished successfully!',
        'automationStoppedByUser': '⏹️ Automation stopped by user.',
        'postDetected': '📱 Instagram post detected! Looking for comments...',
        'notOnInstagram': '❌ Not on Instagram. Redirecting...',
        'notLoggedIn': '❌ User not logged in to Instagram. Please log in first.',
        'notOnPost': '❌ Not on an Instagram post. Current URL: {url}',
        'scrapingComments': 'Looking for comments...',
        'usersFound': '🎯 Found {count} unique profiles in comments!',
        'usersToProcess': '🎯 Found {count} unique profiles to process',
        'navigatingToProfile': '🌐 Navigating to profile: @{username} ({current}/{total})',
        'processingProfile': '👤 Starting to process profile @{username}',
        'privateAccount': '🔒 Account @{username} is private. Skipping.',
        'accountNotPrivate': '✅ Account @{username} is not private. Proceeding...',
        'clickedFollow': '👆 Clicked Follow for @{username}',
        'alreadyFollowing': 'ℹ️ Already following @{username} or Follow button not found',
        'likedPhoto': '❤️ Liked a random photo from @{username}',
        'waiting': '⏳ Waiting {seconds}s before next action...',
        'limitReached': '🎯 Limit of {limit} profiles reached! Finishing automation.',
        'allProcessed': '✅ All profiles processed! Automation finished.',
        'navigationError': '❌ Error navigating to @{username}: {error}',
        'analysisComplete': '✅ Analysis complete! Preparing {count} profiles to follow.',
        'startingDetection': '🔍 Starting page detection...',

        // Debug
        'testingExtension': 'Testing extension...',
        'messageSent': 'Message sent successfully',
        'errorSending': 'Error sending message: {error}',
        'contentScriptResponding': '✅ Content script is responding',
        'contentScriptNotResponding': '❌ Content script not responding',
        'onInstagram': '✅ On Instagram page',
        'notOnInstagramPage': '❌ Not on Instagram page',
        'diagnosticFailed': '❌ Diagnostic failed: {error}',
        'extensionDiagnostic': '=== Extension Diagnostic ===',
        'endDiagnostic': '=== End Diagnostic ===',
        'checkingActiveTab': '2. Checking active tab...',
        'testingBackground': '1. Testing background script...',
        'testingContentScript': '3. Testing content script...',

        // Monetization
        'dailyLimitReached': '❌ Daily follow limit reached. Wait until tomorrow or activate Premium.',
        'premiumActivated': '🎉 Premium activated! {days} days remaining until {expiry}',
        'premiumExpired': '⚠️ Your premium expired. Renew to continue using.',
        'remainingFollows': '📊 Remaining follows today: {count}'
    }
};

// Current language / Idioma atual
let currentLanguage = 'pt-BR';

// Get translation / Obter tradução
function t(key, params = {}) {
    const translation = translations[currentLanguage]?.[key] || translations['en'][key] || key;

    // Replace parameters / Substituir parâmetros
    return translation.replace(/{(\w+)}/g, (match, param) => params[param] || match);
}

// Set language / Definir idioma
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        // Save to storage / Salvar no storage
        chrome.storage.local.set({ language: lang });
        return true;
    }
    return false;
}

// Get current language / Obter idioma atual
function getCurrentLanguage() {
    return currentLanguage;
}

// Load language from storage / Carregar idioma do storage
function loadLanguage() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['language'], (data) => {
            if (data.language && translations[data.language]) {
                currentLanguage = data.language;
            } else {
                // Detect browser language / Detectar idioma do navegador
                const browserLang = navigator.language;
                if (browserLang.startsWith('pt')) {
                    currentLanguage = 'pt-BR';
                } else {
                    currentLanguage = 'en';
                }
            }
            resolve(currentLanguage);
        });
    });
}

// Helper function to format date as ISO string (YYYY-MM-DD)
function formatDateISO(date) {
    const d = date || new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper function to get today's date string (for local comparison)
function getTodayDateString() {
    return new Date().toDateString();
}

const EXTENSION_API_KEY = "ext_osZG3A@l{F)ykK]=LGJ2Ozhf_extension";

// Monetization functions
// Cache for backend premium validation (validates every 5 minutes)
let premiumValidationCache = {
    lastCheck: 0,
    isValid: false,
    expiry: null
};

const PREMIUM_VALIDATION_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function validatePremiumWithBackend() {
	return true;
}

async function isPremiumUser() {
    return false;
}

async function getRemainingDailyFollows() {
    
	return 999999;
}

async function canFollowToday() {
    const remaining = await getRemainingDailyFollows();
    return remaining > 0;
}

async function incrementDailyFollow() {
    console.log('📈 incrementDailyFollow() called');
    console.log('📈 Current state:', {
        dailyFollows: state.dailyFollows,
        lastFollowDate: state.lastFollowDate,
        pendingFollows: state.pendingFollows,
        today: getTodayDateString()
    });

    const today = getTodayDateString();
    if (state.lastFollowDate !== today) {
        console.log('🔄 New day detected, resetting counters');
        state.dailyFollows = 1;
        state.lastFollowDate = today;
        state.pendingFollows = 1;
    } else {
        state.dailyFollows++;
        state.pendingFollows++;
    }

    console.log('📈 Updated state:', {
        dailyFollows: state.dailyFollows,
        pendingFollows: state.pendingFollows
    });

    chrome.storage.local.set({
        dailyFollows: state.dailyFollows,
        lastFollowDate: state.lastFollowDate,
        pendingFollows: state.pendingFollows
    });

    // Batch sync: sync immediately if >=3 pending, or schedule sync in 5 seconds
    // This reduces backend load from ~1 req/follow to ~1 req/3 follows or 1 req/5s
    if (state.pendingFollows >= 3) {
        console.log('📤 3+ pending follows, syncing immediately');
        if (state.syncTimer) {
            clearTimeout(state.syncTimer);
            state.syncTimer = null;
        }
        syncDailyFollowsToBackend();
    } else {
        console.log('⏰ Scheduling sync in 5 seconds (pending:', state.pendingFollows, ')');
        scheduleBackendSync();
    }
}

// Sync daily follows to backend (batched)
async function syncDailyFollowsToBackend() {
    console.log('🔄 syncDailyFollowsToBackend() called');
    console.log('🔄 state.userId:', state.userId);
    console.log('🔄 state.pendingFollows:', state.pendingFollows);

    if (!state.userId) {
        console.warn('⚠️ Cannot sync: no userId, attempting to get/create...');
        state.userId = await getOrCreateUserId();
        if (!state.userId) {
            console.error('❌ Still no userId after get/create, cannot sync');
            return;
        }
    }

    if (state.pendingFollows === 0) {
        console.log('ℹ️ No pending follows to sync');
        return;
    }

    const todayISO = formatDateISO(); // Format as YYYY-MM-DD for backend
    const followsToSync = state.pendingFollows;
    const syncUrl = 'https://falconbot.duckdns.org/extension/increment-follow';
    const syncPayload = {
        userId: state.userId,
        dailyFollows: state.dailyFollows,
        date: todayISO
    };

    try {
        console.log(`📤 Syncing ${followsToSync} follows to backend`);
        console.log(`📤 POST ${syncUrl}`);
        console.log(`📤 Payload:`, syncPayload);
        const response = await fetch(syncUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': EXTENSION_API_KEY
            },
            body: JSON.stringify(syncPayload)
        });

        console.log(`📡 Increment-follow response status: ${response.status} ${response.statusText}`);
        if (response.ok) {
            const responseData = await response.json().catch(() => ({}));
            console.log(`📡 Response data:`, responseData);
            // Success: reset pending counter
            state.pendingFollows = 0;
            state.lastBackendSync = Date.now();
            chrome.storage.local.set({ pendingFollows: 0 });
            console.log(`✅ Synced ${followsToSync} follows to backend successfully`);
        } else {
            const errorText = await response.text().catch(() => '');
            console.warn(`⚠️ Backend returned status ${response.status} for increment-follow: ${errorText}`);
        }
    } catch (error) {
        console.error('❌ Backend sync failed, will retry later:', error);
        console.error('❌ Error details:', error.message, error.stack);
        // Keep pendingFollows for retry
    }
}

// Schedule backend sync (debounced - 10 seconds to reduce backend load)
function scheduleBackendSync() {
    // Clear existing timer
    if (state.syncTimer) {
        clearTimeout(state.syncTimer);
    }

    // Schedule sync in 5 seconds (reduces backend load significantly)
    state.syncTimer = setTimeout(() => {
        syncDailyFollowsToBackend();
        state.syncTimer = null;
    }, 5000);
}

// Force sync on automation stop
function forceSyncDailyFollows() {
    if (state.syncTimer) {
        clearTimeout(state.syncTimer);
        state.syncTimer = null;
    }
    syncDailyFollowsToBackend();
}

function activatePremium(days) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);

    state.userPlan = 'premium';
    state.premiumExpiry = expiryDate.toISOString();

    chrome.storage.local.set({
        userPlan: 'premium',
        premiumExpiry: state.premiumExpiry
    });

    addLog(t('premiumActivated', { days, expiry: expiryDate.toLocaleDateString() }));
}

let state = {
    isRunning: false,
    limit: 10,
    likeRandom: true,
    currentUsers: [],
    processedIndex: 0,
    stats: {
        processed: 0,
        skipped: 0
    },
    totalStats: {
        processed: 0,
        skipped: 0
    },
    logs: [],
    currentTabId: null,
    // Monetization
    userPlan: 'free', // 'free', 'premium'
    premiumExpiry: null, // Date when premium expires
    dailyFollows: 0,
    lastFollowDate: null,
    userId: null, // Unique user ID (persistent)
    // Backend sync (batching)
    pendingFollows: 0, // Follows not yet synced to backend
    lastBackendSync: null, // Last time we synced with backend
    syncTimer: null, // Timer for periodic sync
    // Unfollow
    isUnfollowing: false,
    unfollowStats: {
        processed: 0,
        skipped: 0
    }
};

// Generate UUID v4
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Generate or retrieve unique user ID (persistent across reinstalls)
async function getOrCreateUserId() {
    return new Promise((resolve) => {
        console.log('🔍 getOrCreateUserId() called');
        chrome.storage.local.get(['userId'], (data) => {
            console.log('📦 Storage get result:', data);
            if (data.userId) {
                console.log('📦 Found existing userId in storage:', data.userId);
                resolve(data.userId);
            } else {
                // Generate UUID v4
                const userId = 'ext_' + generateUUID();
                console.log('🆕 Generating new userId:', userId);
                chrome.storage.local.set({ userId: userId }, () => {
                    console.log('💾 userId saved to storage');
                    // Register user in backend
                    console.log('📤 Registering new user in backend...');
                    const registerUrl = 'https://falconbot.duckdns.org/extension/register-user';
                    console.log('📤 POST', registerUrl, { userId: userId });
                    fetch(registerUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': EXTENSION_API_KEY
                        },
                        body: JSON.stringify({ userId: userId })
                    })
                        .then(response => {
                            console.log(`📡 Register response status: ${response.status} ${response.statusText}`);
                            if (response.ok) {
                                console.log(`✅ User registered in backend successfully`);
                            } else {
                                console.warn(`⚠️ Backend returned status ${response.status} for registration`);
                            }
                        })
                        .catch((error) => {
                            console.error('❌ Failed to register user in backend:', error);
                            console.error('❌ Error details:', error.message, error.stack);
                        });
                    resolve(userId);
                });
            }
        });
    });
}

// Initialize language and other settings from storage
(async () => {
    console.log('🚀 Initializing background script...');
    await loadLanguage();
    console.log('✅ Language loaded:', currentLanguage);

    // Initialize user ID FIRST (before loading other state)
    console.log('🔍 Getting or creating userId...');
    state.userId = await getOrCreateUserId();
    console.log('✅ userId initialized:', state.userId);

    // Verify userId is set
    if (!state.userId) {
        console.error('❌ CRITICAL: userId is null after initialization!');
    }

    // Load other state from storage
    chrome.storage.local.get(['isRunning', 'limit', 'likeRandom', 'stats', 'totalStats', 'processedIndex', 'currentUsers', 'userPlan', 'premiumExpiry', 'dailyFollows', 'lastFollowDate', 'pendingFollows', 'userId'], (data) => {
        console.log('📦 Loading state from storage:', {
            userPlan: data.userPlan,
            premiumExpiry: data.premiumExpiry,
            dailyFollows: data.dailyFollows,
            pendingFollows: data.pendingFollows,
            userId: data.userId,
            stateUserId: state.userId
        });

        if (data.stats) state.stats = data.stats;
        if (data.totalStats) state.totalStats = data.totalStats;
        if (data.limit) state.limit = data.limit;
        if (data.likeRandom !== undefined) state.likeRandom = data.likeRandom;
        if (data.currentUsers) state.currentUsers = data.currentUsers;
        if (data.processedIndex) state.processedIndex = data.processedIndex;
        if (data.userPlan) state.userPlan = data.userPlan;
        if (data.premiumExpiry) state.premiumExpiry = data.premiumExpiry;
        if (data.dailyFollows !== undefined) state.dailyFollows = data.dailyFollows;
        if (data.lastFollowDate) state.lastFollowDate = data.lastFollowDate;
        if (data.pendingFollows !== undefined) state.pendingFollows = data.pendingFollows;

        // Ensure userId is set (should already be set above, but double-check)
        if (data.userId && !state.userId) {
            console.log('⚠️ userId found in storage but not in state, fixing...');
            state.userId = data.userId;
        } else if (!state.userId) {
            console.error('❌ CRITICAL: No userId available after loading state!');
        }

        console.log('✅ State loaded. Final state:', {
            userId: state.userId,
            userPlan: state.userPlan,
            pendingFollows: state.pendingFollows,
            dailyFollows: state.dailyFollows
        });

        // Sync any pending follows on startup
        if (state.pendingFollows > 0 && state.userId) {
            console.log(`🔄 Found ${state.pendingFollows} pending follows, syncing in 2 seconds...`);
            setTimeout(() => {
                console.log('🔄 Executing pending sync now...');
                syncDailyFollowsToBackend();
            }, 2000);
        } else {
            if (!state.userId) console.log('⚠️ No userId available, cannot sync pending follows');
            if (state.pendingFollows === 0) console.log('ℹ️ No pending follows to sync');
        }

        // Test backend connectivity on startup
        if (state.userId) {
            console.log('🧪 Testing backend connectivity...');
            setTimeout(async () => {
                try {
                    const testResponse = await fetch(`https://falconbot.duckdns.org/extension/status/${state.userId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': EXTENSION_API_KEY
                        }
                    });
                    console.log(`🧪 Backend connectivity test: ${testResponse.status} ${testResponse.statusText}`);
                    if (testResponse.ok) {
                        const testData = await testResponse.json();
                        console.log('🧪 Backend test response:', testData);
                    }
                } catch (error) {
                    console.error('❌ Backend connectivity test failed:', error);
                }
            }, 3000);
        }

        // We don't auto-resume isRunning to avoid unexpected behaviors
    });
})();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Background received message:', message);

    switch (message.action) {
        case 'PING':
            console.log('Background script pinged - responding');
            sendResponse({ pong: true });
            return true; // Keep message channel open
        case 'START_AUTOMATION':
            console.log('Starting automation with settings:', message.settings);
            startAutomation(message.settings);
            break;
        case 'STOP_AUTOMATION':
            console.log('Stopping automation');
            stopAutomation();
            break;
        case 'LOG_ACTION':
            addLog(message.text);
            break;
        case 'UPDATE_STATS':
            updateStats(message.stats);
            break;
        case 'FOLLOW_SUCCESS':
            console.log('✅ FOLLOW_SUCCESS received, incrementing daily follow...');
            incrementDailyFollow();
            console.log('✅ incrementDailyFollow() called, pendingFollows:', state.pendingFollows);
            sendResponse({ success: true });
            break;
        case 'ACTIVATE_CODE':
            // Code validation is handled entirely by the backend via popup.js
            // This handler is no longer used - all activation goes through backend API
            sendResponse({ success: false, reason: 'use_backend_activation' });
            return true;
        case 'PURCHASE_PLAN':
            // Simulação de processamento de pagamento
            const daysMap = { '1day': 1, '5day': 5, '10day': 10, '30day': 30 };
            const planDays = daysMap[message.plan];
            if (planDays) {
                activatePremium(planDays);
                sendResponse({ success: true, plan: message.plan, days: planDays });
            } else {
                sendResponse({ success: false });
            }
            return true;
        case 'GET_ACCOUNT_STATUS':
            console.log('📊 GET_ACCOUNT_STATUS requested');
            console.log('📊 Current state.userId:', state.userId);
            (async () => {
                if (!state.userId) {
                    console.warn('⚠️ No userId available, attempting to get/create...');
                    state.userId = await getOrCreateUserId();
                    console.log('📊 userId after get/create:', state.userId);
                }
                getRemainingDailyFollows().then(async remaining => {
                    const isPremium = await isPremiumUser();
                    console.log('📊 Account status response:', {
                        plan: state.userPlan,
                        remainingFollows: remaining,
                        isPremium: isPremium,
                        userId: state.userId
                    });
                    sendResponse({
                        plan: state.userPlan,
                        premiumExpiry: state.premiumExpiry,
                        remainingFollows: remaining,
                        isPremium: isPremium
                    });
                }).catch(error => {
                    console.error('❌ Error in GET_ACCOUNT_STATUS:', error);
                    sendResponse({
                        plan: state.userPlan || 'free',
                        premiumExpiry: state.premiumExpiry,
                        remainingFollows: 0,
                        isPremium: false
                    });
                });
            })();
            return true;
        case 'GET_USER_ID':
            sendResponse({ userId: state.userId });
            return true;
        case 'START_UNFOLLOW':
            console.log('Starting unfollow with limit:', message.limit);
            startUnfollow(message.limit);
            break;
        case 'STOP_UNFOLLOW':
            console.log('Stopping unfollow');
            stopUnfollow();
            break;
        case 'UNFOLLOW_SUCCESS':
            state.unfollowStats.processed++;
            incrementDailyFollow(); // Use same counter as follows (10 actions per day)
            chrome.runtime.sendMessage({ action: 'UPDATE_UNFOLLOW_STATS', stats: state.unfollowStats });
            break;
        case 'UNFOLLOW_SKIP':
            state.unfollowStats.skipped++;
            chrome.runtime.sendMessage({ action: 'UPDATE_UNFOLLOW_STATS', stats: state.unfollowStats });
            break;
        case 'UNFOLLOW_FINISHED':
            console.log('Unfollow finished');
            state.isUnfollowing = false;
            saveState();
            chrome.runtime.sendMessage({ action: 'UNFOLLOW_STOPPED' });
            break;
        case 'RELOAD_STATE':
            console.log('🔄 RELOAD_STATE requested - reloading premium status from storage');
            (async () => {
                // Clear premium validation cache to force fresh check
                premiumValidationCache.lastCheck = 0;
                premiumValidationCache.isValid = false;
                premiumValidationCache.expiry = null;

                // Reload state from storage
                await loadState();
                console.log('✅ State reloaded:', { userPlan: state.userPlan, premiumExpiry: state.premiumExpiry });
                sendResponse({ success: true });
            })();
            return true;
    }
});

async function startAutomation(settings) {
    // Check premium status
    if (!(await isPremiumUser()) && !(await canFollowToday())) {
        addLog(t('dailyLimitReached'));
        chrome.runtime.sendMessage({ action: 'LIMIT_REACHED' });
        return;
    }

    state.isRunning = true;
    state.limit = settings.limit;
    state.limit = settings.limit;
    state.likeRandom = settings.likeRandom;
    state.maxFollowers = settings.maxFollowers; // Save maxFollowers to state
    state.processedIndex = 0;
    // Reset current session stats but keep total stats
    state.stats = { processed: 0, skipped: 0 };
    state.logs = [];

    await saveState();
    addLog(t('automationStarted'));

    // Send current session stats (zeroed) and total stats to popup
    chrome.runtime.sendMessage({
        action: 'UPDATE_STATS',
        stats: state.stats,
        totalStats: state.totalStats
    });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
        addLog(t('noActiveTab'));
        return;
    }

    state.currentTabId = tab.id;

    // More thorough Instagram URL check
    if (!tab.url || !tab.url.includes('instagram.com')) {
        addLog(t('notOnInstagram'));
        await chrome.tabs.update(tab.id, { url: 'https://www.instagram.com/' });
        return;
    }

    // Additional check: ensure we're not on login page or other non-content pages
    if (tab.url.includes('/accounts/login') ||
        tab.url.includes('/accounts/password/reset') ||
        tab.url.includes('/challenge') ||
        tab.url === 'https://www.instagram.com/' ||
        tab.url === 'https://www.instagram.com') {
        addLog(t('navigateToPost'));
        return;
    }

    // Wait for page to be fully loaded
    if (tab.status !== 'complete') {
        addLog(t('waitingPageLoad'));
        // Wait for tab to load
        await new Promise((resolve) => {
            const listener = (tabId, info) => {
                if (tabId === tab.id && info.status === 'complete') {
                    chrome.tabs.onUpdated.removeListener(listener);
                    resolve();
                }
            };
            chrome.tabs.onUpdated.addListener(listener);

            // Timeout after 10 seconds
            setTimeout(() => {
                chrome.tabs.onUpdated.removeListener(listener);
                resolve();
            }, 10000);
        });
    }

    // Get settings from storage
    const storageData = await chrome.storage.local.get(['followPrivate', 'actionDelay']);
    const automationSettings = {
        followPrivate: storageData.followPrivate !== false, // Default: true
        actionDelay: storageData.actionDelay || 15 // Default: 15 seconds
    };

    // First check if content script is loaded and inject if needed
    chrome.tabs.sendMessage(tab.id, { action: 'PING' })
        .then(() => {
            console.log('Content script is responding');
            // Now trigger post detection with settings
            return chrome.tabs.sendMessage(tab.id, {
                action: 'DIVIDE_AND_CONQUER',
                settings: automationSettings
            });
        })
        .then(() => {
            console.log('Message sent to content script successfully');
        })
        .catch((error) => {
            console.warn('⚠️ Content script not ready, will inject manually:', error.message || error);
            // Log the full error details for debugging
            if (error && error.message) {
                console.debug('Error details:', error.message);
            }

            // Try to inject content script manually if not loaded
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['i18n.js', 'content.js']
            })
                .then(() => {
                    console.log('Content scripts injected manually');
                    // Wait a bit and try again
                    setTimeout(() => {
                        chrome.tabs.sendMessage(tab.id, {
                            action: 'DIVIDE_AND_CONQUER',
                            settings: automationSettings
                        })
                            .then(() => console.log('Retry successful'))
                            .catch(() => addLog(t('contentScriptNotResponding')));
                    }, 1000);
                })
                .catch((injectError) => {
                    console.error('Failed to inject content script:', injectError);
                    addLog(t('errorInjectingScript'));
                    addLog(t('currentUrl', { url: tab.url }));
                });
        });
}

function stopAutomation() {
    state.isRunning = false;
    saveState();
    addLog(t('automationStopped'));
    // Force sync pending follows before stopping
    forceSyncDailyFollows();
}

async function startUnfollow(limit) {
    // Check premium status and daily limit (same as follows - 10 actions per day)
    if (!(await isPremiumUser()) && !(await canFollowToday())) {
        addLog(t('dailyLimitReached'));
        chrome.runtime.sendMessage({ action: 'LIMIT_REACHED' });
        return;
    }

    state.isUnfollowing = true;
    state.unfollowStats = { processed: 0, skipped: 0 };

    await saveState();
    addLog(t('unfollowStarted'));

    chrome.runtime.sendMessage({
        action: 'UPDATE_UNFOLLOW_STATS',
        stats: state.unfollowStats
    });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
        addLog(t('noActiveTab'));
        stopUnfollow();
        return;
    }

    state.currentTabId = tab.id;

    if (!tab.url || !tab.url.includes('instagram.com')) {
        addLog(t('notOnInstagram'));
        await chrome.tabs.update(tab.id, { url: 'https://www.instagram.com/' });
        stopUnfollow();
        return;
    }

    // Check if we're on a profile page (allows query parameters and trailing slashes)
    if (!tab.url.match(/instagram\.com\/([^\/\?]+)\/?(\?.*)?$/)) {
        addLog(t('notOnProfile'));
        stopUnfollow();
        return;
    }

    // Inject content script and start unfollow process
    chrome.tabs.sendMessage(tab.id, { action: 'PING' })
        .then(() => {
            chrome.tabs.sendMessage(tab.id, {
                action: 'START_UNFOLLOW',
                limit: limit
            });
        })
        .catch(() => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['i18n.js', 'content.js']
            }).then(() => {
                setTimeout(() => {
                    chrome.tabs.sendMessage(tab.id, {
                        action: 'START_UNFOLLOW',
                        limit: limit
                    });
                }, 1000);
            });
        });
}

function stopUnfollow() {
    state.isUnfollowing = false;
    addLog(t('unfollowStopped'));
    chrome.storage.local.set({ isUnfollowing: false });
    chrome.runtime.sendMessage({ action: 'UNFOLLOW_STOPPED' });

    if (state.currentTabId) {
        chrome.tabs.sendMessage(state.currentTabId, { action: 'STOP_UNFOLLOW' }).catch(() => { });
    }
}

async function addLog(text) {
    state.logs.unshift(`[${new Date().toLocaleTimeString()}] ${text}`);
    if (state.logs.length > 50) state.logs.pop();

    chrome.runtime.sendMessage({ action: 'UPDATE_LOG', log: text });
    chrome.storage.local.set({ logs: state.logs });
}

function updateStats(newStats) {
    // Update current session stats
    state.stats.processed += (newStats.processed || 0);
    state.stats.skipped += (newStats.skipped || 0);

    // Update total stats
    state.totalStats.processed += (newStats.processed || 0);
    state.totalStats.skipped += (newStats.skipped || 0);

    // Send both current and total stats to popup
    chrome.runtime.sendMessage({
        action: 'UPDATE_STATS',
        stats: state.stats,
        totalStats: state.totalStats
    });

    saveState();
}

async function saveState() {
    await chrome.storage.local.set({
        isRunning: state.isRunning,
        limit: state.limit,
        likeRandom: state.likeRandom,
        stats: state.stats,
        totalStats: state.totalStats,
        processedIndex: state.processedIndex,
        currentUsers: state.currentUsers
    });
}

// Logic for navigating between users
chrome.runtime.onMessage.addListener(async (message, sender) => {
    if (message.action === 'USERS_SCRAPED') {
        state.currentUsers = message.users;
        state.processedIndex = 0;
        addLog(t('usersFound', { count: message.users.length }));
        processNextUser();
    }

    if (message.action === 'ACTION_COMPLETED') {
        state.processedIndex++;
        if (state.stats.processed >= state.limit) {
            addLog(t('limitReached', { limit: state.limit }));
            stopAutomation();
            chrome.runtime.sendMessage({ action: 'AUTOMATION_FINISHED' });
            return;
        }

        // Get configured delay from storage (default: 15 seconds)
        const settings = await chrome.storage.local.get(['actionDelay']);
        const baseDelay = (settings.actionDelay || 15) * 1000; // Convert to milliseconds
        // Add some randomness (±20%) to make it more natural
        const randomVariation = baseDelay * 0.2;
        const delay = Math.floor(baseDelay + (Math.random() * randomVariation * 2) - randomVariation);
        addLog(t('waiting', { seconds: Math.floor(delay / 1000) }));
        setTimeout(processNextUser, delay);
    }
});

async function processNextUser() {
    if (!state.isRunning) return;

    // Check if daily limit reached during execution
    if (!(await isPremiumUser()) && !(await canFollowToday())) {
        addLog(t('dailyLimitReached'));
        chrome.runtime.sendMessage({ action: 'LIMIT_REACHED' });
        stopAutomation();
        chrome.runtime.sendMessage({ action: 'AUTOMATION_FINISHED' });
        return;
    }

    if (state.processedIndex >= state.currentUsers.length) {
        addLog(t('allProcessed'));
        stopAutomation();
        chrome.runtime.sendMessage({ action: 'AUTOMATION_FINISHED' });
        return;
    }

    const username = state.currentUsers[state.processedIndex];
    addLog(t('navigatingToProfile', {
        username,
        current: state.processedIndex + 1,
        total: state.currentUsers.length
    }));

    try {
        chrome.tabs.update(state.currentTabId, { url: `https://www.instagram.com/${username}/` });
    } catch (error) {
        addLog(t('navigationError', { username, error: error.message }));
        chrome.runtime.sendMessage({ action: 'UPDATE_STATS', stats: { processed: 0, skipped: 1 } });
        chrome.runtime.sendMessage({ action: 'ACTION_COMPLETED' });
        return;
    }

    // Wait for tab to load with better error handling
    let timeoutId;
    const loadTimeout = setTimeout(() => {
        addLog(t('navigationError', { username, error: 'Timeout' }));
        chrome.runtime.sendMessage({ action: 'UPDATE_STATS', stats: { processed: 0, skipped: 1 } });
        chrome.runtime.sendMessage({ action: 'ACTION_COMPLETED' });
    }, 15000); // 15 second timeout

    chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
        if (tabId === state.currentTabId && info.status === 'complete') {
            chrome.tabs.onUpdated.removeListener(listener);
            clearTimeout(loadTimeout);

            // Trigger interaction logic with delay
            setTimeout(() => {
                chrome.tabs.sendMessage(state.currentTabId, {
                    action: 'PERFORM_INTERACTION',
                    settings: {
                        likeRandom: state.likeRandom,
                        maxFollowers: state.maxFollowers // Pass maxFollowers to content script
                    }
                }).catch(error => {
                    addLog(t('errorSending', { error: error.message }));
                    chrome.runtime.sendMessage({ action: 'UPDATE_STATS', stats: { processed: 0, skipped: 1 } });
                    chrome.runtime.sendMessage({ action: 'ACTION_COMPLETED' });
                });
            }, 3000); // Small buffer for Instagram's SPA to render
        }
    });
}
