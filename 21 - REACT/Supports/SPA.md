## SPA (Single-Page Application)

Une application monopage est une application web qui ne recharge qu'une seule page HTML tout au long de la navigation

L'expérience utilisateur ressemble à une application native: les interactions changent l'interface et l'URL sans rechargement complet du document.

## Caractéristiques clés

- **Un seul fichier HTML de base** (souvent index.html)
- **Chargement initial:** le navigateur télécharge le bundle JS/CSS -> l'App va prendre le contrôle du DOM.
- **Navigation côté client** Le routage manipule l'URL et affiche le bon composant, sans nouvel aller-retour complet au serveur.
- **Expérience fluide**: pas de flash blanc ni rechargement
- **Communication avec le serveur** via API (REST, GraphQL, WebSocket...) mais les données sont injectées dans la page existante.

## Avantages
- UX fluide
- Séparation front/back
- Réutilisable

## Inconvénients
- Performance au premier chargement: gros bundle initial à télécharger
- SEO compliqué (car la page est vide avant que JS s'exécute) -> d'où l'intérêt des frameworks SSR (Next.js)
- Sécurité: tout le JS est exposé au client, donc attention aux règles d'auth/permissions.