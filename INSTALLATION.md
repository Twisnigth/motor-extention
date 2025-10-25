# Guide d'Installation - Spotlight Search

## 🚀 Installation rapide

### Pour Chrome, Edge, Brave ou Chromium

#### Étape 1 : Préparer le dossier
1. Assurez-vous que tous les fichiers sont dans le même dossier :
   - `manifest.json`
   - `newtab.html`
   - `newtab.js`
   - `styles.css`
   - `config.json`
   - Dossier `icons/`

#### Étape 2 : Ouvrir la page des extensions
1. Ouvrez votre navigateur
2. Tapez dans la barre d'adresse : `chrome://extensions/`
   - Pour Edge : `edge://extensions/`
   - Pour Brave : `brave://extensions/`

#### Étape 3 : Activer le mode développeur
1. En haut à droite, activez le **Mode de développement** (toggle)
2. Vous verrez apparaître 3 nouveaux boutons

#### Étape 4 : Charger l'extension
1. Cliquez sur **Charger l'extension non empaquetée**
2. Naviguez jusqu'au dossier contenant les fichiers de l'extension
3. Sélectionnez le dossier et cliquez sur **Ouvrir**

#### Étape 5 : Vérifier l'installation
1. Ouvrez un nouvel onglet (Ctrl+T ou Cmd+T)
2. Vous devriez voir la page Spotlight Search !

---

## 🔧 Installation pour Firefox

### Étape 1 : Ouvrir la page de débogage
1. Tapez dans la barre d'adresse : `about:debugging#/runtime/this-firefox`

### Étape 2 : Charger le module complémentaire
1. Cliquez sur **Charger un module complémentaire temporaire**
2. Sélectionnez le fichier `manifest.json` du dossier de l'extension

### Étape 3 : Tester
1. Ouvrez un nouvel onglet
2. L'extension devrait être active

**Note** : Sur Firefox, le module est temporaire et sera désactivé au redémarrage du navigateur.

---

## 🎨 Personnalisation

### Ajouter vos propres raccourcis

Modifiez le fichier `config.json` :

```json
{
  "shortcuts": [
    {
      "name": "Mon Site",
      "url": "https://monsite.com",
      "icon": "🎯"
    }
  ]
}
```

Puis mettez à jour `newtab.html` pour charger la configuration.

### Changer les couleurs

Modifiez `styles.css` :

```css
:root {
    --primary-color: #votre-couleur;
    --accent-color: #votre-accent;
}
```

### Ajouter des intégrations

Modifiez `newtab.js` pour ajouter vos propres fonctionnalités.

---

## ⌨️ Raccourcis clavier

| Raccourci | Action |
|-----------|--------|
| `Cmd/Ctrl + K` | Focus sur la barre de recherche |
| `Échap` | Fermer les résultats |
| `↑ ↓` | Naviguer dans les résultats |
| `Entrée` | Ouvrir le premier résultat |

---

## 🐛 Dépannage

### L'extension ne s'affiche pas
- Vérifiez que le mode développeur est activé
- Rechargez l'extension (bouton de rafraîchissement)
- Ouvrez un nouvel onglet

### Les icônes ne s'affichent pas
- Vérifiez que le dossier `icons/` existe
- Rechargez l'extension

### Les raccourcis ne fonctionnent pas
- Vérifiez que `newtab.js` est chargé (console F12)
- Vérifiez les permissions dans `manifest.json`

### Erreurs de console
- Ouvrez la console (F12)
- Vérifiez les messages d'erreur
- Assurez-vous que tous les fichiers sont présents

---

## 📦 Mise à jour de l'extension

1. Modifiez les fichiers
2. Allez sur `chrome://extensions/`
3. Cliquez sur le bouton de rafraîchissement de l'extension
4. Ouvrez un nouvel onglet pour voir les changements

---

## 🔐 Permissions

L'extension utilise les permissions suivantes :
- `chrome://favicon/` - Pour afficher les icônes des sites
- `history` - Pour accéder à l'historique de navigation
- `topSites` - Pour afficher les sites les plus visités

Ces permissions sont nécessaires pour les fonctionnalités principales.

---

## 💡 Conseils

- Personnalisez les raccourcis selon vos besoins
- Utilisez Cmd/Ctrl+K pour une recherche rapide
- Les sites fréquents se mettent à jour automatiquement
- Vous pouvez modifier les couleurs dans `styles.css`

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que tous les fichiers sont présents
2. Rechargez l'extension
3. Videz le cache du navigateur
4. Réinstallez l'extension si nécessaire

Bon usage ! 🎉

