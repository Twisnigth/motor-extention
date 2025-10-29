# 📋 Réponses pour le Chrome Web Store

## 🔗 Lien de la Politique de Confidentialité

Une fois publiée sur GitHub Pages :

```
https://twisnigth.github.io/motor-extention/privacy-policy.html
```

---

## ❓ Question : Utilisez-vous du code hébergé à distance ?

**Réponse : NON**

**Justification (si demandée) :**
```
Cette extension n'utilise aucun code distant exécutable. Toutes les fonctionnalités 
sont contenues dans les fichiers de l'extension (newtab.js, background.js, styles.css).

Les seules requêtes externes sont :
1. API Google Suggestions (https://suggestqueries.google.com) - récupération de 
   données JSON uniquement pour les suggestions de recherche
2. Services d'icônes (DuckDuckGo, Google Favicons, Clearbit) - chargement d'images 
   uniquement pour afficher les logos des sites web

Aucun script externe n'est chargé ou exécuté. Aucune utilisation de eval(), 
new Function(), ou injection de scripts externes.
```

---

## 📊 Déclaration des données collectées

### ✅ Catégorie 1 : Historique Web

**Cette catégorie doit être cochée : OUI**

#### Comment les données sont-elles collectées ?
```
Lecture via l'API Chrome (chrome.history)
```

#### Comment les données sont-elles utilisées ?
```
L'extension accède à l'historique de navigation de l'utilisateur uniquement pour 
l'afficher dans un panneau latéral et fournir des suggestions de recherche 
personnalisées basées sur les sites précédemment visités. Les données sont 
traitées localement pour grouper les visites par domaine et afficher les sites 
les plus récents.
```

#### Les données sont-elles transmises hors de l'appareil de l'utilisateur ?
**Réponse : Non**

**Explication :**
```
Toutes les données d'historique restent stockées localement sur l'appareil de 
l'utilisateur. Aucune donnée d'historique n'est transmise à des serveurs externes.
```

#### Les données sont-elles utilisées à des fins autres que la fonctionnalité principale de l'extension ?
**Réponse : Non**

**Explication :**
```
Les données d'historique sont utilisées uniquement pour afficher l'historique de 
navigation dans l'interface de l'extension et fournir des suggestions de recherche. 
Aucune autre utilisation (publicité, analyse, profilage, etc.).
```

#### Les données sont-elles vendues ?
**Réponse : Non**

---

### ✅ Catégorie 2 : Activité de l'utilisateur

**Cette catégorie doit être cochée : OUI**

#### Comment les données sont-elles collectées ?
```
Lecture via les APIs Chrome (chrome.topSites et chrome.bookmarks)
```

#### Comment les données sont-elles utilisées ?
```
L'extension accède aux sites les plus visités (Top Sites) et aux signets de 
l'utilisateur pour créer des raccourcis rapides dans l'interface et fournir des 
suggestions de recherche pertinentes. Les données sont lues uniquement depuis 
Chrome et affichées dans l'interface.
```

#### Les données sont-elles transmises hors de l'appareil de l'utilisateur ?
**Réponse : Non**

**Explication :**
```
Les données des sites fréquents et signets sont lues uniquement depuis Chrome et 
affichées localement. Aucune transmission à des serveurs externes.
```

#### Les données sont-elles utilisées à des fins autres que la fonctionnalité principale de l'extension ?
**Réponse : Non**

**Explication :**
```
Ces données sont utilisées uniquement pour afficher des raccourcis vers les sites 
favoris de l'utilisateur et améliorer les suggestions de recherche. Aucune autre 
utilisation.
```

#### Les données sont-elles vendues ?
**Réponse : Non**

---

## ❌ Catégories à NE PAS cocher

Les catégories suivantes ne doivent PAS être cochées :

- ❌ Informations permettant d'identifier personnellement l'utilisateur
- ❌ Information sur la santé
- ❌ Informations financières et de paiement
- ❌ Informations d'authentification
- ❌ Communications personnelles
- ❌ Localisation
- ❌ Contenu du site Web

---

## 🔐 Certification de confidentialité

### Question : Certifiez-vous que votre extension respecte les règles de confidentialité ?

**Réponse : OUI**

**Déclarations à cocher :**
- ✅ Je certifie que mon extension respecte les règles de confidentialité
- ✅ Je certifie que les informations fournies sont exactes et complètes
- ✅ Je certifie que ma politique de confidentialité est accessible publiquement

---

## 📝 Permissions justifiées

### Permission : `history`
**Justification :**
```
Nécessaire pour accéder à l'historique de navigation de l'utilisateur et l'afficher 
dans le panneau latéral de l'extension. Permet également de fournir des suggestions 
de recherche basées sur les sites précédemment visités.
```

### Permission : `topSites`
**Justification :**
```
Nécessaire pour accéder aux sites les plus visités de l'utilisateur et créer des 
raccourcis rapides vers ces sites dans l'interface de la nouvelle page d'onglet.
```

### Permission : `bookmarks`
**Justification :**
```
Nécessaire pour accéder aux signets de l'utilisateur et les inclure dans les 
suggestions de recherche, permettant un accès rapide aux sites favoris.
```

### Permission : `storage`
**Justification :**
```
Nécessaire pour sauvegarder les préférences de personnalisation de l'utilisateur 
(thème, couleurs, raccourcis personnalisés, paramètres d'animation) localement 
et les synchroniser entre les appareils via Chrome Sync.
```

