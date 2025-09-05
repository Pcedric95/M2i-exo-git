# TP4 : Liste de tâches avec React et `useReducer`

## Description
Ce projet est une application de **liste de tâches (To-Do List)** développée avec **React** et le hook `useReducer`. Elle permet d’ajouter, marquer comme terminée, et supprimer des tâches, avec une interface stylisée et des animations fluides.

**Fonctionnalités :**
- Ajout de tâches.
- Basculer le statut "terminé" d’une tâche.
- Suppression de tâches.
- Animations CSS pour l’ajout des tâches.
- Design moderne avec une card et des effets visuels.

---

## Technologies utilisées
- **React** (Création de l’interface et gestion de l’état).
- **`useReducer`** (Gestion centralisée de l’état des tâches).
- **`useState`** (Gestion du champ de saisie).
- **CSS** (Stylisation et animations).
- **JavaScript ES6+** (Logique et manipulations de données).

---

## Prérequis
- npm

---

## Installer les dépendances
```npm install```


## Lancer l’application
```npm run dev```
---



## Structure du projet
```
src/
├── components/
│   ├── TodoList.js    # Composant principal de la liste de tâches
│   └── TodoList.css   # Styles et animations CSS
├── reducers/
│   └── todoReducer.js # Logique du reducer pour gérer les tâches
└── App.js             # Point d’entrée de l’application
```