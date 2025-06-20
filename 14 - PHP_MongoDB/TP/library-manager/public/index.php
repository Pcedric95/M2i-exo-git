<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Library\Manager\Database\MySQLConnection;
use Library\Manager\Models\User;
use Library\Manager\Models\Book;


// Test 1

$pdo = MySQLConnection::getConnection();
echo "<br>Connexion MySQL OK !";


// Test connexion MySQL

$existing = User::findByEmail("alice@example.com");

if (!$existing) {
    $newUser = new User("Alice Dupont", "alice@example.com");
    $newUser->save();
    echo "<br>Nouvel utilisateur ajouté avec ID : " . $newUser->getId();
} else {
    echo "<br>L'utilisateur existe déjà avec ID : " . $existing->getId();
}

// Test d'insertion d'un livre
$nouveauLivre = new Book(
    "Le Meilleur des Mondes",
    "Aldous Huxley",
    "9782070368228",
    3 // ID utilisateur déjà existant (ex. Alice avec ID 3)
);

$nouveauLivre->save();
echo "<br>Livre ajouté avec ID : " . $nouveauLivre->getId();