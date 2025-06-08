<?php 

$db = null; 

// Nous tentons de nous connecter à notre session mySQL.
try {
    $db = new PDO("mysql:host=localhost;", "root", ""); 
    echo "La connexion est établie avec la session!", PHP_EOL; 
} catch (PDOException $e){
    echo "Erreur de connexion : " . $e->getMessage(), PHP_EOL; 
    exit; // Ne continue pas si la connexion échoue. 
}

// Une fois la connection réalisé , nous créons notre BDD 'php'.  
$db?->exec("CREATE DATABASE IF NOT EXISTS php CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;");
echo "Notre base de donnée est créé !", PHP_EOL; 

// Maintenant nous tentons de nous connecter à la BDD que nous venons de créer directement.
try {
    $db = new PDO("mysql:host=localhost;dbname=php", "root", ""); 
    echo "La connexion est établie avec notre BDD!", PHP_EOL; 
} catch (PDOException $e){
    echo "Erreur de connexion : " . $e->getMessage(), PHP_EOL; 
    exit; // Ne continue pas si la connexion échoue. 
}

/* 
    Création d'une table en BDD. 
*/

$request = "CREATE TABLE IF NOT EXISTS chien (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    date_of_birth DATETIME
)";

$db->exec($request); 

/*
    Insertion d'un élement dans une table
*/ 

$request = "INSERT INTO chien (name, date_of_birth) VALUES ('Rex', '2025-05-20'), ('Orko','2018-10-31');"; 
// $db->exec($request); 
$stmt = $db->prepare($request); 
$stmt->execute(); 

// Récupère l'id du dernier élément inséré (Si plusieurs élément inséré alors il donnera le premier de la liste). 
echo "Dernier ID insérer : " . $db->lastInsertId() . PHP_EOL; 

/* 
    SELECT avec paramètre
*/ 

// On prépare notre requête SQL pour se prémunir des injections SQL. 
$request = "SELECT id, name, date_of_birth FROM chien WHERE id=:id;"; 

// La méthode prepare renvoie un objet PDOStatement qui va notre permettre de binder 
// les paramètres de notre requête et de récupérer le résultat de celle-ci.
$statement = $db->prepare($request); 

// Pour binder le parametre :id à une valeur, il suffit de passer un tableau associatif avec en clé 
// le paramètre en question. 
$statement->execute(["id" => 2]); 

// Fetch permet de lire le premier résultat de la requête, il renvoie false quand il n'y plus de données. 
// Par défaut, fetch renvoie un tableau, nous pouvons utiliser une constante de la classe PDO pour qu'il nous renvoie un tableau associatif. 
$result = $statement->fetch(PDO::FETCH_ASSOC); 

if($result){
    echo "Chien trouvé avec l'ID 2 : \n"; 
    print_r($result); 
} else {
    echo "Aucun chien trouvé avec l'ID 2.\n";
}

$statement->execute(["id"=> 88]); 
$result = $statement->fetch(PDO::FETCH_ASSOC); 
if(!$result)
    echo "Aucun chien trouvé avec l'ID 88.\n";

/*
    SELECT ALL 
*/

$request = "SELECT * FROM chien;";
$statement = $db->prepare($request); 
$statement->execute(); 

// Renvoie un tableau qui contient l'ensemble des résultats. 
$results = $statement->fetchAll(PDO::FETCH_ASSOC); 

echo "Liste des tout les chiens dans la table chien : \n"; 
foreach($results as $chien){
    print_r($chien); 
}

echo json_encode($results); 

/* 
    Modification d'un élément d'une table
*/

$request = "UPDATE chien SET name=:name, date_of_birth=:doB WHERE id=:id;"; 
$statement = $db->prepare($request); 
$statement->execute(["id" => 1, "name"=>"Rox", "doB" => '1990-01-01']); 

/* 
    Suppression d'un élément 
*/

$request = "DELETE FROM chien WHERE id=:id;"; 
$statement = $db->prepare($request); 
$statement->execute(["id" => 1]); 

/* 
    Nettoyage d'une table
*/

// $request = "TRUNCATE TABLE chien;"; 
// $db->exec($request); 

$db = null; 