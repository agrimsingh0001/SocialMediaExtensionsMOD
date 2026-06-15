// Content script initialization
console.log('Instagram Auto-Follow content script loaded at:', window.location.href);

// Helper function - must be defined early
const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Check if i18n is available
if (typeof t === 'function') {
    console.log('✅ i18n functions available');
    // Load language from storage
    if (typeof loadLanguage === 'function') {
        loadLanguage().then(() => {
            console.log('✅ Language loaded in content script:', getCurrentLanguage());
        });
    }
} else {
    console.log('❌ i18n functions not available');
}

// i18n will be loaded from the extension's global scope

// Debug function for inspecting page structure
window.debugInstagramComments = () => {
    console.log('=== INSTAGRAM COMMENTS DEBUG ===');

    // Find all potential comment-related elements
    const selectors = [
        '[data-testid="comment"]',
        'div[class*="comment"]',
        'article',
        'ul',
        'div[role="group"]'
    ];

    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        console.log(`${selector}: ${elements.length} elements`);
    });

    // Find all username links
    const usernameLinks = document.querySelectorAll('a[href^="/"]:not([href*="/p/"]):not([href*="/explore/"]):not([href*="/reels/"])');
    console.log('Potential username links:', usernameLinks.length);

    usernameLinks.forEach((link, index) => {
        if (index < 10) { // Show first 10
            const href = link.getAttribute('href');
            const text = link.textContent?.trim();
            const parent = link.parentElement?.tagName;
            const grandparent = link.parentElement?.parentElement?.tagName;

            console.log(`  ${index + 1}. ${href} "${text}" (parent: ${parent}, grandparent: ${grandparent})`);
        }
    });

    // Try to find comments by looking at the DOM structure
    console.log('=== DOM STRUCTURE ANALYSIS ===');
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
        if (index < 3) { // Check first 3 articles
            const links = article.querySelectorAll('a[href^="/"]');
            console.log(`Article ${index + 1}: ${links.length} links`);
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.length > 1 && !href.includes('/p/')) {
                    console.log(`  - ${href}`);
                }
            });
        }
    });

    console.log('=== END DEBUG ===');
};

// Test scraping function
window.testCommentScraping = async () => {
    console.log('Testing comment scraping...');
    const users = await scrapeCommenters();
    console.log('Found users:', Array.from(users));
    return users;
};

