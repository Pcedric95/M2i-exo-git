Voici une version simplifiée pour une journée de TP :

## **Mini Gestionnaire de Bibliothèque Personnelle**

### **Contexte**
Application simple pour gérer sa collection de livres avec avis et notes de lecture.

### **Architecture minimale**

**Base de données relationnelle (MySQL) :**
- Table `users` (id, nom, email) // avec relation one-to-many (1 livre/personne) ou many-to-many. 
- Table `books` (id, titre, auteur, isbn, user_id)
- Table `categories` avec relation many-to-many

**MongoDB :**
- Collection `reviews` (note, commentaire, date)
- Collection `reading_sessions` (pages lues, temps passé, notes personnelle)

### **Fonctionnalités TP (3-4h)**

1. **CRUD basique** (SQL - 1h)
   - Ajouter/modifier/supprimer des livres
   - Gérer les catégories
   - Lister ses livres

2. **Système d'avis** (MongoDB - 1h)
   - Ajouter un avis avec note /5
   - Afficher les avis par livre
   - Calcul moyenne des notes

3. **Interface simple** (1h)
   - Formulaires d'ajout
   - Liste des livres avec filtres
   - Page de détail avec avis

4. **Fonctionnalité bonus** (30min)
   - Recherche par titre/auteur
   - Export de sa liste en JSON

### **Données d'exemple**
```php
// SQL : Livre
id: 1, titre: "1984", auteur: "Orwell", isbn: "978-0..."

// MongoDB : Avis
{
  book_id: 1,
  rating: 5,
  comment: "Chef d'œuvre intemporel",
  read_date: "2024-01-15"
}
```

Groupe : 

Pour Vendredi matin : Confirmer groupe + natif/symfony + préprarer repo git (du groupe)

Martin/Fred (~Symfony) 
Alexy/Erwin (~Ñatif)
Fatah/Ophélie (~Symfony)
Amar/Ryad (Symfony)

Falonne (Symfony)
Cédric (~Symfony)
Julie (Natif)
Ibrahim (Natif)
Vanessa (~)
Daniel (~Symfony)
Farba (~)