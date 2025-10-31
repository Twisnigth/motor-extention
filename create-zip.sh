#!/bin/bash

# Script pour créer le fichier ZIP de l'extension pour Chrome Web Store

echo "🚀 Création du fichier ZIP pour Chrome Web Store..."

# Nom du fichier ZIP
ZIP_NAME="spotlight-search-v1.0.1.zip"

# Supprimer l'ancien ZIP s'il existe
if [ -f "$ZIP_NAME" ]; then
    echo "🗑️  Suppression de l'ancien ZIP..."
    rm "$ZIP_NAME"
fi

# Créer le nouveau ZIP avec uniquement les fichiers nécessaires
echo "📦 Création du nouveau ZIP..."
zip -r "$ZIP_NAME" \
  manifest.json \
  background.js \
  newtab.html \
  newtab.js \
  styles.css \
  config.json \
  icons/ \
  -x "*.DS_Store" \
  -x "__MACOSX/*"

# Vérifier que le ZIP a été créé
if [ -f "$ZIP_NAME" ]; then
    echo "✅ ZIP créé avec succès : $ZIP_NAME"
    echo ""
    echo "📊 Contenu du ZIP :"
    unzip -l "$ZIP_NAME"
    echo ""
    echo "📏 Taille du fichier : $(du -h "$ZIP_NAME" | cut -f1)"
    echo ""
    echo "🎯 Prochaines étapes :"
    echo "1. Testez l'extension en local (chrome://extensions/)"
    echo "2. Allez sur https://chrome.google.com/webstore/devconsole"
    echo "3. Uploadez le fichier $ZIP_NAME"
    echo "4. Ajoutez le message pour les réviseurs (voir REPONSE_CHROME_WEB_STORE.md)"
    echo "5. Soumettez pour révision"
    echo ""
    echo "✨ Bonne chance !"
else
    echo "❌ Erreur lors de la création du ZIP"
    exit 1
fi

