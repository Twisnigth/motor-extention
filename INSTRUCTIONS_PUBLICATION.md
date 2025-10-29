# 🚀 Instructions pour publier votre Politique de Confidentialité

## ✅ Fichiers créés

J'ai créé tous les fichiers nécessaires pour votre politique de confidentialité :

- ✅ `PRIVACY_POLICY.md` - Version Markdown
- ✅ `privacy-policy.html` - Version HTML complète
- ✅ `docs/index.html` - Page d'accueil avec redirection
- ✅ `docs/privacy-policy.html` - Copie de la politique dans le dossier docs

## 🌐 ÉTAPE 1 : Publier sur GitHub Pages

Votre repository GitHub existe déjà : `https://github.com/Twisnigth/motor-extention`

### Commandes à exécuter :

```bash
# 1. Ajouter les fichiers au git
git add docs/ PRIVACY_POLICY.md privacy-policy.html PRIVACY_POLICY_SETUP.md

# 2. Créer un commit
git commit -m "Add privacy policy for Chrome Web Store"

# 3. Pousser vers GitHub
git push origin main
```

### Ensuite sur GitHub :

1. Allez sur https://github.com/Twisnigth/motor-extention
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez :
   - **Branch:** `main`
   - **Folder:** `/docs`
5. Cliquez sur **Save**
6. Attendez 1-2 minutes

## 🔗 VOTRE LIEN SERA :

```
https://twisnigth.github.io/motor-extention/privacy-policy.html
```

OU simplement :

```
https://twisnigth.github.io/motor-extention/
```

(redirigera automatiquement vers la politique)

---

## 📝 ÉTAPE 2 : Modifier votre email de contact

**IMPORTANT** : Avant de pousser, vous devez ajouter votre email !

### Dans `docs/privacy-policy.html` :

Cherchez la ligne ~280 :
```html
<p><strong>Email :</strong> [Votre email de contact]</p>
```

Remplacez par :
```html
<p><strong>Email :</strong> votre.email@example.com</p>
```

### Dans `PRIVACY_POLICY.md` :

Cherchez la ligne ~220 :
```
**Email :** [Votre email de contact]
```

Remplacez par :
```
**Email :** votre.email@example.com
```

---

## 📋 ÉTAPE 3 : Remplir le formulaire Chrome Web Store

Une fois votre politique publiée (après avoir fait les commandes git ci-dessus) :

### 1. Privacy Policy URL

Dans le formulaire Chrome Web Store, collez :

```
https://twisnigth.github.io/motor-extention/privacy-policy.html
```

### 2. Déclaration des données

Cochez UNIQUEMENT ces 2 catégories :

#### ✅ Historique Web

**Comment les données sont-elles utilisées ?**
```
L'extension accède à l'historique de navigation de l'utilisateur uniquement pour 
l'afficher dans un panneau latéral et fournir des suggestions de recherche 
personnalisées. Toutes les données restent stockées localement sur l'appareil 
de l'utilisateur. Aucune donnée n'est transmise à des serveurs externes.
```

**Les données sont-elles transmises hors de l'appareil ?**
```
Non
```

**Les données sont-elles utilisées à des fins autres que la fonctionnalité principale ?**
```
Non
```

**Les données sont-elles vendues ?**
```
Non
```

#### ✅ Activité de l'utilisateur

**Comment les données sont-elles utilisées ?**
```
L'extension accède aux sites les plus visités et aux signets de l'utilisateur 
pour créer des raccourcis rapides dans l'interface. Les données sont lues 
uniquement depuis Chrome et ne sont jamais transmises à des serveurs externes.
```

**Les données sont-elles transmises hors de l'appareil ?**
```
Non
```

**Les données sont-elles utilisées à des fins autres que la fonctionnalité principale ?**
```
Non
```

**Les données sont-elles vendues ?**
```
Non
```

---

## ✅ Checklist complète

Avant de soumettre au Chrome Web Store :

- [ ] Email de contact ajouté dans `docs/privacy-policy.html`
- [ ] Email de contact ajouté dans `PRIVACY_POLICY.md`
- [ ] Fichiers ajoutés au git (`git add`)
- [ ] Commit créé (`git commit`)
- [ ] Poussé vers GitHub (`git push`)
- [ ] GitHub Pages activé dans Settings > Pages
- [ ] Lien testé : https://twisnigth.github.io/motor-extention/privacy-policy.html
- [ ] Lien ajouté dans le formulaire Chrome Web Store
- [ ] Déclarations "Historique Web" complétées
- [ ] Déclarations "Activité de l'utilisateur" complétées

---

## 🎯 Résumé rapide (TL;DR)

1. **Ajoutez votre email** dans les fichiers de politique
2. **Exécutez ces commandes** :
   ```bash
   git add docs/ PRIVACY_POLICY.md privacy-policy.html PRIVACY_POLICY_SETUP.md
   git commit -m "Add privacy policy"
   git push origin main
   ```
3. **Activez GitHub Pages** : Settings > Pages > Source: main > Folder: /docs
4. **Utilisez ce lien** : `https://twisnigth.github.io/motor-extention/privacy-policy.html`
5. **Cochez 2 catégories** : Historique Web + Activité utilisateur
6. **Répondez "Non"** à toutes les questions sur transmission/vente

---

## ❓ Questions ?

Si quelque chose ne fonctionne pas :

1. Vérifiez que GitHub Pages est bien activé
2. Attendez 2-3 minutes après l'activation
3. Testez le lien dans un navigateur privé
4. Vérifiez que le dossier `docs/` contient bien les fichiers HTML

---

**Vous êtes prêt ! 🚀**

Bonne chance avec votre soumission au Chrome Web Store !