### Host Permissions : `https://suggestqueries.google.com/*`
**Justification :**
```
Nécessaire pour récupérer les suggestions de recherche Google en temps réel 
lorsque l'utilisateur tape dans la barre de recherche.
```

### Host Permissions : `https://*.google.com/*`
**Justification :**
```
Nécessaire pour accéder aux services Google (favicons, suggestions) et permettre 
la redirection vers la recherche Google.
```

### Host Permissions : `https://logo.clearbit.com/*`
**Justification :**
```
Nécessaire pour récupérer les logos des sites web et les afficher comme icônes 
des raccourcis dans l'interface.
```

---

## 📸 Captures d'écran recommandées

Pour le Chrome Web Store, préparez 3-5 captures d'écran montrant :

1. **Interface principale** - La page d'accueil avec les raccourcis
2. **Recherche en action** - La barre de recherche avec suggestions
3. **Panneau d'historique** - Le panneau latéral avec l'historique
4. **Personnalisation** - Le panneau de personnalisation des thèmes
5. **Raccourcis personnalisés** - L'ajout d'un raccourci personnalisé

**Dimensions recommandées :** 1280x800 ou 640x400

---

## 📄 Description pour le Chrome Web Store

### Titre (max 45 caractères)
```
Spotlight Search - New Tab
```

### Description courte (max 132 caractères)
```
Une belle page de nouvel onglet avec recherche intelligente, raccourcis personnalisables et thèmes élégants.
```

### Description détaillée

```
🚀 Spotlight Search - Transformez votre page de nouvel onglet

Remplacez votre page de nouvel onglet Chrome par une interface élégante et 
fonctionnelle inspirée de Spotlight macOS.

✨ FONCTIONNALITÉS PRINCIPALES

🔍 Recherche Intelligente
• Suggestions Google en temps réel
• Recherche dans votre historique
• Recherche dans vos signets
• Accès direct aux sites populaires

⚡ Raccourcis Rapides
• Sites les plus visités automatiquement
• Raccourcis personnalisables
• Icônes de haute qualité
• Accès en un clic

📚 Historique Organisé
• Panneau latéral avec votre historique
• Groupé par domaine
• Recherche rapide
• Suppression facile

🎨 Personnalisation Complète
• Thèmes prédéfinis (Sombre, Clair, Océan, Coucher de soleil)
• Couleurs personnalisables
• Fond d'écran personnalisé ou diaporama
• Animations fluides
• Transparence ajustable

🔒 CONFIDENTIALITÉ

• Toutes les données restent sur votre appareil
• Aucune collecte de données personnelles
• Aucun serveur externe
• Code source transparent
• Politique de confidentialité complète

⚙️ CARACTÉRISTIQUES TECHNIQUES

• Interface moderne et réactive
• Animations fluides
• Raccourcis clavier (Cmd/Ctrl + K pour rechercher)
• Synchronisation Chrome (optionnelle)
• Léger et rapide

🌟 POURQUOI SPOTLIGHT SEARCH ?

• Design élégant et professionnel
• Productivité améliorée
• Respect de votre vie privée
• Gratuit et sans publicité
• Mises à jour régulières

📝 PERMISSIONS

L'extension demande les permissions suivantes :
• Historique : Pour afficher vos sites récents
• Sites fréquents : Pour créer des raccourcis
• Signets : Pour les suggestions de recherche
• Stockage : Pour sauvegarder vos préférences

Toutes les données restent locales. Consultez notre politique de confidentialité 
pour plus de détails.

💬 SUPPORT

Des questions ? Contactez-nous à [votre email]
Politique de confidentialité : https://twisnigth.github.io/motor-extention/privacy-policy.html

Profitez d'une nouvelle expérience de navigation ! 🎉
```

---

## 🏷️ Catégorie

**Catégorie recommandée :** Productivité

**Tags suggérés :**
- new tab
- search
- productivity
- shortcuts
- bookmarks
- history
- customization
- themes

---

## ✅ Checklist finale avant soumission

- [ ] Politique de confidentialité publiée en ligne
- [ ] Lien de la politique testé et fonctionnel
- [ ] Email de contact ajouté dans la politique
- [ ] Toutes les réponses préparées ci-dessus
- [ ] Captures d'écran prêtes (3-5 images)
- [ ] Icônes de l'extension (16x16, 48x48, 128x128) ✅ Déjà présentes
- [ ] Description rédigée
- [ ] Fichier ZIP de l'extension créé
- [ ] Version testée dans Chrome

---

## 📦 Créer le fichier ZIP pour soumission

**Fichiers à inclure :**
```
motor-extention/
├── manifest.json
├── background.js
├── newtab.html
├── newtab.js
├── styles.css
├── config.json
└── icons/
    ├── icon-16.svg
    ├── icon-48.svg
    └── icon-128.svg
```

**Fichiers à EXCLURE :**
```
❌ .git/
❌ node_modules/
❌ *.md (README, PRIVACY_POLICY, etc.)
❌ docs/
❌ test*.html
```

**Commande pour créer le ZIP :**
```bash
zip -r spotlight-search-v1.0.0.zip \
  manifest.json \
  background.js \
  newtab.html \
  newtab.js \
  styles.css \
  config.json \
  icons/
```

---

**Vous êtes prêt pour soumettre au Chrome Web Store ! 🚀**

