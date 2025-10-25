# Spotlight Search - Extension de Navigateur

Une belle extension de navigateur qui remplace la page de nouvel onglet par une interface élégante inspirée par Spotlight d'Apple, avec des animations fluides et des raccourcis pratiques.

## Fonctionnalités

✨ **Interface Spotlight** - Design moderne avec animations fluides
🔍 **Barre de recherche intelligente** - Recherche dans l'historique et suggestions
🚀 **Raccourcis rapides** - Accès rapide à Google, Gemini, Gmail, YouTube, GitHub, Notion
📊 **Sites fréquents** - Affichage automatique de vos sites les plus visités
⌨️ **Raccourcis clavier** - Cmd/Ctrl+K pour la recherche, Échap pour fermer

## Installation

### Pour Chrome/Edge/Brave

1. **Cloner ou télécharger** ce dossier
2. Ouvrir `chrome://extensions/` (ou `edge://extensions/` pour Edge)
3. Activer le **Mode de développement** (coin supérieur droit)
4. Cliquer sur **Charger l'extension non empaquetée**
5. Sélectionner le dossier de l'extension
6. Ouvrir un nouvel onglet pour voir l'extension en action !

### Pour Firefox

1. Ouvrir `about:debugging#/runtime/this-firefox`
2. Cliquer sur **Charger un module complémentaire temporaire**
3. Sélectionner le fichier `manifest.json`

## Structure des fichiers

```
├── manifest.json       # Configuration de l'extension
├── newtab.html        # Page HTML du nouvel onglet
├── newtab.js          # Logique JavaScript
├── styles.css         # Styles et animations
├── icons/             # Dossier pour les icônes (optionnel)
└── README.md          # Ce fichier
```

## Personnalisation

### Ajouter des raccourcis

Modifiez la section `shortcuts-grid` dans `newtab.html` :

```html
<a href="https://votre-site.com" class="shortcut-card" data-name="Mon Site">
    <div class="shortcut-icon">🎯</div>
    <div class="shortcut-name">Mon Site</div>
</a>
```

### Changer les couleurs

Modifiez les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #0a0e27;
    --accent-color: #6366f1;
    /* ... */
}
```

### Ajouter des intégrations

Vous pouvez ajouter des intégrations personnalisées dans `newtab.js`. Par exemple, pour Gmail :

```javascript
// Ajouter un bouton pour composer un email
const gmailButton = document.createElement('button');
gmailButton.textContent = 'Composer';
gmailButton.onclick = () => window.location.href = 'https://mail.google.com/mail/u/0/#compose';
```

## Raccourcis clavier

| Raccourci | Action |
|-----------|--------|
| `Cmd/Ctrl + K` | Focus sur la barre de recherche |
| `Échap` | Fermer les résultats |
| `↑ ↓` | Naviguer dans les résultats |
| `Entrée` | Ouvrir le premier résultat |

## Permissions utilisées

- `chrome://favicon/` - Afficher les favicons des sites
- `history` - Accéder à l'historique de navigation
- `topSites` - Afficher les sites les plus visités

## Améliorations futures

- [ ] Thème sombre/clair personnalisable
- [ ] Synchronisation des raccourcis entre appareils
- [ ] Intégration avec les notes/tâches
- [ ] Widgets personnalisables
- [ ] Support des extensions tiers

## Licence

MIT - Libre d'utilisation et de modification

## Support

Pour toute question ou suggestion, n'hésitez pas à créer une issue !

