# ⚡ Démarrage rapide - Spotlight Search

## 🚀 Installation en 5 minutes

### Étape 1 : Préparer les fichiers
Assurez-vous que vous avez tous ces fichiers dans le même dossier :
- ✅ `manifest.json`
- ✅ `newtab.html`
- ✅ `newtab.js`
- ✅ `styles.css`
- ✅ Dossier `icons/`

### Étape 2 : Ouvrir les extensions
Tapez dans la barre d'adresse :
```
chrome://extensions/
```

### Étape 3 : Activer le mode développeur
En haut à droite, cliquez sur le toggle **Mode de développement**

### Étape 4 : Charger l'extension
1. Cliquez sur **Charger l'extension non empaquetée**
2. Sélectionnez le dossier contenant les fichiers
3. Cliquez sur **Ouvrir**

### Étape 5 : Tester
Ouvrez un nouvel onglet (Ctrl+T) et vous verrez l'extension !

---

## 🎯 Utilisation basique

### Rechercher
1. Appuyez sur **Cmd/Ctrl + K**
2. Tapez votre recherche
3. Appuyez sur **Entrée**

### Utiliser les raccourcis
Cliquez sur l'un des 6 raccourcis :
- 🔍 Google
- ✨ Gemini
- 📧 Gmail
- ▶️ YouTube
- 🐙 GitHub
- 📝 Notion

### Accéder aux sites fréquents
Vos 6 sites les plus visités s'affichent automatiquement en bas

---

## ⌨️ Raccourcis clavier

| Touche | Action |
|--------|--------|
| `Cmd/Ctrl + K` | Focus sur la recherche |
| `Échap` | Fermer les résultats |
| `↑ ↓` | Naviguer dans les résultats |
| `Entrée` | Ouvrir le premier résultat |

---

## 🎨 Personnalisation rapide

### Ajouter un raccourci
Ouvrez `newtab.html` et trouvez cette section :
```html
<div class="shortcuts-grid">
    <!-- Ajoutez ici -->
</div>
```

Ajoutez :
```html
<a href="https://votre-site.com" class="shortcut-card">
    <div class="shortcut-icon">🎯</div>
    <div class="shortcut-name">Mon Site</div>
</a>
```

Rechargez l'extension (F5 sur la page des extensions)

### Changer les couleurs
Ouvrez `styles.css` et modifiez :
```css
:root {
    --primary-color: #0a0e27;      /* Fond */
    --accent-color: #6366f1;       /* Boutons */
}
```

Rechargez l'extension

---

## 🐛 Dépannage rapide

### L'extension ne s'affiche pas
```
1. Allez sur chrome://extensions/
2. Cliquez sur le bouton de rafraîchissement
3. Ouvrez un nouvel onglet
```

### Les icônes ne s'affichent pas
```
1. Vérifiez que le dossier icons/ existe
2. Rechargez l'extension
3. Videz le cache (Ctrl+Shift+Delete)
```

### Les raccourcis ne fonctionnent pas
```
1. Ouvrez la console (F12)
2. Vérifiez s'il y a des erreurs
3. Rechargez l'extension
```

---

## 📚 Documentation complète

Pour plus de détails, consultez :
- **README.md** - Vue d'ensemble
- **INSTALLATION.md** - Installation détaillée
- **CUSTOMIZATION.md** - Personnalisation avancée
- **EXAMPLES.md** - Exemples de code
- **TROUBLESHOOTING.md** - Dépannage

---

## 💡 Conseils

1. **Visitez des sites** pour que les "Sites fréquents" s'affichent
2. **Utilisez Cmd/Ctrl+K** pour une recherche rapide
3. **Personnalisez les raccourcis** selon vos besoins
4. **Rechargez l'extension** après chaque modification

---

## 🎉 Vous êtes prêt !

Votre extension Spotlight Search est maintenant installée et prête à l'emploi.

**Prochaines étapes :**
- Testez les fonctionnalités
- Personnalisez les raccourcis
- Explorez les options avancées

Bon usage ! 🚀

