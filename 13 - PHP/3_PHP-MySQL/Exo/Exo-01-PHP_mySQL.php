<?php

// Variables globales
$hote = 'localhost';
$nomBase = 'Base_Etudiants';
$utilisateur = 'root';
$motDePasse = 'root';

// Étape 1 : créer la base si n'existe pas
try {
    $connexionTemp = new PDO("mysql:host=$hote;charset=utf8", $utilisateur, $motDePasse);
    $connexionTemp->exec("CREATE DATABASE IF NOT EXISTS $nomBase CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;");
    echo "Notre base de données '$nomBase' a été créée ou existe déjà." . PHP_EOL;
} catch (PDOException $e) {
    echo "Erreur lors de la création de la base : " . $e->getMessage();
    exit;
}

// Étape 2 : se connecter à la base
function ConnexionPDO()
{
    global $hote, $nomBase, $utilisateur, $motDePasse;

    try {
        $db = new PDO("mysql:host=$hote;dbname=$nomBase;charset=utf8", $utilisateur, $motDePasse);
        echo "Connexion à la base '$nomBase' réussie !" . PHP_EOL;
        return $db;
    } catch (PDOException $e) {
        echo "Erreur de connexion : " . $e->getMessage();
        exit;
    }
}

// Connexion
$connexion = ConnexionPDO();

