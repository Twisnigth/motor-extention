# Guide de Personnalisation - Spotlight Search

## 🎨 Personnaliser les couleurs

### Modifier le thème global

Ouvrez `styles.css` et modifiez les variables CSS :

```css
:root {
    --primary-color: #0a0e27;      /* Couleur de fond principale */
    --secondary-color: #1a1f3a;    /* Couleur secondaire */
    --accent-color: #6366f1;       /* Couleur d'accent (boutons, focus) */
    --text-primary: #ffffff;       /* Couleur du texte principal */
    --text-secondary: #a0aec0;     /* Couleur du texte secondaire */
    --border-color: rgba(255, 255, 255, 0.1);
}
```

### Exemples de thèmes

#### Thème sombre (par défaut)
```css
--primary-color: #0a0e27;
--accent-color: #6366f1;
```

#### Thème clair
```css
--primary-color: #ffffff;
--secondary-color: #f3f4f6;
--accent-color: #3b82f6;
--text-primary: #1f2937;
--text-secondary: #6b7280;
```

#### Thème rose/violet
```css
--primary-color: #1a0033;
--accent-color: #d946ef;
```

---

## 🔗 Ajouter des raccourcis personnalisés

### Méthode 1 : Modifier directement le HTML

Ouvrez `newtab.html` et ajoutez un nouveau raccourci dans la section `shortcuts-grid` :

```html
<a href="https://votre-site.com" class="shortcut-card" data-name="Mon Site">
    <div class="shortcut-icon">🎯</div>
    <div class="shortcut-name">Mon Site</div>
</a>
```

### Méthode 2 : Utiliser le fichier config.json

Modifiez `config.json` :

```json
{
  "shortcuts": [
    {
      "name": "Mon Site",
      "url": "https://monsite.com",
      "icon": "🎯"
    },
    {
      "name": "Slack",
      "url": "https://slack.com",
      "icon": "💬"
    }
  ]
}
```

Puis mettez à jour `newtab.js` pour charger la configuration :

```javascript
// Charger les raccourcis depuis config.json
fetch('config.json')
    .then(response => response.json())
    .then(data => {
        // Utiliser data.shortcuts
    });
```

---

## 🎬 Modifier les animations

### Changer la vitesse des animations

Dans `styles.css`, modifiez les valeurs `animation` :

```css
/* Plus rapide */
.search-box:focus-within {
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Plus lent */
.search-box:focus-within {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Ajouter une nouvelle animation

```css
@keyframes monAnimation {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.mon-element {
    animation: monAnimation 0.3s ease-out;
}
```

---

## 🔧 Ajouter des fonctionnalités

### Ajouter un bouton personnalisé

Dans `newtab.html`, ajoutez :

```html
<button id="monBouton" class="custom-button">Mon Bouton</button>
```

Dans `newtab.js`, ajoutez :

```javascript
document.getElementById('monBouton').addEventListener('click', () => {
    console.log('Bouton cliqué !');
    // Votre code ici
});
```

### Intégrer une API externe

```javascript
// Exemple : Récupérer la météo
async function getWeather() {
    const response = await fetch('https://api.weather.com/...');
    const data = await response.json();
    console.log(data);
}
```

### Ajouter un widget

```html
<div class="widget">
    <h3>Mon Widget</h3>
    <div id="widget-content"></div>
</div>
```

```javascript
function updateWidget() {
    const content = document.getElementById('widget-content');
    content.innerHTML = 'Contenu du widget';
}
```

---

## 📱 Responsive Design

### Adapter pour mobile

Modifiez `styles.css` :

```css
@media (max-width: 768px) {
    .shortcuts-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .search-box {
        padding: 10px 12px;
    }
}
```

---

## 🔐 Ajouter des permissions

Si vous avez besoin de nouvelles permissions, modifiez `manifest.json` :

```json
{
  "permissions": [
    "chrome://favicon/",
    "history",
    "topSites",
    "storage",
    "tabs"
  ]
}
```

---

## 💾 Sauvegarder les préférences utilisateur

### Utiliser le stockage local

```javascript
// Sauvegarder
chrome.storage.local.set({ 'theme': 'dark' });

// Récupérer
chrome.storage.local.get(['theme'], (result) => {
    console.log('Thème:', result.theme);
});
```

---

## 🎯 Ajouter des raccourcis clavier personnalisés

Dans `newtab.js`, modifiez la fonction `setupKeyboardShortcuts()` :

```javascript
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + Shift + G pour Gmail
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'g') {
        e.preventDefault();
        window.location.href = 'https://mail.google.com';
    }
});
```

---

## 🌐 Changer la langue

Modifiez les textes dans `newtab.html` :

```html
<!-- Français -->
<input placeholder="Rechercher ou taper une URL...">

<!-- Anglais -->
<input placeholder="Search or type a URL...">
```

---

## 📊 Ajouter des statistiques

```javascript
// Compter les clics
let clickCount = 0;

document.addEventListener('click', () => {
    clickCount++;
    chrome.storage.local.set({ 'clickCount': clickCount });
});
```

---

## 🎨 Créer un thème personnalisé

Créez un nouveau fichier `themes.css` :

```css
/* Thème personnalisé */
.theme-custom {
    --primary-color: #1a1a2e;
    --accent-color: #16c784;
}
```

Puis appliquez-le dans `newtab.html` :

```html
<body class="theme-custom">
```

---

## 🚀 Optimiser les performances

### Lazy loading des images

```javascript
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
        }
    });
});

images.forEach(img => imageObserver.observe(img));
```

### Minifier le CSS/JS

Utilisez des outils comme :
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

---

## 📚 Ressources utiles

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

Bon développement ! 🚀