// Helper to wait for elements (accepts CSS selector string or function)
const waitForElement = (selectorOrFunction, timeout = 5000) => {
    return new Promise((resolve) => {
        const findElement = typeof selectorOrFunction === 'function'
            ? selectorOrFunction
            : () => document.querySelector(selectorOrFunction);

        const element = findElement();
        if (element) {
            return resolve(element);
        }

        const observer = new MutationObserver(() => {
            const found = findElement();
            if (found) {
                resolve(found);
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        setTimeout(() => {
            observer.disconnect();
            resolve(null);
        }, timeout);
    });
};

function parseFollowerCount(text) {
    if (!text) return 0;
    // Remove "followers", "seguidores", etc.
    text = text.toLowerCase().replace(/followers?|seguidores?/g, '').trim();

    // Parse K, M, B
    let multiplier = 1;
    if (text.includes('k')) {
        multiplier = 1000;
        text = text.replace('k', '');
    } else if (text.includes('m')) {
        multiplier = 1000000;
        text = text.replace('m', '');
    } else if (text.includes('b')) {
        multiplier = 1000000000;
        text = text.replace('b', '');
    }

    // Handle comma/dot decimal separators (heuristics)
    // If text has "," and "." -> assume "." is thousand separator if it comes first, or decimal if second?
    // Actually Instagram usually uses simple formats. 10.5K, 1,234.
    // Let's replace ',' with '.' if it looks like a decimal, or remove it if thousand.

    // Simplified: Remove all non-numeric and non-dot/comma
    text = text.replace(/[^0-9.,]/g, '');

    try {
        // If it contains comma and dot, remove comma (thousand) and keep dot (decimal)
        if (text.includes(',') && text.includes('.')) {
            text = text.replace(/,/g, '');
        } else if (text.includes(',')) {
            // Check if comma is decimal (e.g. 1,5k) or thousand (1,000)
            // If comma is followed by 3 digits and end of string, likely thousand.
            // If followed by 1 or 2 digits, likely decimal.
            // But 1,5k would have been handled by 'k' check earlier.
            // If we have 'k/m' multiplier, treat comma as decimal.
            if (multiplier > 1) {
                text = text.replace(',', '.');
            } else {
                // No multiplier. 1,234 -> 1234. 1,5 -> 1.5? Users < 1000 don't use decimals usually.
                // Improve robustness: assume comma is thousand separator for standard numbers
                text = text.replace(',', '');
            }
        }
        return parseFloat(text) * multiplier;
    } catch (e) {
        return 0;
    }
}

async function getFollowerCount() {
    // Try to find the followers link
    const followersLink = await waitForElement(() => {
        return Array.from(document.querySelectorAll('a')).find(a =>
            a.getAttribute('href')?.includes('/followers')
        );
    }, 3000);

    if (followersLink) {
        // Look for the span/div inside that contains the number
        const numberElement = followersLink.querySelector('span') || followersLink;
        // The text is usually something like "100 followers" or just "100" inside a span with title
        const titleVal = numberElement.getAttribute('title');
        const textVal = numberElement.textContent;
        return parseFollowerCount(titleVal || textVal);
    }

    // Fallback: try to find by specific text pattern
    return 0;
}

// Action Listeners
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Content script received message:', message, 'from URL:', window.location.href);

    if (message.action === 'PING') {
        console.log('Content script pinged - responding');
        sendResponse({ pong: true });
        return true; // Keep message channel open for async response
    } else if (message.action === 'DIVIDE_AND_CONQUER') {
        console.log('Starting initial detection');
        handleInitialDetection();
    } else if (message.action === 'PERFORM_INTERACTION') {
        console.log('Starting profile interaction with settings:', message.settings);
        handleProfileInteraction(message.settings);
    } else if (message.action === 'START_UNFOLLOW') {
        console.log('✅ Content script: Starting unfollow process with limit:', message.limit);
        handleUnfollow(message.limit).catch(error => {
            console.error('❌ Error in handleUnfollow:', error);
            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `❌ Erro: ${error.message}` });
        });
    } else if (message.action === 'STOP_UNFOLLOW') {
        console.log('Stopping unfollow process');
        // Stop any ongoing unfollow operations
    }
});

// Helper to find the scrollable container within a dialog
function getScrollableContainer(dialog) {
    if (!dialog) return null;

    // 1. Precise match based on user provided HTML (checking style attribute carefully)
    const elements = dialog.querySelectorAll('div[style*="overflow"]');
    for (const el of elements) {
        const style = el.getAttribute('style') || '';
        if (style.includes('overflow: hidden auto') ||
            style.includes('overflow:hidden auto') ||
            style.includes('overflow-y: auto') ||
            style.includes('overflow-y:auto')) {
            console.log(`📜 Found scrollable container by style match. Classes: "${el.className}"`);
            return el;
        }
    }

    // 2. Heuristic: Find the element with the largest scrollHeight that has overflow-y auto/scroll
    const allDivs = Array.from(dialog.querySelectorAll('div'));
    let bestCandidate = null;
    let maxScrollHeight = 0;

    for (const div of allDivs) {
        const style = window.getComputedStyle(div);
        const overflowY = style.overflowY;
        const isScrollable = (overflowY === 'auto' || overflowY === 'scroll') ||
            (div.style.overflowY === 'auto' || div.style.overflow === 'auto');

        if (isScrollable) {
            if (div.scrollHeight > maxScrollHeight) {
                maxScrollHeight = div.scrollHeight;
                bestCandidate = div;
            }
        }
    }

    if (bestCandidate) {
        console.log(`📜 Found scrollable container by heuristics. Classes: "${bestCandidate.className}", ScrollHeight: ${maxScrollHeight}`);
        return bestCandidate;
    }

    // 3. Fallback: Identify the specific structure from user report
    const specificStructure = dialog.querySelector('div[style*="height: auto"][style*="overflow: hidden auto"]');
    if (specificStructure) {
        console.log('📜 Found scrollable container by specific user structure');
        return specificStructure;
    }

    // 4. Last resort
    console.warn('⚠️ Could not identify specific scrollable container, falling back to dialog');
    return dialog;
}

