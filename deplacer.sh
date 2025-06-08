#!/bin/bash

# 📁 Récupération du nom du dossier cible passé en argument
DOSSIER_CIBLE="$1"

# 🚫 Vérifie qu'un dossier cible est bien fourni
if [ -z "$DOSSIER_CIBLE" ]; then
  echo "❌ Merci de spécifier un dossier cible."
  echo "Usage : ./deplacer.sh NOM_DU_DOSSIER"
  exit 1
fi

# 📁 Crée le dossier s'il n'existe pas
mkdir -p "$DOSSIER_CIBLE"

# 🔄 Boucle sur tous les fichiers/dossiers (même cachés)
for item in * .*; do
  if [[ "$item" != "$DOSSIER_CIBLE" && "$item" != "." && "$item" != ".." && "$item" != ".git" ]]; then
    git mv "$item" "$DOSSIER_CIBLE"/ 2>/dev/null
  fi
done

echo "✅ Tous les fichiers ont été déplacés dans $DOSSIER_CIBLE."
