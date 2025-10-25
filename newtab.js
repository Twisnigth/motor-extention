// Éléments du DOM
let frequentSitesGrid;
let geminiButton;
let searchContainer;
let searchInput;
let searchResults;
let resultsContainer;
let historyPanel;
let historyContainer;
let clearHistoryBtn;
let shortcutsGrid;
let addShortcutBtn;
let addShortcutModal;
let closeModalBtn;
let cancelModalBtn;
let saveShortcutBtn;
let shortcutNameInput;
let shortcutUrlInput;

// État
let topSites = [];
let geminiHideTimeout;
let searchTimeout;
let historyData = {}; // Historique groupé par domaine
let shortcuts = []; // Raccourcis personnalisés

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les éléments du DOM
    frequentSitesGrid = document.getElementById('frequentSites');
    geminiButton = document.querySelector('.gemini-button');
    searchContainer = document.querySelector('.search-container');
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    resultsContainer = document.getElementById('resultsContainer');
    historyPanel = document.getElementById('historyPanel');
    historyContainer = document.getElementById('historyContainer');
    clearHistoryBtn = document.getElementById('clearHistoryBtn');
    shortcutsGrid = document.getElementById('shortcutsGrid');
    addShortcutBtn = document.getElementById('addShortcutBtn');
    addShortcutModal = document.getElementById('addShortcutModal');
    closeModalBtn = document.getElementById('closeModalBtn');
    cancelModalBtn = document.getElementById('cancelModalBtn');
    saveShortcutBtn = document.getElementById('saveShortcutBtn');
    shortcutNameInput = document.getElementById('shortcutName');
    shortcutUrlInput = document.getElementById('shortcutUrl');

    // Vérifier que tous les éléments existent
    if (!geminiButton || !searchContainer || !searchInput) {
        console.error('Éléments DOM manquants');
        return;
    }

    loadShortcuts();
    loadHistoryData();
    setupKeyboardShortcuts();
    setupGeminiButton();
    setupSearchInput();
    setupHistoryPanel();
    setupShortcutsModal();
});

// Configuration du bouton Gemini avec délai de disparition
function setupGeminiButton() {
    if (!geminiButton || !searchContainer) return;

    // Au survol du conteneur de recherche
    searchContainer.addEventListener('mouseenter', () => {
        clearTimeout(geminiHideTimeout);
        showGeminiButton();
    });

    // Quand la souris quitte le conteneur de recherche
    searchContainer.addEventListener('mouseleave', () => {
        // Vérifier si la souris est sur le bouton Gemini
        if (!geminiButton.matches(':hover')) {
            // Délai de 3 secondes avant de cacher le bouton
            geminiHideTimeout = setTimeout(() => {
                hideGeminiButton();
            }, 3000);
        }
    });

    // Au survol du bouton Gemini lui-même
    geminiButton.addEventListener('mouseenter', () => {
        clearTimeout(geminiHideTimeout);
        showGeminiButton();
    });

    // Quand la souris quitte le bouton Gemini
    geminiButton.addEventListener('mouseleave', () => {
        // Délai de 3 secondes avant de cacher le bouton
        geminiHideTimeout = setTimeout(() => {
            hideGeminiButton();
        }, 3000);
    });
}

// Afficher le bouton Gemini avec animation
function showGeminiButton() {
    if (!geminiButton) return;
    geminiButton.classList.remove('hiding');
    geminiButton.classList.add('visible');
}

// Cacher le bouton Gemini avec animation
function hideGeminiButton() {
    if (!geminiButton) return;
    geminiButton.classList.remove('visible');
    geminiButton.classList.add('hiding');

    // Attendre la fin de l'animation avant de vraiment cacher
    setTimeout(() => {
        geminiButton.classList.remove('hiding');
    }, 900);
}

