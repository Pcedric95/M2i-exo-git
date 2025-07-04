# Récapitulatif – Exercice Logs & Étudiants : Partie 3 (Interface HTML)

## 🎯 Objectif
Remplacer l’interface en terminal par une interface HTML via un fichier `StudentView.php`, pour :
- Ajouter, modifier, supprimer des étudiants depuis le navigateur
- Afficher la liste des étudiants dans un tableau HTML
- Connecter les boutons du formulaire aux méthodes PHP correspondantes

---

## 🧱 Étapes réalisées

### ✅ 1. Création du fichier `StudentView.php`
**Chemin :** `src/view/StudentView.php`

**Contenu :**
- Formulaire HTML pour ajouter/modifier un étudiant
- Formulaire HTML pour supprimer un étudiant par ID
- Tableau HTML listant tous les étudiants récupérés depuis la BDD MySQL

---

### ✅ 2. Nouveau `index.php` pour interface Web
**Contenu principal :**
- Chargement des dépendances (`require_once`)
- Instanciation de `StudentService`, `StudentRepository`, `Logger`
- Traitement des `$_POST` selon le bouton cliqué (`Ajouter`, `Modifier`, `Supprimer`)
- Récupération des étudiants via `findAll()`
- Inclusion de la vue HTML (`StudentView.php`)

---

### ✅ 3. Ajout des méthodes dans `StudentService.php`

#### ➕ `createStudentFromForm(array $data)`
- Valide les champs reçus en POST
- Crée un objet `Student`
- Appelle `save()` pour enregistrer l’étudiant
- Enregistre un log `DEBUG` ou `ERR` selon le résultat

#### ✏️ `editStudentFromForm(array $data)`
- Cherche l’étudiant par ID
- Met à jour ses champs si présents
- Appelle `update()`
- Loggue la modification

#### 🗑️ `deleteStudentById(int $id)`
- Supprime l’étudiant via `deleteById()`
- Loggue la suppression (succès ou échec)

---

## ✅ Résultat attendu

- Le formulaire fonctionne depuis le navigateur (`http://localhost/...`)
- Les étudiants sont ajoutés/édités/supprimés avec retour visuel immédiat
- Les logs sont générés automatiquement dans MongoDB (vérifiables dans Compass)

---

## 💡 Points importants

- Tu utilises toujours MySQL pour la gestion des étudiants (Partie 2 = migration Mongo)
- Tu introduis une vraie séparation entre **vue (HTML)** et **contrôleur (PHP)**
- Tu continues à exploiter le `Logger` déjà mis en place lors de la Partie 1