// Helper for smoother, human-like scrolling that checks for growth
async function smartScroll(element) {
    if (!element) return false;

    const initialHeight = element.scrollHeight;
    const initialTop = element.scrollTop;

    console.log(`📜 SmartScroll: Start. Height: ${initialHeight}, Top: ${initialTop}, Client: ${element.clientHeight}, Classes: ${element.className}`);

    // Perform a few small scrolls to simulate user activity
    for (let i = 0; i < 3; i++) {
        try {
            element.scrollBy({ top: 300, behavior: 'smooth' });
        } catch (e) {
            element.scrollTop += 300;
        }
        await delay(300);
    }

    // Ensure we hit the very bottom to trigger the load
    element.scrollTop = element.scrollHeight;
    element.dispatchEvent(new Event('scroll'));

    // Wait for network/content load
    await delay(2500);

    const finalHeight = element.scrollHeight;
    // We consider it a success if the height grew significantly
    const hasGrown = finalHeight > initialHeight + 50;

    console.log(`📜 SmartScroll: End. New Height: ${finalHeight}, Growth: ${hasGrown}`);
    return hasGrown;
}

async function handleInitialDetection() {
    chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('startingDetection') });

    if (!isLoggedIn()) {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('notLoggedIn') });
        return;
    }

    if (isPostPage()) {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('postDetected') });
        const users = await scrapeCommenters();
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('analysisComplete', { count: users.length }) });
        chrome.runtime.sendMessage({ action: 'USERS_SCRAPED', users });
    } else {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('notOnPost', { url: window.location.href }) });
    }
}

function isLoggedIn() {
    // Check for home feed or profile icon in nav
    return !!(document.querySelector('[aria-label="Home"]') || document.querySelector('nav') || document.querySelector('svg[aria-label="New post"]'));
}

function isPostPage() {
    return window.location.pathname.includes('/p/') || window.location.pathname.includes('/reels/') || window.location.pathname.includes('/reel/');
}

