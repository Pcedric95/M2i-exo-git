<?php

use MongoDB\Client;
use MongoDB\Driver\Exception\Exception as MongoException;

// Il faut importer la dépendance qui a été téléchargée avec composer require mongodb/mongodb
require 'vendor/autoload.php';

// Nous mettons notre try actch afin de vérifier que la connection avec la
// BDD Mongo s'est bien effectué


try {
    // Pour créer une nouvelle connection, nous devons créer un objet MongoDB\Client
    $connection = new Client("mongodb://localhost:27017");
    echo "Connected to MongoDB successfully";
} catch (MongoException $e) {
    echo "Erreur de connexion : ".$e->getMessage();
    exit;
}

// ===== Céation de la BDD =======
//$db = $connection->selectDatabase("cinema");
$db = $connection->cinema;

// ==== Création/Connection de la collection ====
//$collection = $db->selectCollection("films");
$collection = $db->films_avec_contrainte;


// ===== Création d'une collection avec contrainte =======
$db->createCollection("films_avec_contrainte", [
    'capped' => true,
    'size' => 1024000,
    'max' => 5,
    'validator' => [
        '$jsonSchema' => [
            'bsonType' => 'object',
            'required' => ['title', 'genre']
        ]
    ],
    'validationLevel' => 'strict',
    'validationAction' => 'warn'
]);

// ==== Create Document ====
$idInserted = "";

try {
    $oneresult = $collection->insertOne([
        'titre' => 'Les 1001 recettes de Fred',
        'annee_production' => 2025,
        'genres' => ["Drame", "Romance", "Aventure", "Thriller"],
        'age_limite' => 6,
        'decimal' => new \MongoDB\BSON\Decimal128("123.4567")
    ]);
        echo "Insertion réussie avec l'id : ".$oneresult->getInsertedId(), PHP_EOL;
}catch (MongoException $e) {
    echo "Erreur lors de l'insertion : ".$e->getMessage();
}

/*try {
    $manyresult = $collection->insertMany([
        [
        'titre' => 'Les mésaventures de Jean Luc',
        "annee_production" => 2025
        ],
        [
            'titre' => 'Le retour de mariette',
            "annee_production" => 2000
        ]
    ]);
    foreach ($manyresult->getInsertedIds() as $key => $value) {
        echo "Insertion réussie avec l'id : ",$key , " - ".$value, PHP_EOL;
    }

}catch (MongoException $e) {
    echo "Erreur lors de l'insertion : ".$e->getMessage();
}*/



// === FIND DOCUMENT ====
// $films = $collection->findOne();
// print_r($films);

echo "<hr><h3>Documents dans la collection :</h3><ul>";

$films = $collection->find();
foreach ($films as $film) {
    echo "<li>" . $film['titre'] . " (" . $film['annee_production'] . ")</li>";
}

echo "</ul>";


$cursor = $collection->find([
    'or' => [
        ['genres' => ['Action']],
        ['age_limite' => ['$gte' => 12]],
    ]
]);
foreach ($cursor as $value) {
    print_r($value);
}

