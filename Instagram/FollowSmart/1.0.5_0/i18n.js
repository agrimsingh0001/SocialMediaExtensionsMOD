// Internationalization / Traduções
const translations = {
    'pt-BR': {
        // Popup
        'howToUse': '📱 <strong>Como usar:</strong> Abra um post no Instagram e clique em "Iniciar Automação" para seguir todos os perfis que comentaram no post.',
        'settings': '⚙️ Configure o limite de usuários e se quer dar like em fotos aleatórias.',
        'followLimit': 'Limite de Seguidores',
        'likeRandomPhoto': 'Curtir 1 foto aleatória',
        'availableFollows': 'Follows disponíveis:',
        'processed': 'Processados',
        'skipped': 'Ignorados',
        'totalProcessed': 'Total Processados',
        'totalSkipped': 'Total Ignorados',
        'startAutomation': 'Iniciar Automação',
        'stop': 'Parar',
        'ready': 'Pronto para iniciar...',
        'idle': 'Ocioso',

        // Plans
        'planFree': 'Grátis',
        'planPremium': 'Premium',
        'plan1Day': '1 Dia',
        'plan5Days': '5 Dias',
        'plan10Days': '10 Dias',
        'plan30Days': '30 Dias',
        'unlimited': 'Ilimitado',
        'alreadyPremium': 'Premium já ativo',
        'alreadyPremiumBtn': 'Premium Ativo',
        'activationCodePlaceholder': 'Código de ativação',
        'activateBtn': 'Ativar',
        'planLabel': 'Plano:',
        'premiumUntil': 'Premium até:',

        // UI Tabs (tooltips)
        'automationTab': 'Automação - Seguir e curtir comentários',
        'unfollowTab': 'Unfollow - Deixar de seguir perfis',
        'premiumTab': 'Premium - Planos e ativação',
        'settingsTab': 'Configurações - Ajustes do robô',
        'aboutTab': 'Sobre - Informações da extensão',

        // Tab Titles
        'automationTitle': 'Auto Follow (e Like) comentários em um post',
        'unfollowTitle': 'Auto Unfollow',
        'premiumTabTitle': 'Planos Premium',
        'automationTab': 'Automação - Seguir e curtir comentários',
        'unfollowTab': 'Unfollow - Deixar de seguir perfis',
        'premiumTab': 'Premium - Planos e ativação',
        'settingsTab': 'Configurações - Ajustes do robô',
        'aboutTab': 'Sobre - Informações da extensão',

        // About Tab
        'aboutTitle': 'Sobre o IG Auto-Follow',
        'aboutDescription': 'Extensão gratuita para Chrome que automatiza seu engajamento no Instagram, seguindo perfis que comentaram em seus posts e aumentando sua visibilidade organicamente.',
        'featuresTitle': 'Funcionalidades',
        'featureSmartAI': '🤖 IA inteligente para detectar comentários legítimos',
        'featureMultiLanguage': '🌐 Suporte completo em português brasileiro e inglês',
        'featureAnalytics': '📊 Analytics detalhado em tempo real',
        'featureSafe': '🔒 Totalmente seguro e respeita os termos do Instagram',
        'linksTitle': 'Links Úteis',
        'websiteLink': 'Site Oficial',
        'privacyLink': 'Política de Privacidade',
        'updateLink': 'Verificar Atualizações',
        'developedByTitle': 'Desenvolvido por',
        'developedByDesc': 'Soluções tecnológicas para o seu negócio',

        // Settings Tab
        'settingsTitle': 'Configurações',
        'followPrivateAccounts': 'Seguir perfis privados',
        'followPrivateDescription': 'Se desabilitado, o robô irá pular perfis privados automaticamente.',
        'actionDelay': 'Delay entre ações (segundos):',
        'actionDelayDescription': 'Tempo de espera entre cada ação (seguir, dar like, etc.). Valor padrão: 15 segundos.',
        'followPrivateEnabled': 'Seguir perfis privados: Ativado',
        'followPrivateDisabled': 'Seguir perfis privados: Desativado',
        'delayUpdated': 'Delay atualizado para {seconds} segundos',
        'maxFollowers': 'Max. Seguidores',
        'maxFollowersDescription': 'Não seguir usuários com mais de X seguidores (Premium).',
        'maxFollowersExceeded': '⚠️ @{username} tem {count} seguidores (Max: {limit}). Pulando.',

        // Unfollow Tab
        'unfollowInstructions': '📱 <strong>Como usar:</strong> Clique no seu número de "Seguindo" no seu perfil e depois em "Iniciar Unfollow" para deixar de seguir os perfis da lista.',
        'unfollowLimit': 'Limite de Unfollows',
        'unfollowsRemaining': 'Unfollows restantes hoje:',
        'followsRemainingToday': 'Follows restantes hoje:',
        'limitResetsAt': 'Limite reseta em:',
        'buyUnlimitedDays': '💡 Você pode comprar dias de uso ilimitado na aba Premium',
        'startUnfollow': 'Iniciar Unfollow',
        'unfollowStarted': '🚀 Unfollow iniciado! Verificando perfil...',
        'unfollowStopped': '⏹️ Unfollow parado.',
        'unfollowFinished': '🎉 Unfollow finalizado com sucesso!',
        'checkingProfile': '🔍 Verificando perfil...',
        'notOnProfile': '⚠️ Você precisa estar no seu perfil. Clique na sua foto no canto inferior esquerdo.',
        'unfollowingUser': '👋 Deixando de seguir @{username}',
        'userFollowsBack': '✅ @{username} te segue de volta. Mantendo.',
        'unfollowSuccess': '✅ Deixou de seguir @{username}',
        'unfollowError': '❌ Erro ao deixar de seguir @{username}: {error}',
        'checkingFollowers': '🔍 Verificando seguidores...',
        'foundNonFollowers': '🎯 Encontrados {count} perfis que não te seguem de volta',
        'unfollowLimitReached': '⚠️ Limite de unfollows gratuitos atingido. Ative o Premium para continuar.',
        'unfollowPremiumRequired': '⚠️ Limite de unfollows gratuitos atingido. Ative o Premium para continuar.',
        'pinPopup': 'Fixar popup na tela',
        'unpinPopup': 'Desfixar popup',
        'pinError': 'Erro ao fixar popup',
        'windowError': 'Erro ao abrir janela',
        'unfollowUnderConstruction': 'Funcionalidade em construção',
        'unfollowComingSoon': 'Em breve você poderá deixar de seguir automaticamente perfis que não te seguem de volta!',
        'premiumUpgradeTooltip': '💎 Vá para a aba Premium e adquira dias ilimitados! Planos baratos e pagamento seguro via Stripe.',

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
        'privateAccountFollowing': '🔓 Seguindo perfil privado: @{username}',
        'clickedFollow': '👆 Clicou em Follow para @{username}',
        'alreadyFollowing': 'ℹ️ Já seguindo @{username} ou botão Follow não encontrado',
        'likedPhoto': '❤️ Deu like em uma foto aleatória de @{username}',
        'waiting': '⏳ Aguardando {seconds}s antes da próxima ação...',
        'limitReached': '🎯 Limite de {limit} perfis atingido! Finalizando automação.',
        'allProcessed': '✅ Todos os perfis foram processados! Automação finalizada.',
        'navigationError': '❌ Erro ao navegar para @{username}: {error}',
        'analysisComplete': '✅ Análise concluída! Preparando {count} perfis para seguir.',
        'startingDetection': '🔍 Iniciando detecção da página...',
        'noActiveTab': '❌ Nenhuma aba ativa encontrada',
        'navigateToPost': 'Por favor, navegue até um post específico do Instagram para usar a automação.',
        'waitingPageLoad': '⏳ Aguardando página carregar completamente...',
        'errorInjectingScript': '❌ Erro ao injetar content script. Verifique se estamos no Instagram.',
        'currentUrl': 'URL atual: {url}',
        'validatingCode': '🔄 Validando código {code}...',
        'codeValid': '✅ Código válido! Ativando {days} dias...',
        'premiumActivatedSuccess': '🎉 Premium ativado com sucesso! Expira em {expiry}',
        'premiumSavedLocally': '💾 Status premium salvo localmente',
        'activationError': '❌ Erro ao ativar: {reason}',
        'activationErrorGeneric': '❌ Erro ao ativar premium: {error}',
        'codeInvalid': '❌ Código inválido ou já usado.',
        'validationError': '❌ Erro ao validar código: {error}',
        'creatingCheckout': '💳 Criando checkout para {price} ({plan})...',
        'testingBackend': '🔄 Testando conexão com backend...',
        'backendOnline': '✅ Backend online: {status}',
        'redirectingStripe': '🔗 Redirecionando para Stripe...',
        'checkoutError': '❌ Erro ao criar checkout: {error}',
        'connectionFailed': '❌ Falha na conexão: {error}',
        'checkBackend': '💡 Verifique se o backend está rodando em falconbot.duckdns.org',
        'dailyLimitReached': '❌ Limite diário de follows atingido. Aguarde até amanhã ou ative o Premium.',
        'premiumActivated': '✅ Premium ativado! Válido por {days} dias. Expira em: {expiry}',

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
        'testingContentScript': '3. Testing content script...'
    },
    'en': {
        // Popup
        'howToUse': '📱 <strong>How to use:</strong> Open an Instagram post and click "Start Automation" to follow all profiles that commented on the post.',
        'settings': '⚙️ Configure the user limit and whether to like random photos.',
        'followLimit': 'Follow Limit',
        'likeRandomPhoto': 'Like 1 random photo',
        'availableFollows': 'Available follows:',
        'processed': 'Processed',
        'skipped': 'Skipped',
        'totalProcessed': 'Total Processed',
        'totalSkipped': 'Total Skipped',
        'startAutomation': 'Start Automation',
        'stop': 'Stop',
        'ready': 'Ready to start...',
        'idle': 'Idle',

        // Plans
        'planFree': 'Free',
        'planPremium': 'Premium',
        'plan1Day': '1 Day',
        'plan5Days': '5 Days',
        'plan10Days': '10 Days',
        'plan30Days': '30 Days',
        'unlimited': 'Unlimited',
        'alreadyPremium': 'Premium already active',
        'alreadyPremiumBtn': 'Premium Active',
        'activationCodePlaceholder': 'Activation code',
        'activateBtn': 'Activate',
        'planLabel': 'Plan:',
        'premiumUntil': 'Premium until:',

        // UI Tabs (tooltips)
        'automationTab': 'Automation - Follow and like commenters',
        'unfollowTab': 'Unfollow - Auto Unfollow profiles',
        'premiumTab': 'Premium - Plans and activation',
        'settingsTab': 'Settings - Robot configuration',
        'aboutTab': 'About - Extension information',

        // Tab Titles
        'automationTitle': 'Auto Follow (and Like) commenters on a post',
        'unfollowTitle': 'Auto Unfollow',
        'premiumTabTitle': 'Premium Plans',

        // About Tab
        'aboutTitle': 'About IG Auto-Follow',
        'aboutDescription': 'Free Chrome extension that automates your Instagram engagement, following profiles that commented on your posts and increasing your organic visibility.',
        'featuresTitle': 'Features',
        'featureSmartAI': '🤖 Smart AI to detect legitimate comments',
        'featureMultiLanguage': '🌐 Full support for Brazilian Portuguese and English',
        'featureAnalytics': '📊 Detailed real-time analytics',
        'featureSafe': '🔒 Completely safe and respects Instagram terms',
        'linksTitle': 'Links Úteis',
        'websiteLink': 'Official Website',
        'privacyLink': 'Privacy Policy',
        'updateLink': 'Check Updates',
        'developedByTitle': 'Developed by',
        'developedByDesc': 'Technology solutions for your business',

        // Settings Tab
        'settingsTitle': 'Settings',
        'followPrivateAccounts': 'Follow private accounts',
        'followPrivateDescription': 'If disabled, the bot will automatically skip private profiles.',
        'actionDelay': 'Delay between actions (seconds):',
        'actionDelayDescription': 'Wait time between each action (follow, like, etc.). Default value: 15 seconds.',
        'followPrivateEnabled': 'Follow private accounts: Enabled',
        'followPrivateDisabled': 'Follow private accounts: Disabled',
        'delayUpdated': 'Delay updated to {seconds} seconds',
        'maxFollowers': 'Max. Followers',
        'maxFollowersDescription': 'Do not follow users with more than X followers (Premium).',
        'maxFollowersExceeded': '⚠️ @{username} has {count} followers (Max: {limit}). Skipping.',

        // Unfollow Tab
        'unfollowInstructions': '📱 <strong>How to use:</strong> Click on your "Following" count on your profile and then click "Start Unfollow" to unfollow profiles from the list.',
        'unfollowLimit': 'Unfollow Limit',
        'unfollowsRemaining': 'Unfollows remaining today:',
        'followsRemainingToday': 'Follows remaining today:',
        'limitResetsAt': 'Limit resets at:',
        'buyUnlimitedDays': '💡 You can buy unlimited usage days in the Premium tab',
        'startUnfollow': 'Start Unfollow',
        'unfollowStarted': '🚀 Unfollow started! Checking profile...',
        'unfollowStopped': '⏹️ Unfollow stopped.',
        'unfollowFinished': '🎉 Unfollow finished successfully!',
        'checkingProfile': '🔍 Checking profile...',
        'notOnProfile': '⚠️ You need to be on your profile. Click your picture in the bottom left.',
        'unfollowingUser': '👋 Unfollowing @{username}',
        'userFollowsBack': '✅ @{username} follows you back. Keeping.',
        'unfollowSuccess': '✅ Unfollowed @{username}',
        'unfollowError': '❌ Error unfollowing @{username}: {error}',
        'checkingFollowers': '🔍 Checking followers...',
        'foundNonFollowers': '🎯 Found {count} profiles that don\'t follow you back',
        'unfollowLimitReached': '⚠️ Limite de unfollows gratuitos atingido. Ative o Premium para continuar.',
        'unfollowPremiumRequired': '⚠️ Limite de unfollows gratuitos atingido. Ative o Premium para continuar.',
        'pinPopup': 'Pin popup to screen',
        'unpinPopup': 'Unpin popup',
        'pinError': 'Error pinning popup',
        'windowError': 'Error opening window',
        'unfollowUnderConstruction': 'Feature under construction',
        'unfollowComingSoon': 'Soon you will be able to automatically unfollow profiles that don\'t follow you back!',
        'premiumUpgradeTooltip': '💎 Go to the Premium tab and get unlimited days! Cheap plans and secure payment via Stripe.',

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
        'privateAccountFollowing': '🔓 Following private account: @{username}',
        'clickedFollow': '👆 Clicked Follow for @{username}',
        'alreadyFollowing': 'ℹ️ Already following @{username} or Follow button not found',
        'likedPhoto': '❤️ Liked a random photo from @{username}',
        'waiting': '⏳ Waiting {seconds}s before next action...',
        'limitReached': '🎯 Limit of {limit} profiles reached! Finishing automation.',
        'allProcessed': '✅ All profiles processed! Automation finished.',
        'navigationError': '❌ Error navigating to @{username}: {error}',
        'analysisComplete': '✅ Analysis complete! Preparing {count} profiles to follow.',
        'startingDetection': '🔍 Starting page detection...',
        'noActiveTab': '❌ No active tab found',
        'navigateToPost': 'Please navigate to a specific Instagram post to use automation.',
        'waitingPageLoad': '⏳ Waiting for page to load completely...',
        'errorInjectingScript': '❌ Error injecting content script. Check if we are on Instagram.',
        'currentUrl': 'Current URL: {url}',
        'validatingCode': '🔄 Validating code {code}...',
        'codeValid': '✅ Code valid! Activating {days} days...',
        'premiumActivatedSuccess': '🎉 Premium activated successfully! Expires on {expiry}',
        'premiumSavedLocally': '💾 Premium status saved locally',
        'activationError': '❌ Error activating: {reason}',
        'activationErrorGeneric': '❌ Error activating premium: {error}',
        'codeInvalid': '❌ Invalid code or already used.',
        'validationError': '❌ Error validating code: {error}',
        'creatingCheckout': '💳 Creating checkout for {price} ({plan})...',
        'testingBackend': '🔄 Testing backend connection...',
        'backendOnline': '✅ Backend online: {status}',
        'redirectingStripe': '🔗 Redirecting to Stripe...',
        'checkoutError': '❌ Error creating checkout: {error}',
        'connectionFailed': '❌ Connection failed: {error}',
        'checkBackend': '💡 Check if backend is running at falconbot.duckdns.org',
        'dailyLimitReached': '❌ Daily follow limit reached. Wait until tomorrow or activate Premium.',
        'premiumActivated': '✅ Premium activated! Valid for {days} days. Expires on: {expiry}',

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
        'testingContentScript': '3. Testing content script...'
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

// Make functions available globally / Tornar funções disponíveis globalmente
if (typeof window !== 'undefined') {
    window.t = t;
    window.setLanguage = setLanguage;
    window.getCurrentLanguage = getCurrentLanguage;
    window.loadLanguage = loadLanguage;
}

// Export for modules / Exportar para módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, setLanguage, getCurrentLanguage, loadLanguage };
}