async function scrapeCommenters() {
    const users = new Set();

    // Debug: Log page structure
    console.log('=== PAGE DEBUG ===');
    console.log('URL:', window.location.href);
    console.log('Title:', document.title);

    // Debug: Find all potential comment elements
    const allAnchors = document.querySelectorAll('a[href]');
    console.log('Total anchors found:', allAnchors.length);

    const commentAnchors = Array.from(allAnchors).filter(a => {
        const href = a.getAttribute('href');
        return href && href.startsWith('/') && !href.includes('/p/') && !href.includes('/explore/') && !href.includes('/reels/');
    });
    console.log('Potential comment anchors:', commentAnchors.length);

    // Smart comment detection based on Instagram's current structure
    const getComments = () => {
        try {
            console.log('=== SMART COMMENT DETECTION ===');

            // Get all potential user links (excluding navigation/header links)
            const allUserLinks = document.querySelectorAll(`
                a[href^="/"]:not([href*="/p/"]):not([href*="/explore/"]):not([href*="/reels/"]):not([href*="/direct/"]):not([href*="/accounts/"]):not([href*="/legal/"]):not([href*="/web/"]):not([href*="/tech."]):not([href^="/#"])
            `);

            console.log(`Found ${allUserLinks.length} potential user links`);

            allUserLinks.forEach((link, index) => {
                const href = link.getAttribute('href');
                // Extract username more precisely: get the first segment after the first /
                const username = href ? href.split('/')[1]?.split('?')[0] : '';
                const text = link.textContent?.trim() || '';

                // Basic username validation
                if (username && username.length >= 1 && username.length <= 30 &&
                    /^[a-zA-Z0-9._]+$/.test(username) &&
                    !['', 'explore', 'p', 'reel', 'reels', 'stories', 'direct', 'accounts'].includes(username)) {

                    // Smart detection: analyze the DOM context
                    let isCommenter = false;
                    let confidence = 0;

                    // Check 1: Link text matches username (high confidence for comments)
                    if (text === username || text === '@' + username) {
                        confidence += 3;
                    }

                    // Check 2: Look for timestamp indicators nearby (very specific to comments)
                    const parentElement = link.parentElement;
                    if (parentElement) {
                        const nearbyText = parentElement.textContent || '';
                        // Look for relative time indicators (1d, 2h, 30m, etc.)
                        if (/\d+[dhmwy]\b/.test(nearbyText)) {
                            confidence += 5;
                            console.log(`  ⏰ Timestamp found near ${username}`);
                        }

                        // Check 3: Parent has few children (typical of comment structures)
                        if (parentElement.children.length <= 4) {
                            confidence += 1;
                        }

                        // Check 4: Walk up DOM looking for comment-like containers
                        let element = link.parentElement;
                        for (let i = 0; i < 6 && element && !isCommenter; i++) {
                            const className = element.className || '';
                            const dataTestId = element.getAttribute('data-testid');
                            const role = element.getAttribute('role');

                            // Known Instagram comment patterns
                            if (dataTestId === 'comment' ||
                                dataTestId === 'comment-user' ||
                                className.includes('comment') ||
                                className.includes('Comment') ||
                                role === 'group' ||
                                element.tagName === 'LI') {
                                confidence += 4;
                                console.log(`  📦 Found comment container for ${username}`);
                            }

                            // Check for common Instagram CSS classes (these change but patterns persist)
                            if (className.includes('x1') || className.includes('x2')) {
                                confidence += 1;
                            }

                            element = element.parentElement;
                        }

                        // Check 5: Look for reply/like indicators
                        if (nearbyText.includes('Reply') || nearbyText.includes('Like') ||
                            nearbyText.includes('❤️') || nearbyText.includes('👍')) {
                            confidence += 2;
                        }

                        // Check 6: Exclude obvious non-comment contexts
                        const grandParent = parentElement?.parentElement;
                        if (grandParent) {
                            const gpClass = grandParent.className || '';
                            if (gpClass.includes('header') || gpClass.includes('nav') ||
                                gpClass.includes('story') || gpClass.includes('reel')) {
                                confidence -= 10; // Strong negative indicator
                            }
                        }
                    }

                    // Decision threshold
                    if (confidence >= 3) {
                        isCommenter = true;
                        console.log(`  ✅ CONFIRMED commenter: ${username} (confidence: ${confidence})`);
                        users.add(username);
                    } else if (index < 20) { // Only log first 20 rejections for debugging
                        console.log(`  ❌ Rejected: ${username} (confidence: ${confidence}, text: "${text}")`);
                    }
                }
            });

            console.log(`=== FOUND ${users.size} COMMENTERS ===`);

        } catch (error) {
            console.log('Error in smart comment detection:', error);
        }
    };

    chrome.runtime.sendMessage({ action: 'UPDATE_STATUS', status: t('scrapingComments') });

    // Initial scraping
    getComments();

    // Try to load more comments - but be more conservative and error-tolerant
    try {
        for (let i = 0; i < 3; i++) { // Reduced from 5 to 3 attempts
            const initialCount = users.size;

            // Try clicking "Load more" button first
            const loadMoreSelectors = [
                'svg[aria-label="Load more comments"]',
                'svg[aria-label="Carregar mais comentários"]',
                'button:contains("Load more")',
                'button:contains("View more")',
                'div[role="button"]:contains("more")',
                'span:contains("more comments")'
            ];

            let loadMoreBtn = null;
            for (const selector of loadMoreSelectors) {
                try {
                    if (selector.includes(':contains')) {
                        // Handle text-based selectors
                        const elements = Array.from(document.querySelectorAll('*')).filter(el =>
                            el.textContent?.toLowerCase()?.includes(selector.split(':contains("')[1].replace('")', ''))
                        );
                        if (elements.length > 0) {
                            loadMoreBtn = elements[0];
                            break;
                        }
                    } else {
                        const btn = document.querySelector(selector);
                        if (btn) {
                            loadMoreBtn = btn;
                            break;
                        }
                    }
                } catch (error) {
                    console.log('Error finding load more button:', error);
                }
            }

            if (loadMoreBtn) {
                try {
                    const clickableBtn = loadMoreBtn.closest('div[role="button"]') ||
                        loadMoreBtn.closest('button') ||
                        loadMoreBtn;
                    if (clickableBtn) {
                        clickableBtn.click();
                        await delay(2000);
                        getComments();
                    }
                } catch (error) {
                    console.log('Error clicking load more button:', error);
                }
            } else {
                // Fallback: try scrolling (but be careful and check if it actually scrolls)
                try {
                    const currentScroll = window.scrollY;
                    window.scrollTo(0, document.body.scrollHeight);
                    await delay(1500); // Reduced delay
                    getComments();

                    // If scroll didn't work and we're still at the same position, stop
                    if (window.scrollY === currentScroll && users.size === initialCount) {
                        break;
                    }
                } catch (error) {
                    console.log('Error scrolling:', error);
                    break;
                }
            }

            // If we didn't get new users in this iteration, stop trying
            if (users.size === initialCount) {
                break;
            }

            await delay(1000);
        }
    } catch (error) {
        console.log('Error in comment loading loop:', error);
    }

    console.log(`Scraped ${users.size} unique users from comments`);
    chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('usersToProcess', { count: users.size }) });

    return Array.from(users);
}

