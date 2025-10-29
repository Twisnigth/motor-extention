# 🔒 Configuration de la Politique de Confidentialité

## 📁 Fichiers créés

J'ai créé deux versions de votre politique de confidentialité :

1. **PRIVACY_POLICY.md** - Version Markdown (pour GitHub)
2. **privacy-policy.html** - Version HTML (pour hébergement web)

## 🌐 Options pour publier votre politique en ligne

### Option 1 : GitHub Pages (RECOMMANDÉ - GRATUIT)

C'est la méthode la plus simple et gratuite !

#### Étapes :

1. **Créer un repository GitHub** (si vous n'en avez pas déjà un)
   ```bash
   # Dans votre terminal
   cd /Users/enzocorthier/motor-extention
   git init
   git add privacy-policy.html
   git commit -m "Add privacy policy"
   ```

2. **Créer un repository sur GitHub**
   - Allez sur https://github.com/new
   - Nommez-le `spotlight-search-privacy` (ou autre nom)
   - Ne cochez PAS "Initialize with README"
   - Cliquez "Create repository"

3. **Pousser votre code**
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/spotlight-search-privacy.git
   git branch -M main
   git push -u origin main
   ```

4. **Activer GitHub Pages**
   - Allez dans Settings > Pages
   - Source : "Deploy from a branch"
   - Branch : "main" / folder: "/ (root)"
   - Cliquez "Save"

5. **Votre lien sera :**
   ```
   https://VOTRE-USERNAME.github.io/spotlight-search-privacy/privacy-policy.html
   ```

**Temps estimé : 5 minutes**

---

### Option 2 : Netlify Drop (TRÈS SIMPLE - GRATUIT)

1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le fichier `privacy-policy.html`
3. Netlify vous donnera un lien instantané comme :
   ```
   https://random-name-123456.netlify.app/privacy-policy.html
   ```

**Temps estimé : 1 minute**

---

### Option 3 : Vercel (GRATUIT)

1. Installez Vercel CLI :
   ```bash
   npm install -g vercel
   ```

2. Déployez :
   ```bash
   cd /Users/enzocorthier/motor-extention
   vercel --prod
   ```

3. Suivez les instructions
4. Votre lien sera : `https://votre-projet.vercel.app/privacy-policy.html`

**Temps estimé : 3 minutes**

---

### Option 4 : Hébergement web classique

Si vous avez déjà un site web ou un hébergement :

1. Uploadez `privacy-policy.html` via FTP
2. Accédez via : `https://votre-site.com/privacy-policy.html`

---

## ✏️ Personnalisation requise

Avant de publier, vous DEVEZ modifier ces éléments dans les fichiers :

### Dans `privacy-policy.html` et `PRIVACY_POLICY.md` :

Cherchez et remplacez :

1. **Email de contact** (ligne ~280 dans HTML, ligne ~220 dans MD)
   ```
   [Votre email de contact]
   ```
   Remplacez par votre vrai email, par exemple :
   ```
   contact@votresite.com
   ```

2. **Lien GitHub** (optionnel)
   Si vous voulez ajouter un lien vers votre code source

---

## 📋 Pour le Chrome Web Store

Une fois votre politique publiée en ligne :

### 1. Dans le formulaire de soumission Chrome Web Store

**Question : "Privacy Policy URL"**
```
https://VOTRE-LIEN-ICI/privacy-policy.html
```

### 2. Déclaration des données

Cochez ces catégories :

✅ **Historique Web**
- **Utilisation :** Affichage dans l'interface de l'extension
- **Transmission :** Non
- **Vente :** Non

✅ **Activité de l'utilisateur**
- **Utilisation :** Affichage des sites fréquents et signets
- **Transmission :** Non
- **Vente :** Non

### 3. Justification pour chaque catégorie

**Historique Web :**
```
L'extension accède à l'historique de navigation de l'utilisateur uniquement pour l'afficher 
dans un panneau latéral et fournir des suggestions de recherche personnalisées. 
Toutes les données restent stockées localement sur l'appareil de l'utilisateur. 
Aucune donnée n'est transmise à des serveurs externes.

Politique de confidentialité : https://VOTRE-LIEN/privacy-policy.html
```

**Activité de l'utilisateur :**
```
L'extension accède aux sites les plus visités et aux signets de l'utilisateur pour créer 
des raccourcis rapides dans l'interface. Les données sont lues uniquement depuis Chrome 
et ne sont jamais transmises à des serveurs externes.

Politique de confidentialité : https://VOTRE-LIEN/privacy-policy.html
```

---

## 🚀 Méthode rapide recommandée

Si vous voulez le faire MAINTENANT en 2 minutes :

### Utiliser Netlify Drop

1. Ouvrez https://app.netlify.com/drop dans votre navigateur
2. Glissez-déposez le fichier `privacy-policy.html`
3. Copiez le lien généré (ex: `https://abc123.netlify.app/privacy-policy.html`)
4. Collez ce lien dans le formulaire Chrome Web Store

**C'est tout ! ✅**

---

## 📝 Checklist avant soumission

- [ ] Politique de confidentialité publiée en ligne
- [ ] Email de contact ajouté dans la politique
- [ ] Lien testé et accessible
- [ ] Lien ajouté dans le formulaire Chrome Web Store
- [ ] Déclarations de données complétées
- [ ] Justifications rédigées

---

## 🔄 Mises à jour futures

Si vous modifiez votre extension et changez la façon dont vous utilisez les données :

1. Mettez à jour `privacy-policy.html`
2. Changez la date "Dernière mise à jour"
3. Re-uploadez le fichier
4. Informez les utilisateurs via les notes de version

---

## ❓ Questions fréquentes

**Q : Dois-je vraiment avoir une politique de confidentialité ?**
R : OUI, c'est obligatoire pour le Chrome Web Store si vous accédez à l'historique, signets ou autres données utilisateur.

**Q : Puis-je utiliser un lien GitHub direct vers le fichier .md ?**
R : Oui, mais le fichier HTML est plus professionnel et mieux formaté.

**Q : Que se passe-t-il si je ne mets pas de politique ?**
R : Votre extension sera rejetée par le Chrome Web Store.

**Q : Dois-je payer pour héberger la politique ?**
R : Non ! Toutes les options gratuites listées ci-dessus fonctionnent parfaitement.

---

## 📞 Besoin d'aide ?

Si vous avez des questions sur la publication de votre politique de confidentialité, 
n'hésitez pas à demander !

---

**Bonne chance avec votre soumission au Chrome Web Store ! 🚀**