// Création table 'etudiant' si n'existe pas
try {
    $connexion->exec("
        CREATE TABLE IF NOT EXISTS etudiant (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(50) NOT NULL,
            prenom VARCHAR(50) NOT NULL,
            date_naissance DATE NOT NULL,
            email VARCHAR(100) NOT NULL
        )
    ");
    echo "Table 'etudiant' vérifiée/créée avec succès." . PHP_EOL;
} catch (PDOException $e) {
    echo "Erreur lors de la création de la table : " . $e->getMessage() . PHP_EOL;
    exit;
}

// 1. Fonction pour afficher tous les étudiants
function afficherEtudiants(): void
{
    global $connexion;
    $requete = "SELECT * FROM etudiant";

    $resultat = $connexion->query($requete);

    if ($resultat->rowCount() == 0) {
        echo "Aucun étudiant trouvé.\n";
        return;
    }

    echo "Liste des étudiants :\n";

    foreach ($resultat as $etudiant) {
        echo "ID : {$etudiant['id']}\n";
        echo "Nom : {$etudiant['nom']}\n";
        echo "Prénom : {$etudiant['prenom']}\n";
        echo "Date de naissance : {$etudiant['date_naissance']}\n";
        echo "Email : {$etudiant['email']}\n";
        echo "-------------------\n";
    }
}

// 2. Fonction d'ajout d'étudiant
function ajouterEtudiants()
{
    global $connexion;

    $nom = readline("Nom de l'étudiant : ");
    $prenom = readline("Prénom de l'étudiant : ");
    $dateNaissance = readline("Date de naissance (AAAA-MM-JJ) : ");
    $email = readline("Email de l'étudiant : ");

    $requete = "INSERT INTO etudiant (nom, prenom, date_naissance, email) VALUES (:nom, :prenom, :date_naissance, :email)";

    $statement = $connexion->prepare($requete);

    $ajoutReussi = $statement->execute([
        'nom' => $nom,
        'prenom' => $prenom,
        'date_naissance' => $dateNaissance,
        'email' => $email
    ]);

    if ($ajoutReussi) {
        echo "Étudiant ajouté avec succès.\n";
    } else {
        echo "Erreur lors de l'ajout de l'étudiant.\n";
    }
}

// 3. Fonction pour éditer un étudiant
function editerEtudiant()
{
    global $connexion;

    $id = readline("ID de l'étudiant à modifier : ");

    // Vérifier si l'étudiant existe
    $requeteVerif = "SELECT * FROM etudiant WHERE id = :id";
    $statement = $connexion->prepare($requeteVerif);
    $statement->execute(['id' => $id]);
    $etudiant = $statement->fetch();

    if (!$etudiant) {
        echo "Aucun étudiant trouvé avec l'ID $id.\n";
        return;
    }

    echo "Étudiant trouvé : {$etudiant['nom']} {$etudiant['prenom']}\n";

    // Demander les nouvelles informations
    $nouveauNom = readline("Nouveau nom (vide = aucun changement) : ");
    $nouveauPrenom = readline("Nouveau prénom (vide = aucun changement) : ");
    $nouvelleDateNaissance = readline("Nouvelle date de naissance (AAAA-MM-JJ) (vide = aucun changement) : ");
    $nouvelEmail = readline("Nouvel email (vide = aucun changement) : ");

    // Si vide, conserver l'ancienne valeur
    $nouveauNom = $nouveauNom !== '' ? $nouveauNom : $etudiant['nom'];
    $nouveauPrenom = $nouveauPrenom !== '' ? $nouveauPrenom : $etudiant['prenom'];
    $nouvelleDateNaissance = $nouvelleDateNaissance !== '' ? $nouvelleDateNaissance : $etudiant['date_naissance'];
    $nouvelEmail = $nouvelEmail !== '' ? $nouvelEmail : $etudiant['email'];

    // Mettre à jour l'étudiant
    $requeteMiseAJour = "
        UPDATE etudiant
        SET nom = :nom, prenom = :prenom, date_naissance = :date_naissance, email = :email
        WHERE id = :id";

    $requetePrepare = $connexion->prepare($requeteMiseAJour);
    $reussi = $requetePrepare->execute([
        'nom' => $nouveauNom,
        'prenom' => $nouveauPrenom,
        'date_naissance' => $nouvelleDateNaissance,
        'email' => $nouvelEmail,
        'id' => $id
    ]);

    // Vérifier si mise à jour réussie
    if ($reussi) {
        echo "Étudiant mis à jour avec succès.\n";
    } else {
        echo "Erreur lors de la mise à jour de l'étudiant.\n";
    }
}

// 4. Fonction pour supprimer un étudiant
function supprimerEtudiant()
{
    global $connexion;

    $id = readline("ID de l'étudiant à supprimer : ");

    // Vérifier si l'étudiant existe
    $requeteVerif = "SELECT * FROM etudiant WHERE id = :id";
    $statement = $connexion->prepare($requeteVerif);
    $statement->execute(['id' => $id]);
    $etudiant = $statement->fetch();

    if (!$etudiant) {
        echo "Aucun étudiant trouvé avec l'ID $id.\n";
        return;
    }

    echo "Étudiant trouvé : {$etudiant['nom']} {$etudiant['prenom']}\n";

    // Demander confirmation
    $confirmation = readline("Êtes-vous sûr de vouloir supprimer l'étudiant {$etudiant['nom']} {$etudiant['prenom']} ? (oui/non) : ");

    if (strtolower($confirmation) !== 'oui') {
        echo "Suppression annulée.\n";
        return;
    }

    // Supprimer l'étudiant
    $requeteSuppression = "DELETE FROM etudiant WHERE id = :id";
    $statementSuppression = $connexion->prepare($requeteSuppression);
    $reussi = $statementSuppression->execute(['id' => $id]);

    // Vérifier si suppression réussie
    if ($reussi) {
        echo "Étudiant supprimé avec succès.\n";
    } else {
        echo "Erreur lors de la suppression de l'étudiant.\n";
    }
}

// Menu interactif
while (true) {
    echo "---------------------------------------------\n";
    echo "
      __             _ _            ___        
   ___| |_ _   _  __| (_) __ _ _ __ | |_ ___  
  / _ \ __| | | |/ _` | |/ _` | '_ \| __/ __| 
 |  __/ |_| |_| | (_| | | (_| | | | | |_\__ \ 
  \___|\__|\____|\__,_|_|\__|_|_| |_|__|___/\n";
    echo "---------------------------------------------\n";
    echo "Bienvenue dans le système de gestion des étudiants\n";
    echo "Sélectionnez une option :\n";
    echo "1. Afficher tous les étudiants\n";
    echo "2. Ajouter un étudiant\n";
    echo "3. Éditer un étudiant\n";
    echo "4. Supprimer un étudiant\n";
    echo "5. Quitter\n";

    $choix = readline("Veuillez sélectionner une option : ");

    switch ($choix) {
        case 1:
            afficherEtudiants();
            break;
        case 2:
            ajouterEtudiants();
            break;
        case 3:
            editerEtudiant();
            break;
        case 4:
            supprimerEtudiant();
            break;
        case 5:
            echo "Au revoir !\n";
            exit;
        default:
            echo "Choix invalide. Veuillez réessayer.\n";
    }
}