# 🔧 Guide de dépannage - Spotlight Search

## ❌ Problèmes courants et solutions

### 1. L'extension ne s'affiche pas sur les nouveaux onglets

**Symptômes :**
- Ouvrir un nouvel onglet affiche la page par défaut du navigateur

**Solutions :**
1. Vérifiez que le mode développeur est activé
   - Allez sur `chrome://extensions/`
   - Activez le toggle "Mode de développement" en haut à droite

2. Rechargez l'extension
   - Cliquez sur le bouton de rafraîchissement (🔄) sur la carte de l'extension

3. Vérifiez le manifest.json
   ```json
   "chrome_url_overrides": {
     "newtab": "newtab.html"
   }
   ```

4. Réinstallez l'extension
   - Supprimez l'extension
   - Rechargez-la

---

### 2. Les icônes ne s'affichent pas

**Symptômes :**
- Les raccourcis et sites fréquents n'ont pas d'icônes
- Les favicons ne se chargent pas

**Solutions :**
1. Vérifiez que le dossier `icons/` existe
   ```
   icons/
   ├── icon-16.svg
   ├── icon-48.svg
   └── icon-128.svg
   ```

2. Vérifiez les chemins dans manifest.json
   ```json
   "icons": {
     "16": "icons/icon-16.svg",
     "48": "icons/icon-48.svg",
     "128": "icons/icon-128.svg"
   }
   ```

3. Rechargez l'extension

4. Videz le cache du navigateur
   - Ctrl+Shift+Delete (ou Cmd+Shift+Delete sur Mac)

---

### 3. La barre de recherche ne fonctionne pas

**Symptômes :**
- Impossible de taper dans la barre de recherche
- Les résultats ne s'affichent pas

**Solutions :**
1. Ouvrez la console (F12)
   - Vérifiez s'il y a des erreurs JavaScript

2. Vérifiez que `newtab.js` est chargé
   - Allez sur `chrome://extensions/`
   - Cliquez sur "Détails" de l'extension
   - Vérifiez les erreurs

3. Vérifiez les permissions dans manifest.json
   ```json
   "permissions": [
     "chrome://favicon/",
     "history",
     "topSites"
   ]
   ```

4. Rechargez l'extension

---

### 4. Les raccourcis clavier ne fonctionnent pas

**Symptômes :**
- Cmd/Ctrl+K ne focus pas la barre de recherche
- Les flèches ne naviguent pas dans les résultats

**Solutions :**
1. Vérifiez que `newtab.js` contient `setupKeyboardShortcuts()`

2. Ouvrez la console et testez
   ```javascript
   // Testez si l'événement est déclenché
   document.addEventListener('keydown', (e) => {
       console.log('Touche pressée:', e.key);
   });
   ```

3. Vérifiez que le focus est sur la page
   - Cliquez sur la page avant de tester

4. Rechargez l'extension

---

### 5. Les sites fréquents ne s'affichent pas

**Symptômes :**
- La section "Sites fréquents" est vide
- Aucun site n'est affiché

**Solutions :**
1. Vérifiez que vous avez visité des sites
   - Visitez quelques sites web
   - Attendez quelques secondes

2. Vérifiez la permission `topSites` dans manifest.json
   ```json
   "permissions": ["topSites"]
   ```

3. Ouvrez la console et testez
   ```javascript
   chrome.topSites.get((sites) => {
       console.log('Sites fréquents:', sites);
   });
   ```

4. Rechargez l'extension

---

### 6. Les animations sont saccadées

**Symptômes :**
- Les animations ne sont pas fluides
- La page saccade lors du scroll

**Solutions :**
1. Vérifiez les performances
   - Ouvrez DevTools (F12)
   - Allez sur l'onglet "Performance"
   - Enregistrez une session

2. Réduisez la complexité des animations
   - Modifiez `styles.css`
   - Réduisez les valeurs de `blur()` et `shadow`

3. Désactivez les animations
   ```css
   * {
       animation: none !important;
       transition: none !important;
   }
   ```

4. Vérifiez votre GPU
   - Certains navigateurs utilisent le GPU pour les animations

