<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Library\Manager\Database\MySQLConnection;
use Library\Manager\Models\User;
use Library\Manager\Models\Book;

/*
// Test 1

$pdo = MySQLConnection::getConnection();
echo "<br>Connexion MySQL OK !" . PHP_EOL;


// Test connexion MySQL

$existing = User::findByEmail("alice@example.com");

if (!$existing) {
    $newUser = new User("Alice Dupont", "alice@example.com");
    $newUser->save();
    echo "<br>Nouvel utilisateur ajouté avec ID : " . $newUser->getId() . PHP_EOL;
} else {
    echo "<br>L'utilisateur existe déjà avec ID : " . $existing->getId() . PHP_EOL;
}

// Test d'insertion d'un livre

$existingBook = Book::findByIsbn("9782070368228");

if (!$existingBook) {
    $nouveauLivre = new Book(
        "Le Meilleur des Mondes",
        "Aldous Huxley",
        "9782070368228",
        3
    );

    $nouveauLivre->save();
    echo "<br>Livre ajouté avec ID : " . $nouveauLivre->getId() . PHP_EOL;
} else {
    echo "<br>Ce livre existe déjà avec ID : " . $existingBook->getId() . PHP_EOL;
} */


$page = $_GET['page'] ?? 'index'; // index par défaut

switch ($page)
    {
    case 'create':
        require_once __DIR__ . '/../src/Views/books/create.php';
        break;

    case 'show':
        require_once __DIR__ . '/../src/Views/books/show.php';
        break;

    case 'index':
    default:
        require_once __DIR__ . '/../src/Views/books/index.php';
        break;
    }