// Configurer les icônes des raccourcis
function setupShortcutIcons() {
    const shortcutCards = document.querySelectorAll('.shortcut-card');
    shortcutCards.forEach(card => {
        const img = card.querySelector('.shortcut-icon');
        if (img && img.tagName === 'IMG') {
            const url = card.getAttribute('data-url');
            const name = card.getAttribute('data-name');

            if (url) {
                try {
                    const hostname = new URL(url).hostname;
                    // Utiliser Clearbit pour les logos de meilleure qualité
                    img.src = `https://logo.clearbit.com/${hostname}?size=32`;
                    img.style.cssText = 'width: 32px; height: 32px; border-radius: 6px; object-fit: contain;';
                } catch (e) {
                    img.src = '';
                }
            }

            let iconLoaded = false;

            img.onerror = () => {
                if (!iconLoaded) {
                    iconLoaded = true;
                    const fallback = document.createElement('div');
                    fallback.className = 'shortcut-icon-fallback';
                    fallback.textContent = name.charAt(0).toUpperCase();
                    fallback.style.cssText = `
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #6366f1, #8b5cf6);
                        border-radius: 6px;
                        font-weight: bold;
                        font-size: 14px;
                        color: white;
                    `;
                    img.replaceWith(fallback);
                }
            };

            img.onload = () => {
                iconLoaded = true;
            };
        }
    });
}

// Charger les sites fréquents
function loadFrequentSites() {
    chrome.topSites.get((sites) => {
        topSites = sites.slice(0, 6);
        renderFrequentSites();
    });
}

// Afficher les sites fréquents
function renderFrequentSites() {
    frequentSitesGrid.innerHTML = '';
    topSites.forEach(site => {
        const card = createSiteCard(site);
        frequentSitesGrid.appendChild(card);
    });
}

// Créer une carte de site
function createSiteCard(site) {
    const card = document.createElement('a');
    card.href = site.url;
    card.className = 'site-card';
    card.target = '_self';

    const iconContainer = document.createElement('div');
    iconContainer.className = 'site-icon-container';
    iconContainer.style.cssText = 'display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; flex-shrink: 0;';

    try {
        const hostname = new URL(site.url).hostname;

        const icon = document.createElement('img');
        // Utiliser DuckDuckGo pour les icônes
        icon.src = `https://icons.duckduckgo.com/ip3/${hostname}.ico`;
        icon.className = 'site-icon';
        icon.style.cssText = 'width: 48px; height: 48px; border-radius: 8px; object-fit: contain;';

        let iconLoaded = false;

        icon.onerror = () => {
            if (!iconLoaded) {
                iconLoaded = true;
                const firstLetter = hostname.charAt(0).toUpperCase();

                const placeholder = document.createElement('div');
                placeholder.textContent = firstLetter;
                placeholder.style.cssText = `
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border-radius: 8px;
                    font-weight: bold;
                    font-size: 20px;
                    color: white;
                `;
                iconContainer.innerHTML = '';
                iconContainer.appendChild(placeholder);
            }
        };

        icon.onload = () => {
            iconLoaded = true;
        };

        iconContainer.appendChild(icon);
    } catch (e) {
        const placeholder = document.createElement('div');
        placeholder.textContent = 'W';
        placeholder.style.cssText = `
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 8px;
            font-weight: bold;
            font-size: 20px;
            color: white;
        `;
        iconContainer.appendChild(placeholder);
    }

    const name = document.createElement('div');
    name.className = 'site-name';
    name.textContent = site.title || new URL(site.url).hostname;

    card.appendChild(iconContainer);
    card.appendChild(name);

    return card;
}

// Configuration de la barre de recherche
function setupSearchInput() {
    if (!searchInput || !searchResults || !resultsContainer) {
        console.error('Éléments de recherche manquants:', { searchInput, searchResults, resultsContainer });
        return;
    }

    console.log('setupSearchInput initialisé');

    // Événement focus pour afficher l'historique
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length === 0) {
            showHistoryPanel();
            searchResults.classList.add('hidden');
        }
    });

    // Événement input pour afficher les résultats
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        console.log('Recherche:', query);

        clearTimeout(searchTimeout);

        if (query.length === 0) {
            // Si la barre est vide, afficher l'historique
            showHistoryPanel();
            searchResults.classList.add('hidden');
            return;
        }

        // Si on tape quelque chose, cacher l'historique et afficher les résultats
        hideHistoryPanel();

        // Délai avant de chercher
        searchTimeout = setTimeout(() => {
            console.log('Exécution de performSearch pour:', query);
            performSearch(query);
        }, 300);
    });

    // Événement keydown pour navigation et soumission
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        } else if (e.key === 'Escape') {
            searchResults.classList.add('hidden');
            hideHistoryPanel();
            searchInput.blur();
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateResults(e.key === 'ArrowDown');
        }
    });

    // Fermer les résultats quand on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchResults.classList.add('hidden');
            hideHistoryPanel();
        }
    });
}

