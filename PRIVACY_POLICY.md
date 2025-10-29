# Politique de Confidentialité - Spotlight Search

**Dernière mise à jour : 29 octobre 2025**

## Introduction

Spotlight Search ("l'Extension") est une extension de navigateur Chrome qui remplace votre page de nouvel onglet par une interface personnalisée avec recherche intelligente et raccourcis rapides.

Cette politique de confidentialité explique quelles données sont collectées, comment elles sont utilisées, et vos droits concernant vos données personnelles.

## Engagement de confidentialité

**Nous ne collectons, ne stockons et ne transmettons AUCUNE donnée personnelle à des serveurs externes.**

Toutes les données restent stockées localement sur votre appareil et sous votre contrôle total.

## Données accédées par l'Extension

### 1. Historique de navigation

**Données accédées :**
- Liste des pages web que vous avez visitées
- Titres des pages
- URLs complètes
- Horodatage des visites

**Pourquoi nous y accédons :**
- Pour afficher vos sites récemment visités dans le panneau latéral
- Pour fournir des suggestions de recherche basées sur votre historique
- Pour créer des raccourcis vers vos sites fréquemment visités

**Où sont stockées ces données :**
- Localement sur votre appareil uniquement
- Aucune transmission à des serveurs externes
- Vous pouvez supprimer votre historique à tout moment via l'extension ou les paramètres Chrome

### 2. Sites les plus visités (Top Sites)

**Données accédées :**
- Liste de vos sites web les plus fréquemment visités

**Pourquoi nous y accédons :**
- Pour afficher des raccourcis rapides vers vos sites favoris

**Où sont stockées ces données :**
- Lecture seule depuis Chrome
- Aucun stockage supplémentaire
- Aucune transmission externe

### 3. Signets/Favoris

**Données accédées :**
- Vos signets Chrome

**Pourquoi nous y accédons :**
- Pour fournir des suggestions de recherche incluant vos signets

**Où sont stockées ces données :**
- Lecture seule depuis Chrome
- Aucun stockage supplémentaire
- Aucune transmission externe

### 4. Préférences de personnalisation

**Données stockées :**
- Thème de couleurs choisi
- Paramètres d'animation
- Opacité des éléments
- Images de fond d'écran uploadées
- Raccourcis personnalisés créés par vous

**Pourquoi nous les stockons :**
- Pour sauvegarder vos préférences de personnalisation
- Pour synchroniser vos paramètres entre vos appareils (si Chrome Sync est activé)

**Où sont stockées ces données :**
- `chrome.storage.sync` : Paramètres de thème et raccourcis (synchronisés via Chrome Sync si activé)
- `chrome.storage.local` : Images de fond d'écran (stockage local uniquement)
- Aucune transmission à nos serveurs

## Requêtes externes

L'extension effectue les requêtes externes suivantes :

### 1. API Google Suggestions
- **URL :** `https://suggestqueries.google.com`
- **Données envoyées :** Uniquement le texte que vous tapez dans la barre de recherche
- **Objectif :** Obtenir des suggestions de recherche en temps réel
- **Fournisseur :** Google LLC
- **Politique de confidentialité :** https://policies.google.com/privacy

### 2. Services d'icônes de sites web
- **DuckDuckGo Icons :** `https://icons.duckduckgo.com`
- **Google Favicons :** `https://www.google.com/s2/favicons`
- **Clearbit Logos :** `https://logo.clearbit.com`
- **Données envoyées :** Uniquement les noms de domaine des sites web (ex: "google.com")
- **Objectif :** Afficher les icônes/logos des sites web dans l'interface
- **Type de données :** Images uniquement, pas de code exécutable

**Important :** Ces services reçoivent uniquement les noms de domaine des sites que vous visitez ou recherchez, pas votre historique complet.

## Données NON collectées

Nous ne collectons, n'accédons et ne stockons PAS les données suivantes :

❌ Informations personnellement identifiables (nom, adresse, email, téléphone)  
❌ Informations de santé  
❌ Informations financières ou de paiement  
❌ Mots de passe ou informations d'authentification  
❌ Communications personnelles (emails, SMS, messages)  
❌ Localisation géographique, adresse IP ou coordonnées GPS  
❌ Contenu des pages web (texte, images, vidéos)  
❌ Données de frappe clavier en dehors de la barre de recherche  
❌ Cookies tiers  

## Utilisation des données

Les données accédées sont utilisées **uniquement** pour :

1. ✅ Afficher votre historique de navigation dans l'interface
2. ✅ Fournir des suggestions de recherche personnalisées
3. ✅ Créer des raccourcis vers vos sites favoris
4. ✅ Sauvegarder vos préférences de personnalisation

**Nous n'utilisons JAMAIS vos données pour :**

❌ Publicité ciblée  
❌ Analyse comportementale  
❌ Vente ou partage avec des tiers  
❌ Profilage utilisateur  
❌ Toute autre finalité non mentionnée ci-dessus  

## Partage de données avec des tiers