---

### 7. Les résultats de recherche ne s'affichent pas

**Symptômes :**
- Impossible de voir les résultats de recherche
- La liste des résultats est vide

**Solutions :**
1. Vérifiez la permission `history` dans manifest.json
   ```json
   "permissions": ["history"]
   ```

2. Ouvrez la console et testez
   ```javascript
   chrome.history.search({ text: 'test', maxResults: 5 }, (results) => {
       console.log('Résultats:', results);
   });
   ```

3. Vérifiez que vous avez de l'historique
   - Visitez quelques sites
   - Attendez quelques secondes

4. Rechargez l'extension

---

### 8. L'extension ralentit le navigateur

**Symptômes :**
- Le navigateur est lent
- Les onglets se chargent lentement

**Solutions :**
1. Vérifiez les ressources utilisées
   - Ouvrez DevTools (F12)
   - Allez sur l'onglet "Performance"

2. Optimisez le code
   - Supprimez les boucles infinies
   - Utilisez `debounce` pour les événements fréquents

3. Réduisez les animations
   - Modifiez `styles.css`
   - Réduisez la durée des animations

4. Désactivez les fonctionnalités inutiles
   - Modifiez `config.json`

---

### 9. Erreur : "Impossible de charger l'extension"

**Symptômes :**
- Message d'erreur lors du chargement
- L'extension ne s'installe pas

**Solutions :**
1. Vérifiez le manifest.json
   - Assurez-vous que le JSON est valide
   - Utilisez un validateur JSON

2. Vérifiez les chemins des fichiers
   - Tous les fichiers doivent être dans le même dossier
   - Les chemins doivent être relatifs

3. Vérifiez les permissions
   - Utilisez uniquement les permissions valides

4. Réinstallez l'extension
   - Supprimez-la
   - Rechargez-la

---

### 10. Les données ne sont pas sauvegardées

**Symptômes :**
- Les raccourcis personnalisés disparaissent
- Les préférences ne sont pas conservées

**Solutions :**
1. Vérifiez la permission `storage` dans manifest.json
   ```json
   "permissions": ["storage"]
   ```

2. Testez le stockage
   ```javascript
   chrome.storage.local.set({ test: 'data' });
   chrome.storage.local.get('test', (result) => {
       console.log('Données:', result);
   });
   ```

3. Vérifiez que vous utilisez `chrome.storage.local`
   - Ne pas utiliser `localStorage` (limité)

4. Videz le cache
   - Ctrl+Shift+Delete

---

## 🔍 Outils de débogage

### Console du navigateur
```javascript
// Ouvrir la console
F12 ou Cmd+Option+I

// Tester les APIs
chrome.topSites.get(console.log);
chrome.history.search({ text: 'test' }, console.log);
chrome.storage.local.get(null, console.log);
```

### DevTools
- **Elements** : Inspecter le HTML/CSS
- **Console** : Voir les erreurs JavaScript
- **Network** : Vérifier les requêtes
- **Performance** : Analyser les performances
- **Storage** : Voir les données sauvegardées

### Logs personnalisés
```javascript
console.log('Info:', data);
console.warn('Attention:', data);
console.error('Erreur:', data);
```

---

## 📞 Obtenir de l'aide

### Vérifier les erreurs
1. Ouvrez DevTools (F12)
2. Allez sur l'onglet "Console"
3. Notez les messages d'erreur
4. Recherchez la solution ci-dessus

### Réinitialiser l'extension
1. Allez sur `chrome://extensions/`
2. Cliquez sur "Supprimer"
3. Rechargez l'extension

### Contacter le support
- Consultez le fichier README.md
- Vérifiez les fichiers de documentation

---

## ✅ Checklist de dépannage

- [ ] Mode développeur activé
- [ ] Tous les fichiers présents
- [ ] manifest.json valide
- [ ] Permissions correctes
- [ ] Extension rechargée
- [ ] Cache vidé
- [ ] Console vérifiée
- [ ] Historique présent
- [ ] Sites visités
- [ ] Pas d'erreurs JavaScript

Bon dépannage ! 🚀