// Effectuer la recherche
function performSearch(query) {
    console.log('performSearch appelé avec:', query);
    resultsContainer.innerHTML = '<div style="padding: 16px; color: var(--text-secondary); text-align: center;">Recherche en cours...</div>';
    searchResults.classList.remove('hidden');

    // Chercher en parallèle
    Promise.all([
        getGoogleSuggestions(query),
        getHistoryResults(query),
        getBookmarkResults(query),
        getTopSitesResults(query)
    ]).then(([suggestions, history, bookmarks, topSites]) => {
        console.log('Résultats reçus:', { suggestions, history, bookmarks, topSites });
        displayResults(suggestions, history, bookmarks, topSites, query);
    }).catch((error) => {
        console.error('Erreur lors de la recherche:', error);
        displayResults([], [], [], [], query);
    });
}

// Test avec résultats en dur
function performSearchTest(query) {
    console.log('TEST: performSearch appelé avec:', query);

    const testResults = [
        {
            title: 'Test 1: ' + query,
            url: 'https://example.com/1',
            type: 'suggestion'
        },
        {
            title: 'Test 2: ' + query,
            url: 'https://example.com/2',
            type: 'history'
        },
        {
            title: 'Test 3: ' + query,
            url: 'https://example.com/3',
            type: 'bookmark'
        }
    ];

    console.log('TEST: Affichage des résultats de test:', testResults);
    displayResults(testResults, [], [], query);
}

// Obtenir les suggestions Google via le service worker
function getGoogleSuggestions(query) {
    return new Promise((resolve) => {
        try {
            console.log('Envoi du message au service worker pour:', query);

            // Envoyer un message au service worker pour obtenir les suggestions
            chrome.runtime.sendMessage(
                { action: 'getGoogleSuggestions', query: query },
                (response) => {
                    console.log('Réponse du service worker:', response);

                    if (chrome.runtime.lastError) {
                        console.error('Erreur runtime:', chrome.runtime.lastError);
                        resolve([]);
                        return;
                    }

                    if (response && response.success) {
                        console.log('Suggestions Google reçues:', response.suggestions);

                        // Traiter chaque suggestion pour séparer les sites directs des recherches
                        const suggestions = (response.suggestions || []).slice(0, 5).map(suggestion => {
                            const result = classifySuggestion(suggestion);
                            return {
                                title: suggestion,
                                url: result.url,
                                type: result.type,
                                isDirectSite: result.isDirectSite
                            };
                        });
                        resolve(suggestions);
                    } else {
                        console.error('Erreur suggestions Google:', response);
                        resolve([]);
                    }
                }
            );
        } catch (e) {
            console.error('Erreur getGoogleSuggestions:', e);
            resolve([]);
        }
    });
}