**Nous ne partageons, ne vendons et ne transmettons AUCUNE donnée à des tiers.**

Les seules données transmises sont :
- Vos requêtes de recherche à Google Suggestions (pour obtenir des suggestions)
- Les noms de domaine aux services d'icônes (pour afficher les logos)

Ces transmissions sont nécessaires au fonctionnement de l'extension et sont effectuées directement entre votre navigateur et ces services.

## Sécurité des données

### Mesures de sécurité

- ✅ Toutes les données restent stockées localement sur votre appareil
- ✅ Aucun serveur backend ou base de données externe
- ✅ Aucune collecte de données analytiques
- ✅ Code source transparent et vérifiable
- ✅ Permissions minimales requises

### Stockage Chrome

Les données stockées via `chrome.storage.sync` peuvent être synchronisées entre vos appareils si vous avez activé Chrome Sync. Cette synchronisation est gérée par Google et protégée par le chiffrement de Chrome.

Pour plus d'informations : https://support.google.com/chrome/answer/185277

## Vos droits

Vous avez un contrôle total sur vos données :

### Droit d'accès
- Toutes vos données sont visibles dans l'interface de l'extension
- Vous pouvez consulter vos raccourcis, thèmes et historique à tout moment

### Droit de suppression
- **Supprimer l'historique :** Utilisez le bouton "Effacer l'historique" dans le panneau latéral
- **Supprimer les raccourcis :** Cliquez sur le bouton ✕ sur chaque raccourci
- **Réinitialiser le thème :** Utilisez le bouton "Réinitialiser" dans le panneau de personnalisation
- **Supprimer toutes les données :** Désinstallez l'extension via `chrome://extensions/`

### Droit de portabilité
- Vous pouvez exporter votre thème via le bouton "Exporter" dans le panneau de personnalisation
- Format : JSON

### Droit d'opposition
- Vous pouvez désactiver l'extension à tout moment
- Vous pouvez révoquer les permissions dans `chrome://extensions/`

## Permissions requises

L'extension demande les permissions suivantes :

| Permission | Justification |
|------------|---------------|
| `history` | Accéder à votre historique de navigation pour l'afficher dans l'interface |
| `topSites` | Accéder à vos sites les plus visités pour créer des raccourcis |
| `bookmarks` | Accéder à vos signets pour les suggestions de recherche |
| `storage` | Sauvegarder vos préférences de personnalisation localement |
| `host_permissions` | Accéder aux API Google Suggestions et services d'icônes |

## Modifications de cette politique

Nous pouvons mettre à jour cette politique de confidentialité occasionnellement. Les modifications seront :

- Publiées sur cette page avec une nouvelle date de "Dernière mise à jour"
- Communiquées via les notes de version de l'extension
- Appliquées uniquement après votre consentement si elles affectent significativement vos droits

## Conformité légale

Cette extension est conforme aux réglementations suivantes :

- ✅ **RGPD** (Règlement Général sur la Protection des Données - UE)
- ✅ **CCPA** (California Consumer Privacy Act - USA)
- ✅ **Chrome Web Store Developer Program Policies**

## Données des mineurs

Cette extension ne collecte pas sciemment de données d'utilisateurs de moins de 13 ans. Si vous êtes parent et découvrez que votre enfant nous a fourni des données personnelles, veuillez nous contacter.

## Contact

Pour toute question concernant cette politique de confidentialité ou vos données :

**Email :** [Votre email de contact]  
**GitHub :** [Votre lien GitHub si applicable]  

**Délai de réponse :** Nous nous engageons à répondre dans les 48 heures.

## Désinstallation

Pour supprimer complètement l'extension et toutes les données associées :

1. Allez sur `chrome://extensions/`
2. Trouvez "Spotlight Search - New Tab"
3. Cliquez sur "Supprimer"
4. Confirmez la suppression

Toutes les données stockées localement seront automatiquement supprimées.

## Transparence

### Code source
Le code source de cette extension est disponible et peut être inspecté pour vérifier nos pratiques de confidentialité.

### Audits
Nous encourageons les audits de sécurité indépendants de notre code.

### Mises à jour
Toutes les mises à jour de l'extension sont soumises au processus de révision du Chrome Web Store.

## Résumé en bref

**Ce que nous faisons :**
- ✅ Accédons à votre historique pour l'afficher dans l'interface
- ✅ Stockons vos préférences localement
- ✅ Envoyons vos requêtes de recherche à Google Suggestions

**Ce que nous ne faisons PAS :**
- ❌ Collecter vos données personnelles
- ❌ Transmettre vos données à nos serveurs
- ❌ Vendre ou partager vos données
- ❌ Utiliser vos données pour de la publicité
- ❌ Tracker votre comportement

---

**En utilisant cette extension, vous acceptez cette politique de confidentialité.**

Si vous n'acceptez pas ces termes, veuillez ne pas installer ou utiliser l'extension.

---

*Cette politique de confidentialité a été créée le 29 octobre 2025 pour l'extension Spotlight Search - New Tab.*

