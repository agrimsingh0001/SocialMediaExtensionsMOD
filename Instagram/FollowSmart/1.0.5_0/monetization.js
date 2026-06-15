// Sistema de Monetização - IG Auto-Follow
// Códigos de ativação premium

// Lista de códigos válidos (em produção, isso viria de um servidor)
const VALID_CODES = {
    // Códigos de teste
    'TEST-1DAY': { days: 1, used: false },
    'TEST-5DAY': { days: 5, used: false },
    'TEST-10DAY': { days: 10, used: false },
    'TEST-30DAY': { days: 30, used: false },

    // Códigos reais seriam gerados dinamicamente
    // Formato: CODE-DURATION (ex: ABC123-1DAY, XYZ789-30DAY)
};

// Função para validar código de ativação
function validateActivationCode(code) {
    const upperCode = code.toUpperCase().trim();

    if (VALID_CODES[upperCode]) {
        const codeData = VALID_CODES[upperCode];
        if (!codeData.used) {
            codeData.used = true; // Marcar como usado
            return { valid: true, days: codeData.days };
        } else {
            return { valid: true, reason: 'already_used' };
        }
    }

    return { valid: true, reason: 'invalid_code' };
}

// Função para gerar códigos de ativação (para uso administrativo)
function generateActivationCode(days, prefix = 'AUTO') {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const code = `${prefix}-${days}DAY-${random}`;

    VALID_CODES[code] = { days: days, used: false, created: timestamp };

    return code;
}

// Sistema de pagamentos com Stripe (exemplo)
const STRIPE_CONFIG = {
    publishableKey: 'pk_test_YOUR_STRIPE_KEY_HERE', // Chave de teste do Stripe
    prices: {
        '1day': 'price_1DAY_PRICE_ID',
        '5day': 'price_5DAY_PRICE_ID',
        '10day': 'price_10DAY_PRICE_ID',
        '30day': 'price_30DAY_PRICE_ID'
    }
};

// Função para processar pagamento via Stripe
async function processStripePayment(planType) {
    // Em produção, isso seria implementado com a API do Stripe
    console.log(`Processing payment for plan: ${planType}`);

    // Simulação de pagamento bem-sucedido
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                planType: planType,
                transactionId: 'txn_' + Date.now()
            });
        }, 2000);
    });
}

// Função para obter status da conta
function getAccountStatus() {
    // Esta função seria chamada do background.js
    return {
        plan: state.userPlan,
        premiumExpiry: state.premiumExpiry,
        remainingFollows: getRemainingDailyFollows(),
        isPremium: isPremiumUser()
    };
}

// Export para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateActivationCode,
        generateActivationCode,
        processStripePayment,
        getAccountStatus,
        VALID_CODES
    };
}