// Classifier une suggestion : est-ce un site direct ou une recherche ?
function classifySuggestion(suggestion) {
    const lowerSuggestion = suggestion.toLowerCase().trim();

    // Dictionnaire des sites populaires avec leurs URLs
    const knownSites = {
        'amazon': { url: 'https://www.amazon.com', isDirectSite: true },
        'amazon.fr': { url: 'https://www.amazon.fr', isDirectSite: true },
        'amazon.co.uk': { url: 'https://www.amazon.co.uk', isDirectSite: true },
        'airbnb': { url: 'https://www.airbnb.com', isDirectSite: true },
        'apple': { url: 'https://www.apple.com', isDirectSite: true },
        'google': { url: 'https://www.google.com', isDirectSite: true },
        'facebook': { url: 'https://www.facebook.com', isDirectSite: true },
        'twitter': { url: 'https://www.twitter.com', isDirectSite: true },
        'x': { url: 'https://www.x.com', isDirectSite: true },
        'youtube': { url: 'https://www.youtube.com', isDirectSite: true },
        'instagram': { url: 'https://www.instagram.com', isDirectSite: true },
        'linkedin': { url: 'https://www.linkedin.com', isDirectSite: true },
        'github': { url: 'https://www.github.com', isDirectSite: true },
        'stackoverflow': { url: 'https://www.stackoverflow.com', isDirectSite: true },
        'reddit': { url: 'https://www.reddit.com', isDirectSite: true },
        'wikipedia': { url: 'https://www.wikipedia.org', isDirectSite: true },
        'medium': { url: 'https://www.medium.com', isDirectSite: true },
        'notion': { url: 'https://www.notion.so', isDirectSite: true },
        'slack': { url: 'https://www.slack.com', isDirectSite: true },
        'discord': { url: 'https://www.discord.com', isDirectSite: true },
        'twitch': { url: 'https://www.twitch.tv', isDirectSite: true },
        'netflix': { url: 'https://www.netflix.com', isDirectSite: true },
        'spotify': { url: 'https://www.spotify.com', isDirectSite: true },
        'gmail': { url: 'https://www.gmail.com', isDirectSite: true },
        'outlook': { url: 'https://www.outlook.com', isDirectSite: true },
        'dropbox': { url: 'https://www.dropbox.com', isDirectSite: true },
        'drive': { url: 'https://drive.google.com', isDirectSite: true },
        'onedrive': { url: 'https://www.onedrive.com', isDirectSite: true },
        'figma': { url: 'https://www.figma.com', isDirectSite: true },
        'canva': { url: 'https://www.canva.com', isDirectSite: true },
        'trello': { url: 'https://www.trello.com', isDirectSite: true },
        'asana': { url: 'https://www.asana.com', isDirectSite: true },
        'jira': { url: 'https://www.atlassian.com/software/jira', isDirectSite: true },
        'confluence': { url: 'https://www.atlassian.com/software/confluence', isDirectSite: true },
        'vercel': { url: 'https://www.vercel.com', isDirectSite: true },
        'netlify': { url: 'https://www.netlify.com', isDirectSite: true },
        'heroku': { url: 'https://www.heroku.com', isDirectSite: true },
        'aws': { url: 'https://www.aws.amazon.com', isDirectSite: true },
        'azure': { url: 'https://www.azure.microsoft.com', isDirectSite: true },
        'gcp': { url: 'https://cloud.google.com', isDirectSite: true },
        'digitalocean': { url: 'https://www.digitalocean.com', isDirectSite: true },
        'npm': { url: 'https://www.npmjs.com', isDirectSite: true },
        'pypi': { url: 'https://www.pypi.org', isDirectSite: true },
        'docker': { url: 'https://www.docker.com', isDirectSite: true },
        'gitlab': { url: 'https://www.gitlab.com', isDirectSite: true },
        'bitbucket': { url: 'https://bitbucket.org', isDirectSite: true },
        'vscode': { url: 'https://code.visualstudio.com', isDirectSite: true },
        'stripe': { url: 'https://www.stripe.com', isDirectSite: true },
        'paypal': { url: 'https://www.paypal.com', isDirectSite: true },
        'twilio': { url: 'https://www.twilio.com', isDirectSite: true },
        'sendgrid': { url: 'https://sendgrid.com', isDirectSite: true },
        'mailchimp': { url: 'https://mailchimp.com', isDirectSite: true },
        'hubspot': { url: 'https://www.hubspot.com', isDirectSite: true },
        'salesforce': { url: 'https://www.salesforce.com', isDirectSite: true },
        'zendesk': { url: 'https://www.zendesk.com', isDirectSite: true },
        'intercom': { url: 'https://www.intercom.com', isDirectSite: true },
        'miro': { url: 'https://miro.com', isDirectSite: true },
        'lucidchart': { url: 'https://www.lucidchart.com', isDirectSite: true },
        'draw.io': { url: 'https://www.draw.io', isDirectSite: true },
        'excalidraw': { url: 'https://excalidraw.com', isDirectSite: true }
    };

    // Vérifier si c'est un site connu
    if (knownSites[lowerSuggestion]) {
        return {
            url: knownSites[lowerSuggestion].url,
            type: 'suggestion',
            isDirectSite: true
        };
    }

    // Vérifier si c'est déjà une URL (contient un point et pas d'espaces)
    if (lowerSuggestion.includes('.') && !lowerSuggestion.includes(' ')) {
        const url = lowerSuggestion.startsWith('http') ? suggestion : `https://${suggestion}`;
        return {
            url: url,
            type: 'suggestion',
            isDirectSite: true
        };
    }

    // Sinon, c'est une recherche Google
    return {
        url: `https://www.google.com/search?q=${encodeURIComponent(suggestion)}`,
        type: 'suggestion',
        isDirectSite: false
    };
}


