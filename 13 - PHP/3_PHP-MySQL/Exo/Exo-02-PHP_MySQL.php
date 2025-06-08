<?php


// Variables globales
$hote = 'localhost';
$nomBase = 'Commandes_Clients';
$utilisateur = 'root';
$motDePasse = 'root';

// Étape 1 : créer la base si n'existe pas
try {
    $connexionTemp = new PDO("mysql:host=$hote;charset=utf8", $utilisateur, $motDePasse);
    $connexionTemp->exec("CREATE DATABASE IF NOT EXISTS $nomBase CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;");
    echo "Notre base de données '$nomBase' a été créée ou existe déjà." . PHP_EOL;
} catch (PDOException $erreur) {
    echo "Erreur lors de la création de la base : " . $erreur->getMessage();
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
    } catch (PDOException $erreur) {
        echo "Erreur de connexion : " . $erreur->getMessage();
        exit;
    }
}

// Connexion
$connexion = ConnexionPDO();

// Création table 'client' si n'existe pas
try {
    $connexion->exec("
        CREATE TABLE IF NOT EXISTS Client (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(50) NOT NULL,
            prenom VARCHAR(50) NOT NULL,
            adresse VARCHAR(100) NOT NULL,
            code_postal VARCHAR(10) NOT NULL,
            ville VARCHAR(50) NOT NULL,
            telephone VARCHAR(15) NOT NULL)
        ");
    echo "Table 'client' créée ou existe déjà." . PHP_EOL;
} catch (PDOException $erreur) {
    echo "Erreur lors de la création de la table 'client' : " . $erreur->getMessage() . PHP_EOL;
    exit;
}

// Création table 'commande' si n'existe pas
// Création table 'commandes' si n'existe pas
try {
    $connexion->exec("
        CREATE TABLE IF NOT EXISTS Commandes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            client_id INT NOT NULL,
            date_commande DATE NOT NULL,
            montant_total DECIMAL(10,2) NOT NULL,
            FOREIGN KEY (client_id) REFERENCES Client(id) ON DELETE CASCADE
        )
    ");
    echo "Table 'Commandes' vérifiée/créée avec succès." . PHP_EOL;
} catch (PDOException $erreur) {
    echo "Erreur lors de la création de la table 'Commandes' : " . $erreur->getMessage() . PHP_EOL;
    exit;
}

// 1.Fonction pour afficher tous les clients
function afficherClients()
{
    global $connexion;

    $requete = "SELECT * FROM Client";
    $resultat = $connexion->query($requete);

    // Vérifier si des clients existent
    if ($resultat->rowCount() == 0) {
        echo "Aucun client trouvé.\n";
        return;
    }

    echo "Liste des clients : \n";

    foreach ($resultat as $client) {
        echo "ID :{$client['id']}\n";
        echo "Nom : {$client['nom']}\n";
        echo "Prénom :{$client['prenom']}\n";
        echo "Adresse : {$client['adresse']}\n";
        echo "Code postal : {$client['code_postal']}\n";
        echo "Ville : {$client['ville']}\n";
        echo "Téléphone : {$client['telephone']}\n";
        echo "-------------------\n";
    }
}




// 2. Fonction d'ajout de client

function ajouterClient()
{

    global $connexion;

    $nom = readline("Nom du client : ");
    $prenom = readline("Prénom du client : ");
    $adresse = readline("Adresse du client : ");
    $code_postal = readline("Code postal du client : ");
    $ville = readline("Ville du client : ");
    $telephone = readline("Téléphone du client : ");

    // Vérification des champs
    if (empty($nom) || empty($prenom)) {
        echo "Le nom et le prénom sont obligatoires.\n";
        return;
    }

    $requete = "INSERT INTO Client (nom, prenom, adresse, code_postal, ville, telephone) VALUES (:nom, :prenom, :adresse, :code_postal, :ville, :telephone)";
    $statement = $connexion->prepare($requete);

    $ajoutReussi = $statement->execute(([
        'nom' => $nom,
        'prenom' => $prenom,
        'adresse' => $adresse,
        'code_postal' => $code_postal,
        'ville' => $ville,
        'telephone' => $telephone
    ]));

    if ($ajoutReussi) {
        echo " Client ajouté avec succès.\n";
    } else {
        echo " Erreur lors de l'ajout du client.\n";
    }

}

// 3. Fonction pour éditer un client
function editerClient(): void
{
    global $connexion;

    $id = readline("ID du client à modifier : ");

    // Vérifier si le client existe
    $requeteVerif = "SELECT * FROM Client WHERE id = :id";
    $statement = $connexion->prepare($requeteVerif);
    $statement->execute(['id' => $id]);
    $client = $statement->fetch();

    if (!$client) {
        echo "❌ Aucun client trouvé avec l'ID $id.\n";
        return;
    }

    echo "Client actuel : {$client['nom']} {$client['prenom']} ({$client['ville']})\n";

    // Saisie des nouveaux champs (vide = inchangé)
    $nom = readline("Nouveau nom (laisser vide pour conserver) : ") ?: $client['nom'];
    $prenom = readline("Nouveau prénom : ") ?: $client['prenom'];
    $adresse = readline("Nouvelle adresse : ") ?: $client['adresse'];
    $codePostal = readline("Nouveau code postal : ") ?: $client['code_postal'];
    $ville = readline("Nouvelle ville : ") ?: $client['ville'];
    $telephone = readline("Nouveau téléphone : ") ?: $client['telephone'];

    // Requête de mise à jour
    $requeteMaj = "UPDATE Client SET 
        nom = :nom, 
        prenom = :prenom, 
        adresse = :adresse, 
        code_postal = :code_postal, 
        ville = :ville, 
        telephone = :telephone 
        WHERE id = :id";

    $stmt = $connexion->prepare($requeteMaj);
    $reussi = $stmt->execute([
        'nom' => $nom,
        'prenom' => $prenom,
        'adresse' => $adresse,
        'code_postal' => $codePostal,
        'ville' => $ville,
        'telephone' => $telephone,
        'id' => $id
    ]);

    if ($reussi) {
        echo " Client modifié avec succès.\n";
    } else {
        echo " Erreur : modification du client impossible.\n";
    }
}

// 4. Fontion pour supprimer un client

function supprimerClient()
{
    global $connexion;

    $id = readline("ID du client à supprimer : ");

    // Vérifier si le client existe
    $requeteVerif = "SELECT * FROM Client WHERE id = :id";
    $statement = $connexion->prepare($requeteVerif);
    $statement->execute(['id' => $id]);
    $client = $statement->fetch();

    if (!$client) {
        echo " Aucun client trouvé avec l'ID $id.\n";
        return;
    }

    // Demander confirmation
    echo "Client : {$client['nom']} {$client['prenom']}\n";
    $confirmation = readline("Êtes-vous sûr de vouloir supprimer le client {$client['nom']} {$client['prenom']} ? (o/n) : ");

    if (strtolower($confirmation) !== 'o') {
        echo " Suppression annulée.\n";
        return;
    }

    try {

        // Suppression du client et de ses commandes
        $connexion->beginTransaction();

        // Supprimer ses commandes
        $requeteSuppressionCommandes = $connexion->prepare("DELETE FROM Commandes Where client_id = :id");
        $requeteSuppressionCommandes->execute((['id' => $id]));

        // Suppression client
        $requeteSuppressionClient = $connexion->prepare("DELETE FROM Client where id = :id");
        $requeteSuppressionClient->execute((['id' => $id]));

        $connexion->commit();

        echo "Le client sélectionné ainsi que ses commandes ont été supprimés.\n";

    } catch (PDOException $erreur) {
        $connexion->rollBack();
        echo "Erreur suppresion client : " . $erreur->getMessage() . "\n";
    }

}


// 5. Afficher le détails d'un client et ses commandes

function afficherClientEtCommandes($id)
{
    global $connexion;

    // Vérifier si le client existe
    $requeteVerif = "SELECT * FROM Client WHERE id = :id";
    $statement = $connexion->prepare($requeteVerif);
    $statement->execute(['id' => $id]);
    $client = $statement->fetch();

    if (!$client) {
        echo " Aucun client trouvé avec l'ID $id.\n";
        return;
    }

    // Afficher ses informations 
    echo "Client : {$client['nom']} {$client['prenom']}\n";

    // Récupérer les commandes du client
    $requeteCommandes = "SELECT * FROM Commandes WHERE client_id = :id";
    $statementCommandes = $connexion->prepare($requeteCommandes);
    $statementCommandes->execute(['id' => $id]);
    $commandes = $statementCommandes->fetchAll();

    // Vérifier si commandes existent
    if (count($commandes) == 0) {
        echo "Aucune commande trouvée pour ce client.\n";
        return;
    }

    // Afficher ses commandes
    echo "Commandes :\n";
    foreach ($commandes as $commande) {
        echo "ID : {$commande['id']}, Date : {$commande['date_commande']}, Montant total : {$commande['montant_total']} € \n";
    }
}


// 6. Ajouter une commande client

function AjouterCommandeClient()
{
    global $connexion;

    $clientId = readline("ID du client : ");
    $dateCommande = readline("Date de la commande (YYYY-MM-DD) : ");
    $montantTotal = readline("Montant total de la commande : ");

    // Vérifier si le client existe
    $requeteVerif = "SELECT * FROM Client WHERE id = :id";
    $statement = $connexion->prepare($requeteVerif);
    $statement->execute(['id' => $clientId]);
    $client = $statement->fetch();

    if (!$client) {
        echo " Aucun client trouvé avec l'ID $clientId.\n";
        return;
    }

    // Ajouter commande client
    $requeteAjout = "INSERT INTO Commandes (client_id, date_commande, montant_total) VALUES (:client_id, :date_commande, :montant_total)";
    $statement = $connexion->prepare($requeteAjout);
    $ajoutReussi = $statement->execute([
        'client_id' => $clientId,
        'date_commande' => $dateCommande,
        'montant_total' => $montantTotal
    ]);

    if ($ajoutReussi) {
        echo " Commande ajoutée avec succès.\n";
    } else {
        echo " Erreur lors de l'ajout de la commande.\n";
    }
}


// Menu 

function menu()
{

    while (true) {
        echo "\n";
        echo "---------------------------------------------\n";
        echo "
   ____                                          _           
  / ___|___  _ __ ___  _ __ ___   __ _ _ __   __| | ___  ___ 
 | |   / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` |/ _ \/ __|
 | |__| (_) | | | | | | | | | | | (_| | | | | (_| |  __/\__ \
  \____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_|\___||___/\n";

        echo "---------------------------------------------\n";
        echo "\n";
        echo "Bienvenue dans le système de gestion Clients et commandes clients\n";
        echo "Sélectionnez une option :\n";
        echo "1. Afficher tous les clients\n";
        echo "2. Ajouter un client\n";
        echo "3. Éditer un client\n";
        echo "4. Supprimer un client\n";
        echo "5. Afficher les détails d'un client (client et commandes)\n";
        echo "6 Ajouter une commande à un client \n";
        echo "7. Quitter\n";
        echo "\n";

        $choix = readline("Veuillez sélectionner une option : ");
        echo "\n";


        switch ($choix) {
            case 1:
                afficherClients();
                break;
            case 2:
                ajouterClient();
                break;
            case 3:
                editerClient();
                break;
            case 4:
                supprimerClient();
                break;
            case 5:
                $id = readline("ID du client à afficher : ");
                afficherClientEtCommandes($id);
                break;
            case 6:
                AjouterCommandeClient();
                break;
            case 7;
                echo "Au revoir !\n";
                exit;
            default:
                echo "Choix invalide. Veuillez réessayer.\n";
        }
        
    }
}



menu();

// afficherClients();
// ajouterClient();
// editerClient();
// supprimerClient();
// afficherClientEtCommandes(1);
// AjouterCommandeClient();
