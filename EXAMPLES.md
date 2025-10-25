# 💡 Exemples de code - Spotlight Search

## 🎯 Exemples pratiques

### 1. Ajouter un widget météo

**HTML (newtab.html)**
```html
<div class="widget weather-widget">
    <div id="weather-icon">🌤️</div>
    <div id="weather-temp">20°C</div>
    <div id="weather-city">Paris</div>
</div>
```

**CSS (styles.css)**
```css
.weather-widget {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    margin-bottom: 30px;
}

#weather-icon {
    font-size: 48px;
    margin-bottom: 10px;
}
```

**JavaScript (newtab.js)**
```javascript
async function loadWeather() {
    try {
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,weather_code'
        );
        const data = await response.json();
        
        document.getElementById('weather-temp').textContent = 
            Math.round(data.current.temperature_2m) + '°C';
        document.getElementById('weather-city').textContent = 'Paris';
    } catch (error) {
        console.error('Erreur météo:', error);
    }
}

loadWeather();
```

---

### 2. Ajouter un bouton pour composer un email Gmail

**HTML**
```html
<button id="compose-email" class="action-button">
    ✉️ Composer
</button>
```

**JavaScript**
```javascript
document.getElementById('compose-email').addEventListener('click', () => {
    window.location.href = 'https://mail.google.com/mail/u/0/#compose';
});
```

---

### 3. Afficher l'heure actuelle

**HTML**
```html
<div id="clock" class="clock">00:00:00</div>
```

**CSS**
```css
.clock {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 30px;
    font-family: 'Courier New', monospace;
}
```

**JavaScript**
```javascript
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('fr-FR');
    document.getElementById('clock').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
```

---

### 4. Ajouter un compteur de tâches

**HTML**
```html
<div class="todo-widget">
    <h3>Tâches du jour</h3>
    <div id="todo-count">0 tâches</div>
</div>
```

**JavaScript**
```javascript
async function loadTodos() {
    const todos = await chrome.storage.local.get('todos');
    const count = todos.todos ? todos.todos.length : 0;
    document.getElementById('todo-count').textContent = 
        count + ' tâche' + (count > 1 ? 's' : '');
}

loadTodos();
```

---

### 5. Intégration avec Spotify (exemple)

**JavaScript**
```javascript
async function getSpotifyNowPlaying() {
    const token = 'YOUR_SPOTIFY_TOKEN';
    
    const response = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    );
    
    if (response.ok) {
        const data = await response.json();
        console.log('Maintenant en lecture:', data.item.name);
    }
}
```

---

### 6. Ajouter un mode focus

**HTML**
```html
<button id="focus-mode" class="mode-button">🎯 Mode Focus</button>
```

**JavaScript**
```javascript
let focusMode = false;

document.getElementById('focus-mode').addEventListener('click', () => {
    focusMode = !focusMode;
    document.body.classList.toggle('focus-mode', focusMode);
    
    if (focusMode) {
        document.querySelector('.shortcuts-section').style.display = 'none';
        document.querySelector('.frequent-sites-section').style.display = 'none';
    } else {
        document.querySelector('.shortcuts-section').style.display = 'block';
        document.querySelector('.frequent-sites-section').style.display = 'block';
    }
});
```

---

### 7. Sauvegarder les raccourcis personnalisés

**JavaScript**
```javascript
function saveCustomShortcut(name, url, icon) {
    chrome.storage.local.get('customShortcuts', (result) => {
        const shortcuts = result.customShortcuts || [];
        shortcuts.push({ name, url, icon });
        chrome.storage.local.set({ customShortcuts: shortcuts });
    });
}

function loadCustomShortcuts() {
    chrome.storage.local.get('customShortcuts', (result) => {
        const shortcuts = result.customShortcuts || [];
        const grid = document.querySelector('.shortcuts-grid');
        
        shortcuts.forEach(shortcut => {
            const card = createShortcutCard(shortcut);
            grid.appendChild(card);
        });
    });
}

function createShortcutCard(shortcut) {
    const card = document.createElement('a');
    card.href = shortcut.url;
    card.className = 'shortcut-card';
    card.innerHTML = `
        <div class="shortcut-icon">${shortcut.icon}</div>
        <div class="shortcut-name">${shortcut.name}</div>
    `;
    return card;
}

loadCustomShortcuts();
```

---

### 8. Ajouter des statistiques d'utilisation

**JavaScript**
```javascript
function trackUsage() {
    chrome.storage.local.get('stats', (result) => {
        const stats = result.stats || {
            searches: 0,
            shortcuts: 0,
            visits: 0
        };
        
        stats.visits++;
        chrome.storage.local.set({ stats });
    });
}

function getStats() {
    return new Promise((resolve) => {
        chrome.storage.local.get('stats', (result) => {
            resolve(result.stats || {});
        });
    });
}

trackUsage();
```

---

### 9. Ajouter un thème personnalisé

**JavaScript**
```javascript
function setTheme(themeName) {
    const themes = {
        dark: {
            primary: '#0a0e27',
            accent: '#6366f1'
        },
        light: {
            primary: '#ffffff',
            accent: '#3b82f6'
        },
        custom: {
            primary: '#1a1a2e',
            accent: '#d946ef'
        }
    };
    
    const theme = themes[themeName];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    
    chrome.storage.local.set({ theme: themeName });
}

// Charger le thème sauvegardé
chrome.storage.local.get('theme', (result) => {
    setTheme(result.theme || 'dark');
});
```

---

### 10. Ajouter un raccourci pour les notes rapides

**HTML**
```html
<button id="quick-note" class="action-button">📝 Note rapide</button>
<div id="note-modal" class="modal hidden">
    <textarea id="note-input" placeholder="Votre note..."></textarea>
    <button id="save-note">Sauvegarder</button>
</div>
```

**JavaScript**
```javascript
document.getElementById('quick-note').addEventListener('click', () => {
    document.getElementById('note-modal').classList.remove('hidden');
    document.getElementById('note-input').focus();
});

document.getElementById('save-note').addEventListener('click', () => {
    const note = document.getElementById('note-input').value;
    
    chrome.storage.local.get('notes', (result) => {
        const notes = result.notes || [];
        notes.push({
            content: note,
            date: new Date().toISOString()
        });
        chrome.storage.local.set({ notes });
    });
    
    document.getElementById('note-modal').classList.add('hidden');
});
```

---

## 🎨 Exemples CSS

### Animation de pulse
```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.pulse {
    animation: pulse 2s infinite;
}
```

### Gradient animé
```css
@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.gradient-text {
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
}
```

---

## 🚀 Conseils

1. **Testez régulièrement** - Rechargez l'extension après chaque modification
2. **Utilisez la console** - F12 pour déboguer
3. **Optimisez les performances** - Évitez les boucles infinies
4. **Documentez votre code** - Ajoutez des commentaires
5. **Sauvegardez les données** - Utilisez `chrome.storage`

Bon développement ! 🎉