// Obtenir l'historique
function getHistoryResults(query) {
    return new Promise((resolve) => {
        try {
            chrome.history.search({ text: query, maxResults: 3 }, (results) => {
                console.log('Historique trouvé:', results);
                resolve((results || []).map(r => ({
                    title: r.title || r.url,
                    url: r.url,
                    type: 'history'
                })));
            });
        } catch (e) {
            console.error('Erreur historique:', e);
            resolve([]);
        }
    });
}

// Obtenir les signets
function getBookmarkResults(query) {
    return new Promise((resolve) => {
        try {
            chrome.bookmarks.search(query, (results) => {
                console.log('Signets trouvés:', results);
                resolve((results || []).filter(b => b.url).map(b => ({
                    title: b.title || b.url,
                    url: b.url,
                    type: 'bookmark'
                })));
            });
        } catch (e) {
            console.error('Erreur signets:', e);
            resolve([]);
        }
    });
}

// Obtenir les sites les plus visités
function getTopSitesResults(query) {
    return new Promise((resolve) => {
        try {
            chrome.topSites.get((sites) => {
                console.log('Sites populaires trouvés:', sites);
                if (!sites) {
                    resolve([]);
                    return;
                }

                // Filtrer les sites qui correspondent à la requête
                const filtered = sites.filter(site =>
                    site.title.toLowerCase().includes(query.toLowerCase()) ||
                    site.url.toLowerCase().includes(query.toLowerCase())
                ).map(site => ({
                    title: site.title || site.url,
                    url: site.url,
                    type: 'topsites'
                }));

                resolve(filtered.slice(0, 5));
            });
        } catch (e) {
            console.error('Erreur sites populaires:', e);
            resolve([]);
        }
    });
}

// Afficher les résultats
function displayResults(suggestions, history, bookmarks, topSites, query) {
    console.log('displayResults appelé avec:', { suggestions, history, bookmarks, topSites });
    resultsContainer.innerHTML = '';

    // Combiner et dédupliquer
    const allResults = [];
    const seenUrls = new Set();

    // Ajouter les suggestions Google
    if (suggestions && Array.isArray(suggestions)) {
        suggestions.forEach(s => {
            if (s && s.url && !seenUrls.has(s.url)) {
                allResults.push(s);
                seenUrls.add(s.url);
            }
        });
    }

    // Ajouter l'historique
    if (history && Array.isArray(history)) {
        history.forEach(h => {
            if (h && h.url && !seenUrls.has(h.url)) {
                allResults.push(h);
                seenUrls.add(h.url);
            }
        });
    }

    // Ajouter les signets
    if (bookmarks && Array.isArray(bookmarks)) {
        bookmarks.forEach(b => {
            if (b && b.url && !seenUrls.has(b.url)) {
                allResults.push(b);
                seenUrls.add(b.url);
            }
        });
    }

    // Ajouter les sites populaires
    if (topSites && Array.isArray(topSites)) {
        topSites.forEach(t => {
            if (t && t.url && !seenUrls.has(t.url)) {
                allResults.push(t);
                seenUrls.add(t.url);
            }
        });
    }

    console.log('Résultats combinés:', allResults);

    // Afficher les résultats
    if (allResults.length > 0) {
        console.log('Affichage de', allResults.length, 'résultats');
        allResults.forEach((result, index) => {
            console.log('Création du résultat', index, ':', result);
            const item = createResultItem(result);
            resultsContainer.appendChild(item);
        });
        searchResults.classList.remove('hidden');
    } else {
        console.log('Aucun résultat à afficher');
        resultsContainer.innerHTML = '<div style="padding: 16px; color: var(--text-secondary); text-align: center;">Aucun résultat</div>';
        searchResults.classList.remove('hidden');
    }
}