async function handleProfileInteraction(settings) {
    // Extract username from URL for better logging
    const urlParts = window.location.pathname.split('/').filter(p => p);
    const username = urlParts[0] || 'unknown';

    chrome.runtime.sendMessage({ action: 'UPDATE_STATUS', status: `Processando @${username}...` });
    chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('processingProfile', { username }) });

    // 0. Check Max Followers (Premium Feature)
    if (settings.maxFollowers && settings.maxFollowers > 0) {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('checkingFollowers') });
        const followerCount = await getFollowerCount();
        console.log(`📊 @${username} has approx ${followerCount} followers (Limit: ${settings.maxFollowers})`);

        if (followerCount > settings.maxFollowers) {
            console.log(`⚠️ Limit exceeded. Skipping.`);
            chrome.runtime.sendMessage({
                action: 'LOG_ACTION',
                text: t('maxFollowersExceeded', { username, count: followerCount, limit: settings.maxFollowers })
            });
            chrome.runtime.sendMessage({ action: 'UPDATE_STATS', stats: { processed: 0, skipped: 1 } });
            chrome.runtime.sendMessage({ action: 'ACTION_COMPLETED' });
            return;
        }
    }

    // 1. Check if private - more robust detection
    const isPrivate = !!(
        // Check for private account messages in multiple languages
        document.querySelector('h2')?.innerText?.includes('This account is private') ||
        document.querySelector('h2')?.innerText?.includes('Esta conta é privada') ||
        document.querySelector('h2')?.innerText?.includes('Esta conta é privada') ||
        document.querySelector('[data-testid="private-profile"]') ||
        document.querySelector('div[class*="private"]') ||
        // Check for the private account icon/text
        Array.from(document.querySelectorAll('*')).some(el =>
            el.textContent?.includes('This account is private') ||
            el.textContent?.includes('Esta conta é privada') ||
            el.textContent?.includes('privada')
        )
    );

    // Check if we should follow private accounts
    const storageResult = await new Promise((resolve) => {
        chrome.storage.local.get(['followPrivate'], resolve);
    });
    const followPrivate = storageResult.followPrivate !== false; // Default: true

    if (isPrivate && !followPrivate) {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('privateAccount', { username }) });
        chrome.runtime.sendMessage({ action: 'UPDATE_STATS', stats: { processed: 0, skipped: 1 } });
        chrome.runtime.sendMessage({ action: 'ACTION_COMPLETED' });
        return;
    }

    if (!isPrivate) {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('accountNotPrivate', { username }) });
    } else {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('privateAccountFollowing', { username }) });
    }

    // 2. Follow - more comprehensive button detection
    console.log('🔍 [CONTENT] Looking for follow button for', username);
    const allButtons = Array.from(document.querySelectorAll('button'));
    console.log('🔍 [CONTENT] Found', allButtons.length, 'buttons on page');

    // Check for Follow button (to follow)
    const followButtons = allButtons.filter(b => {
        const text = b.innerText?.toLowerCase()?.trim();
        const ariaLabel = b.getAttribute('aria-label')?.toLowerCase() || '';
        const testId = b.getAttribute('data-testid') || '';

        const isFollow = text === 'follow' ||
            text === 'seguir' ||
            text === 'follow back' ||
            text === 'seguir também' ||
            ariaLabel.includes('follow') ||
            testId.includes('follow');

        if (isFollow) {
            console.log('✅ [CONTENT] Found follow button:', { text, ariaLabel, testId });
        }

        return isFollow;
    });

    // Check for Following button (already following)
    const followingButtons = allButtons.filter(b => {
        const text = b.innerText?.toLowerCase()?.trim();
        const ariaLabel = b.getAttribute('aria-label')?.toLowerCase() || '';
        return text === 'following' ||
            text === 'seguindo' ||
            ariaLabel.includes('following') ||
            ariaLabel.includes('seguindo');
    });

    if (followButtons.length > 0) {
        console.log('✅ [CONTENT] Follow button found, clicking...');
        followButtons[0].click();
        console.log('✅ [CONTENT] Follow button clicked for', username);
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('clickedFollow', { username }) });
        console.log('📤 [CONTENT] Sending FOLLOW_SUCCESS message...');
        chrome.runtime.sendMessage({ action: 'FOLLOW_SUCCESS' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('❌ [CONTENT] Error sending FOLLOW_SUCCESS:', chrome.runtime.lastError);
            } else {
                console.log('✅ [CONTENT] FOLLOW_SUCCESS sent successfully');
            }
        });
        await delay(2000);
    } else if (followingButtons.length > 0) {
        console.log('ℹ️ [CONTENT] Already following', username, '- found Following button');
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('alreadyFollowing', { username }) });
    } else {
        console.log('⚠️ [CONTENT] No follow/following button found for', username);
        console.log('⚠️ [CONTENT] Sample button texts:', allButtons.slice(0, 5).map(b => ({
            text: b.innerText?.trim(),
            ariaLabel: b.getAttribute('aria-label'),
            testId: b.getAttribute('data-testid')
        })));
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('alreadyFollowing', { username }) });
    }

    // 3. Like random photo
    if (settings.likeRandom) {
        const posts = document.querySelectorAll('a[href*="/p/"]');
        if (posts.length > 0) {
            const randomIndex = Math.floor(Math.random() * Math.min(posts.length, 6));
            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `🖼️ Opening random photo (${randomIndex + 1}/${posts.length})...` });
            posts[randomIndex].click();

            // Wait for modal to open and fully load
            await delay(3000);

            // Try multiple selectors for like button - use waitForElement for better reliability
            let likeBtn = null;
            const likeSelectors = [
                'svg[aria-label="Like"]',
                'svg[aria-label="Curtir"]',
                'button[aria-label="Like"]',
                'button[aria-label="Curtir"]',
                'div[role="button"][aria-label*="Like" i]',
                'div[role="button"][aria-label*="Curtir" i]',
                'button[data-testid="like-button"]',
                'article button[type="button"]', // Fallback: any button in article
            ];

            // Try each selector with waitForElement
            for (const selector of likeSelectors) {
                try {
                    const element = await waitForElement(selector, 2000);
                    if (element) {
                        // Try to find the clickable parent
                        likeBtn = element.closest('div[role="button"]') ||
                            element.closest('button') ||
                            element;
                        if (likeBtn) {
                            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `🔍 Found like button with selector: ${selector}` });
                            break;
                        }
                    }
                } catch (e) {
                    // Selector not found, try next one
                    continue;
                }
            }

            if (likeBtn) {
                // Check if already liked - check aria-label first (most reliable)
                const ariaLabel = (likeBtn.getAttribute('aria-label') ||
                    likeBtn.querySelector('svg')?.getAttribute('aria-label') || '').toLowerCase();

                // Debug: log what we found
                chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `🔍 Like button aria-label: "${ariaLabel}"` });

                const isLiked = ariaLabel.includes('unlike') ||
                    ariaLabel.includes('descurtir') ||
                    ariaLabel.includes('deslike');

                if (isLiked) {
                    chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `ℹ️ Photo already liked for @${username}` });
                } else {
                    // Not liked - try to like it
                    chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `👍 Attempting to like photo for @${username}...` });
                    likeBtn.click();
                    await delay(1000);

                    // Verify if it worked by checking aria-label again
                    const newAriaLabel = (likeBtn.getAttribute('aria-label') ||
                        likeBtn.querySelector('svg')?.getAttribute('aria-label') || '').toLowerCase();
                    const nowLiked = newAriaLabel.includes('unlike') ||
                        newAriaLabel.includes('descurtir') ||
                        newAriaLabel.includes('deslike');

                    if (nowLiked) {
                        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('likedPhoto', { username }) });
                    } else {
                        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `⚠️ Like action may have failed for @${username}` });
                    }
                    await delay(500);
                }
            } else {
                chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `⚠️ Like button not found for @${username}` });
            }

            // Close post modal
            await delay(1000);
            const closeSelectors = [
                'svg[aria-label="Close"]',
                'svg[aria-label="Fechar"]',
                'button[aria-label="Close"]',
                'button[aria-label="Fechar"]',
            ];

            let closeBtn = null;
            for (const selector of closeSelectors) {
                const element = document.querySelector(selector);
                if (element) {
                    closeBtn = element.closest('div[role="button"]') ||
                        element.closest('button') ||
                        element;
                    if (closeBtn) break;
                }
            }

            if (closeBtn) {
                closeBtn.click();
                await delay(1000);
            }
        }
    }

    chrome.runtime.sendMessage({ action: 'UPDATE_STATS', stats: { processed: 1, skipped: 0 } });
    chrome.runtime.sendMessage({ action: 'ACTION_COMPLETED' });
}

