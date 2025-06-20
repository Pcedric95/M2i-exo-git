# Mini Gestionnaire de Bibliothèque

----- Projet réalisé en binome ------

Ce projet est une application PHP qui permet de gérer une bibliothèque personnelle. Il combine une base de données **MySQL** pour les livres, utilisateurs et catégories, et **MongoDB** pour la gestion des avis utilisateurs.

## Description

L'application propose une interface simple pour :

- Ajouter des livres avec auteur, ISBN et utilisateur associé
- Associer un ou plusieurs livres à des catégories
- Visualiser la liste des livres avec filtre
- Voir les détails d’un livre (catégories, utilisateur, avis)
- Ajouter un avis avec une note et un commentaire (enregistré dans MongoDB)

## Fonctionnalités

- CRUD basique pour les livres (Ajout / Détail)
- Association livres <-> catégories via une table pivot
- Système d’avis utilisateurs (note sur 5 et commentaire)
- Affichage de la note moyenne
- Connexion à deux bases : **MySQL** (relationnel) et **MongoDB** (documents)

## Technologies utilisées

- PHP 8.3
- MySQL (via PDO)
- MongoDB (via l’extension `mongodb`)
- Composer (autoloading PSR-4)
- HTML/CSS simple (style personnalisable)
- Laragon (environnement local)