// Créer un élément de résultat
function createResultItem(result) {
    console.log('createResultItem appelé avec:', result);
    const item = document.createElement('div');
    item.className = 'search-result-item';

    // Icône
    const icon = document.createElement('div');
    icon.className = 'search-result-icon';

    // Essayer de récupérer le favicon du site
    try {
        const url = new URL(result.url);
        const hostname = url.hostname;

        // Créer une image pour le favicon
        const faviconImg = document.createElement('img');
        faviconImg.style.cssText = 'width: 24px; height: 24px; border-radius: 4px; object-fit: contain;';

        // Essayer plusieurs sources de favicon
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
        faviconImg.src = faviconUrl;

        let faviconLoaded = false;

        faviconImg.onerror = () => {
            if (!faviconLoaded) {
                faviconLoaded = true;
                // Fallback: afficher un emoji ou une lettre
                if (result.type === 'suggestion') {
                    icon.textContent = 'G';
                    icon.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
                } else if (result.type === 'bookmark') {
                    icon.textContent = '⭐';
                    icon.style.fontSize = '16px';
                } else {
                    icon.textContent = '🕐';
                    icon.style.fontSize = '16px';
                }
            }
        };

        faviconImg.onload = () => {
            faviconLoaded = true;
        };

        icon.appendChild(faviconImg);
    } catch (e) {
        // Fallback en cas d'erreur
        if (result.type === 'suggestion') {
            icon.textContent = 'G';
            icon.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
        } else if (result.type === 'bookmark') {
            icon.textContent = '⭐';
            icon.style.fontSize = '16px';
        } else {
            icon.textContent = '🕐';
            icon.style.fontSize = '16px';
        }
    }

    // Texte
    const text = document.createElement('div');
    text.className = 'search-result-text';

    const title = document.createElement('div');
    title.className = 'search-result-title';
    title.textContent = result.title;

    const url = document.createElement('div');
    url.className = 'search-result-url';
    try {
        url.textContent = new URL(result.url).hostname;
    } catch (e) {
        url.textContent = result.url;
    }

    text.appendChild(title);
    text.appendChild(url);

    // Badge
    const badge = document.createElement('div');
    badge.className = 'search-result-badge';
    if (result.type === 'suggestion') {
        // Afficher "Site" si c'est un site direct, "Google" si c'est une recherche
        badge.textContent = result.isDirectSite ? 'Site' : 'Google';
    } else if (result.type === 'bookmark') {
        badge.textContent = 'Signet';
    } else {
        badge.textContent = 'Historique';
    }

    item.appendChild(icon);
    item.appendChild(text);
    item.appendChild(badge);

    // Clic sur le résultat
    item.addEventListener('click', () => {
        window.location.href = result.url;
    });

    return item;
}

// Naviguer dans les résultats
function navigateResults(isDown) {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    const currentActive = resultsContainer.querySelector('.search-result-item.active');
    let nextIndex = 0;

    if (currentActive) {
        const currentIndex = Array.from(items).indexOf(currentActive);
        nextIndex = isDown ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex < 0) nextIndex = items.length - 1;
        if (nextIndex >= items.length) nextIndex = 0;
        currentActive.classList.remove('active');
    }

    items[nextIndex].classList.add('active');
    items[nextIndex].scrollIntoView({ block: 'nearest' });
}

// Configuration des raccourcis clavier
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Cmd+K ou Ctrl+K pour focus sur la recherche
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// Charger l'historique depuis Chrome
function loadHistoryData() {
    chrome.history.search({ text: '', maxResults: 1000 }, (results) => {
        historyData = {};

        // Grouper par domaine
        results.forEach(item => {
            try {
                const url = new URL(item.url);
                const domain = url.hostname;

                if (!historyData[domain]) {
                    historyData[domain] = [];
                }

                historyData[domain].push({
                    title: item.title || url.pathname,
                    url: item.url,
                    lastVisitTime: item.lastVisitTime
                });
            } catch (e) {
                // Ignorer les URLs invalides
            }
        });

        // Trier les domaines par nombre de visites
        Object.keys(historyData).forEach(domain => {
            historyData[domain].sort((a, b) => b.lastVisitTime - a.lastVisitTime);
        });
    });
}