// Global lock to prevent multiple instances
window.isUnfollowingActive = false;

async function handleUnfollow(limit) {
    console.log('🔍 handleUnfollow called with limit:', limit);

    // 1. Check/Set Lock
    if (window.isUnfollowingActive) {
        console.warn('⚠️ handleUnfollow is already running. Ignoring new request.');
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: '⚠️ Já existe um processo de Unfollow em andamento.' });
        return;
    }
    window.isUnfollowingActive = true;

    try {
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('checkingProfile') });

        // 1. Ensure we are on the current user's profile
        const currentUrl = window.location.href;
        const urlMatch = currentUrl.match(/instagram\.com\/([^\/\?]+)/);
        if (!urlMatch) {
            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('notOnProfile') });
            return;
        }
        const currentUsername = urlMatch[1];

        // Check if Following modal is already open
        let dialog = document.querySelector('div[role="dialog"]');
        if (!dialog) {
            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('checkingFollowers') });
            const followingLink = document.querySelector(`a[href="/${currentUsername}/following/"]`);
            if (!followingLink) {
                chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: '❌ Link de "Seguindo" não encontrado. Verifique se está no seu perfil.' });
                return;
            }
            followingLink.click();
            dialog = await waitForElement('div[role="dialog"]', 5000);
        }

        if (!dialog) {
            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: '❌ Modal de "Seguindo" não abriu.' });
            return;
        }

        let processed = 0;
        let skipped = 0;
        let consecutiveFails = 0;
        const processedUsers = new Set(); // Track usernames to avoid infinite loops

        // Loop Condition: Process until limit reached OR too many scroll failures
        while (processed < limit && consecutiveFails < 5) {
            // Check if cancelled externally (though we have a lock, maybe a Stop button?)
            // We rely on window.isUnfollowingActive being toggled to false by a STOP command if we implement one, 
            // but for now let's assume this loop controls it. To support Stop button, we'd need an external check.
            // Let's add a check for the lock in case Stop button sets it to false.
            // (Wait, Stop button usually reloads or sends message? We need to handle STOP_UNFOLLOW properly to clear this)

            // Find all "Following" buttons in the modal
            const buttons = Array.from(dialog.querySelectorAll('button')).filter(btn => {
                const text = btn.textContent || '';
                const isFollowing = text.includes('Following') || text.includes('Seguindo');
                if (!isFollowing) return false;

                // Extract username to verify if we already processed this person
                const listItem = btn.closest('div[class*="x1qnrgzn"]');
                if (listItem) {
                    const userLink = listItem.querySelector('a[href^="/"]');
                    if (userLink) {
                        const username = userLink.getAttribute('href').replace(/\//g, '');
                        if (processedUsers.has(username)) return false;
                    }
                }
                return true;
            });

            if (buttons.length === 0) {
                // Scroll down to load more
                console.log('🔍 No visible/new buttons found. Scrolling...');

                const scrollable = getScrollableContainer(dialog);

                // If heuristic found "User-like" scrolling logic
                const success = await smartScroll(scrollable);

                if (!success) {
                    consecutiveFails++;
                    console.warn(`⚠️ Scroll failed to load new items (${consecutiveFails}/5)`);
                    chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: '⏳ Carregando mais perfis...' });

                    // Fallback: Try scrolling the dialog itself if we were scrolling something else
                    if (scrollable !== dialog && consecutiveFails > 2) {
                        console.log('⚠️ Trying fallback scroll on dialog itself...');
                        await smartScroll(dialog);
                    }
                } else {
                    consecutiveFails = 0; // Reset if we successfully loaded more
                }
                continue;
            }

            let actionTakenInThisPass = false;

            for (const btn of buttons) {
                if (processed >= limit) break;

                // Extract username for logging and tracking
                const listItem = btn.closest('div[class*="x1qnrgzn"]');
                let targetUser = "user";
                if (listItem) {
                    const userLink = listItem.querySelector('a[href^="/"]');
                    if (userLink) {
                        targetUser = userLink.getAttribute('href').replace(/\//g, '');
                    }
                }

                if (processedUsers.has(targetUser)) continue;

                chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('unfollowingUser', { username: targetUser }) });

                // Click "Following" button
                btn.click();
                await delay(1200);

                // Find "Unfollow" in confirmation dialog
                // Improved selector based on the HTML provided by the user
                const confirmDialog = document.querySelector('div[role="dialog"] button._a9-_')?.closest('div[role="dialog"]') ||
                    document.querySelector('div[role="dialog"]:not([aria-label])') ||
                    document.querySelector('div[class*="x1ja2u2z"][class*="x1afcbsf"]');

                if (confirmDialog) {
                    // Try specific class first, then text content
                    const unfollowBtn = confirmDialog.querySelector('button._a9-_') ||
                        Array.from(confirmDialog.querySelectorAll('button')).find(b => {
                            const t = (b.textContent || '').trim().toLowerCase();
                            return t === 'unfollow' || t === 'deixar de seguir';
                        });

                    if (unfollowBtn) {
                        unfollowBtn.click();
                        processed++;
                        processedUsers.add(targetUser); // Mark as processed
                        actionTakenInThisPass = true;
                        chrome.runtime.sendMessage({ action: 'UNFOLLOW_SUCCESS' });
                        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('unfollowSuccess', { username: targetUser }) });

                        // Delay between unfollows to avoid detection
                        const settings = await chrome.storage.local.get(['actionDelay']);
                        const baseDelay = (settings.actionDelay || 15) * 1000;
                        const waitTime = Math.floor(baseDelay + (Math.random() * 3000));
                        await delay(waitTime);

                        // Small additional wait to let the modal close and DOM update
                        await delay(500);
                    } else {
                        console.log('Unfollow button not found in confirmation dialog');
                        skipped++;
                        processedUsers.add(targetUser); // Skip this user in future iterations
                        chrome.runtime.sendMessage({ action: 'UNFOLLOW_SKIP' });

                        // Try to close the modal if it's still open
                        const cancelBtn = confirmDialog.querySelector('button._a9_1') ||
                            Array.from(confirmDialog.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('cancel'));
                        if (cancelBtn) cancelBtn.click();
                    }
                } else {
                    console.log('Confirmation dialog not found');
                    processedUsers.add(targetUser); // Mark as skipped to avoid infinite loop
                    skipped++;
                }
            }

            // Important: If we processed buttons but didn't successfully unfollow anyone (all skipped?), 
            // we MUST scroll to find new ones, otherwise we loop on the same skipped buttons (if logic fails)
            // Or if we just finished the visible batch.
            if (!actionTakenInThisPass && buttons.length > 0) {
                console.log('⚠️ Found buttons but they were all skipped. Forcing scroll...');
            }

            // Scroll after processing visible buttons (or skipping them)
            // Scroll after processing visible buttons (or skipping them)
            const scrollable = getScrollableContainer(dialog);

            // Just scroll, no need to check return value here as loop will catch empty state next time
            await smartScroll(scrollable);

            // Basic check if scroll blocked
            const lastHeight = scrollable.scrollHeight;
            if (scrollable.scrollHeight === lastHeight && buttons.length === 0) {
                // Wait, this is handled at top of loop. But if we are here, we might have processed buttons.
                // If we processed buttons, we consumed them. New ones should appear or we are at bottom.
            }
        }

        if (consecutiveFails >= 5) {
            chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: '⚠️ Não foi possível carregar mais perfis. Finalizando.' });
        }

        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: t('unfollowFinished') });
        chrome.runtime.sendMessage({ action: 'UNFOLLOW_FINISHED' });

    } catch (e) {
        console.error('Error in handleUnfollow:', e);
        chrome.runtime.sendMessage({ action: 'LOG_ACTION', text: `❌ Erro fatal: ${e.message}` });
    } finally {
        window.isUnfollowingActive = false;
        console.log('🔓 Unfollow lock released');
    }
}
