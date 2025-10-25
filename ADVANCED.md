# Guide Avancé - Spotlight Search

## 🔌 Intégrations avancées

### Intégration Gmail avec authentification

```javascript
// Dans newtab.js
async function getGmailUnreadCount() {
    try {
        const response = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages?q=is:unread', {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        return data.resultSizeEstimate;
    } catch (error) {
        console.error('Erreur Gmail:', error);
    }
}
```

### Intégration Gemini API

```javascript
async function askGemini(query) {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': 'YOUR_API_KEY'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: query }]
            }]
        })
    });
    return await response.json();
}
```

### Intégration Notion

```javascript
async function getNotionPages() {
    const response = await fetch('https://api.notion.com/v1/databases/YOUR_DATABASE_ID/query', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + NOTION_TOKEN,
            'Notion-Version': '2022-06-28'
        }
    });
    return await response.json();
}
```

---

## 🎯 Fonctionnalités avancées

### Recherche intelligente avec IA

```javascript
async function smartSearch(query) {
    // Utiliser une API d'IA pour améliorer la recherche
    const suggestions = await fetch('/api/smart-search', {
        method: 'POST',
        body: JSON.stringify({ query })
    }).then(r => r.json());
    
    return suggestions;
}
```

### Synchronisation multi-appareils

```javascript
// Sauvegarder les raccourcis dans le cloud
async function syncShortcuts() {
    const shortcuts = await chrome.storage.local.get('shortcuts');
    
    await fetch('/api/sync', {
        method: 'POST',
        body: JSON.stringify(shortcuts)
    });
}

// Récupérer les raccourcis synchronisés
async function loadSyncedShortcuts() {
    const data = await fetch('/api/shortcuts').then(r => r.json());
    chrome.storage.local.set({ shortcuts: data });
}
```

### Thème adaptatif basé sur l'heure

```javascript
function setAdaptiveTheme() {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 18) {
        // Thème clair le jour
        document.body.classList.add('theme-light');
    } else {
        // Thème sombre la nuit
        document.body.classList.add('theme-dark');
    }
}

setAdaptiveTheme();
```

---

## 📊 Analytics et tracking

### Tracker les actions utilisateur

```javascript
function trackEvent(eventName, eventData) {
    chrome.storage.local.get('analytics', (result) => {
        const analytics = result.analytics || [];
        analytics.push({
            event: eventName,
            data: eventData,
            timestamp: new Date().toISOString()
        });
        chrome.storage.local.set({ analytics });
    });
}

// Utilisation
document.addEventListener('click', (e) => {
    trackEvent('click', {
        target: e.target.className,
        url: window.location.href
    });
});
```

### Générer des rapports

```javascript
async function generateReport() {
    const analytics = await chrome.storage.local.get('analytics');
    
    const report = {
        totalClicks: analytics.analytics.length,
        topActions: getTopActions(analytics.analytics),
        timeRange: getTimeRange(analytics.analytics)
    };
    
    return report;
}
```

---

## 🔐 Sécurité

### Valider les URLs

```javascript
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}
```

### Sanitizer le contenu HTML

```javascript
function sanitizeHTML(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
}
```

### Chiffrer les données sensibles

```javascript
async function encryptData(data, password) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const passwordBuffer = encoder.encode(password);
    
    const key = await crypto.subtle.importKey(
        'raw',
        passwordBuffer,
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
    );
    
    // Continuer avec le chiffrement...
}
```

---

## ⚡ Performance

### Optimiser le chargement

```javascript
// Lazy load les ressources
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadResource(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('[data-lazy]').forEach(el => {
    observer.observe(el);
});
```

### Cacher les données

```javascript
// Utiliser IndexedDB pour les grandes données
async function saveToIndexedDB(storeName, data) {
    const db = await openDatabase();
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    store.put(data);
}
```

---

## 🎨 Animations avancées

### Parallax effect

```javascript
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelector('.background').style.transform = 
        `translate(${x * 10}px, ${y * 10}px)`;
});
```

### Animations avec Framer Motion (si utilisé)

```javascript
// Exemple avec une bibliothèque d'animation
const element = document.querySelector('.search-box');
animate(element, {
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 0.3
});
```

---

## 🧪 Testing

### Tests unitaires

```javascript
// Utiliser Jest ou Mocha
describe('Search functionality', () => {
    test('should return results for valid query', () => {
        const results = handleSearch('test');
        expect(results.length).toBeGreaterThan(0);
    });
});
```

### Tests d'intégration

```javascript
describe('Extension integration', () => {
    test('should load shortcuts on startup', async () => {
        const shortcuts = await loadFrequentSites();
        expect(shortcuts).toBeDefined();
    });
});
```

---

## 📦 Distribution

### Empaqueter l'extension

```bash
# Créer un fichier .crx
zip -r spotlight-search.zip manifest.json newtab.html newtab.js styles.css icons/
```

### Publier sur le Chrome Web Store

1. Créer un compte développeur
2. Payer les frais d'inscription ($5)
3. Soumettre l'extension
4. Attendre la révision (24-72h)

---

## 🚀 Déploiement

### Mise à jour automatique

```json
{
  "update_url": "https://yourserver.com/updates.xml"
}
```

### Versioning

```json
{
  "version": "1.0.0"
}
```

Utilisez [Semantic Versioning](https://semver.org/) :
- MAJOR.MINOR.PATCH
- 1.0.0 → 1.1.0 (nouvelle fonctionnalité)
- 1.0.0 → 1.0.1 (bug fix)

---

## 📚 Ressources avancées

- [Chrome Extension API Reference](https://developer.chrome.com/docs/extensions/reference/)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

Bonne chance ! 🚀