// Configuration du panneau d'historique
function setupHistoryPanel() {
    if (!searchInput || !historyPanel) return;

    // Afficher l'historique au focus
    searchInput.addEventListener('focus', () => {
        showHistoryPanel();
    });

    // Empêcher le blur quand on clique sur le panneau
    historyPanel.addEventListener('mousedown', (e) => {
        e.preventDefault();
        searchInput.focus();
    });

    // Cacher l'historique au blur (seulement si on clique vraiment en dehors)
    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            // Vérifier si le focus est toujours dans le conteneur de recherche
            if (!searchContainer.contains(document.activeElement)) {
                hideHistoryPanel();
            }
        }, 100);
    });

    // Bouton pour effacer l'historique
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique ?')) {
                chrome.history.deleteAll(() => {
                    historyData = {};
                    renderHistoryPanel();
                });
            }
        });
    }

    // Cacher quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            hideHistoryPanel();
        }
    });
}

// Afficher le panneau d'historique
function showHistoryPanel() {
    if (!historyPanel) return;
    historyPanel.classList.remove('hidden');
    renderHistoryPanel();
}

// Cacher le panneau d'historique
function hideHistoryPanel() {
    if (!historyPanel) return;
    historyPanel.classList.add('hidden');
}

// Rendre le panneau d'historique
function renderHistoryPanel() {
    if (!historyContainer) return;

    historyContainer.innerHTML = '';

    const domains = Object.keys(historyData).sort((a, b) => {
        return historyData[b].length - historyData[a].length;
    });

    if (domains.length === 0) {
        historyContainer.innerHTML = '<div class="history-empty">Aucun historique</div>';
        return;
    }

    domains.forEach(domain => {
        const group = createHistoryGroup(domain, historyData[domain]);
        historyContainer.appendChild(group);
    });
}

// Créer un groupe d'historique
function createHistoryGroup(domain, items) {
    const group = document.createElement('div');
    group.className = 'history-group';

    const header = document.createElement('div');
    header.className = 'history-group-header';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'history-group-header-left';

    const icon = document.createElement('div');
    icon.className = 'history-group-icon';
    const img = document.createElement('img');
    // Utiliser DuckDuckGo pour les favicons (plus fiable)
    img.src = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
    img.alt = domain;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '4px';
    img.style.objectFit = 'contain';
    img.onerror = () => {
        img.style.display = 'none';
        icon.textContent = domain.charAt(0).toUpperCase();
        icon.style.fontSize = '12px';
        icon.style.fontWeight = '600';
    };
    icon.appendChild(img);

    const title = document.createElement('div');
    title.className = 'history-group-title';
    title.textContent = domain;

    const count = document.createElement('div');
    count.className = 'history-group-count';
    count.textContent = `(${items.length})`;

    const toggle = document.createElement('div');
    toggle.className = 'history-group-toggle';
    toggle.innerHTML = '▼';

    headerLeft.appendChild(icon);
    headerLeft.appendChild(title);
    headerLeft.appendChild(count);
    header.appendChild(headerLeft);
    header.appendChild(toggle);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'history-group-items';

    items.forEach(item => {
        const itemEl = createHistoryItem(item);
        itemsContainer.appendChild(itemEl);
    });

    // Toggle pour ouvrir/fermer le groupe
    header.addEventListener('click', () => {
        itemsContainer.classList.toggle('expanded');
        toggle.classList.toggle('expanded');
    });

    group.appendChild(header);
    group.appendChild(itemsContainer);

    return group;
}

// Créer un élément d'historique
function createHistoryItem(item) {
    const itemEl = document.createElement('div');
    itemEl.className = 'history-item';

    const icon = document.createElement('div');
    icon.className = 'history-item-icon';

    // Ajouter le favicon du site
    const img = document.createElement('img');
    try {
        const url = new URL(item.url);
        // Utiliser DuckDuckGo pour les favicons
        img.src = `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`;
    } catch (e) {
        img.src = `https://icons.duckduckgo.com/ip3/google.com.ico`;
    }
    img.alt = 'favicon';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.onerror = () => {
        img.style.display = 'none';
        icon.textContent = '📄';
    };
    icon.appendChild(img);

    const content = document.createElement('div');
    content.className = 'history-item-content';

    const itemTitle = document.createElement('div');
    itemTitle.className = 'history-item-title';
    itemTitle.textContent = item.title;

    const itemUrl = document.createElement('div');
    itemUrl.className = 'history-item-url';
    itemUrl.textContent = new URL(item.url).hostname;

    content.appendChild(itemTitle);
    content.appendChild(itemUrl);

    const deleteBtn = document.createElement('div');
    deleteBtn.className = 'history-item-delete';
    deleteBtn.innerHTML = '✕';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        chrome.history.deleteUrl({ url: item.url }, () => {
            itemEl.remove();
            loadHistoryData();
        });
    });

    itemEl.appendChild(icon);
    itemEl.appendChild(content);
    itemEl.appendChild(deleteBtn);

    // Cliquer pour ouvrir le lien
    itemEl.addEventListener('click', () => {
        chrome.tabs.create({ url: item.url });
        hideHistoryPanel();
    });

    return itemEl;
}

// Charger les raccourcis depuis le stockage
function loadShortcuts() {
    chrome.storage.sync.get(['shortcuts'], (result) => {
        if (result.shortcuts) {
            shortcuts = result.shortcuts;
        } else {
            // Raccourcis par défaut
            shortcuts = [
                { name: 'Google', url: 'https://www.google.com' },
                { name: 'Gemini', url: 'https://gemini.google.com' },
                { name: 'Gmail', url: 'https://mail.google.com' },
                { name: 'YouTube', url: 'https://www.youtube.com' },
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'Notion', url: 'https://www.notion.so' }
            ];
            saveShortcuts();
        }
        renderShortcuts();
    });
}

// Sauvegarder les raccourcis
function saveShortcuts() {
    chrome.storage.sync.set({ shortcuts: shortcuts });
}

// Afficher les raccourcis
function renderShortcuts() {
    if (!shortcutsGrid) return;

    shortcutsGrid.innerHTML = '';

    shortcuts.forEach((shortcut, index) => {
        const card = createShortcutCard(shortcut, index);
        shortcutsGrid.appendChild(card);
    });
}

// Créer une carte de raccourci
function createShortcutCard(shortcut, index) {
    const card = document.createElement('a');
    card.href = shortcut.url;
    card.className = 'shortcut-card';
    card.target = '_blank';

    // Icône
    const icon = document.createElement('img');
    icon.className = 'shortcut-icon';
    icon.alt = shortcut.name;

    try {
        const url = new URL(shortcut.url);
        icon.src = `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`;
    } catch (e) {
        icon.src = `https://icons.duckduckgo.com/ip3/google.com.ico`;
    }

    icon.onerror = () => {
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 6px;
            font-weight: bold;
            font-size: 14px;
            color: white;
        `;
        placeholder.textContent = shortcut.name.charAt(0).toUpperCase();
        card.replaceChild(placeholder, icon);
    };

    // Nom
    const name = document.createElement('div');
    name.className = 'shortcut-name';
    name.textContent = shortcut.name;

    // Bouton de suppression
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'shortcut-delete-btn';
    deleteBtn.innerHTML = '✕';
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        shortcuts.splice(index, 1);
        saveShortcuts();
        renderShortcuts();
    });

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(deleteBtn);

    return card;
}

// Configuration du modal pour ajouter un raccourci
function setupShortcutsModal() {
    if (!addShortcutBtn || !addShortcutModal) return;

    // Ouvrir le modal
    addShortcutBtn.addEventListener('click', () => {
        addShortcutModal.classList.remove('hidden');
        shortcutNameInput.focus();
    });

    // Fermer le modal
    const closeModal = () => {
        addShortcutModal.classList.add('hidden');
        shortcutNameInput.value = '';
        shortcutUrlInput.value = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    cancelModalBtn.addEventListener('click', closeModal);

    // Fermer en cliquant en dehors
    addShortcutModal.addEventListener('click', (e) => {
        if (e.target === addShortcutModal) {
            closeModal();
        }
    });

    // Sauvegarder le raccourci
    saveShortcutBtn.addEventListener('click', () => {
        const name = shortcutNameInput.value.trim();
        const url = shortcutUrlInput.value.trim();

        if (!name || !url) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Valider l'URL
        try {
            new URL(url);
        } catch (e) {
            alert('URL invalide');
            return;
        }

        // Ajouter le raccourci
        shortcuts.push({ name, url });
        saveShortcuts();
        renderShortcuts();
        closeModal();
    });

    // Ajouter avec Entrée
    shortcutUrlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveShortcutBtn.click();
        }
    });
}

