<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Library\Manager\Database\MySQLConnection;
use Library\Manager\Models\User;



// Test 1

$pdo = MySQLConnection::getConnection();
echo "<br>Connexion MySQL OK !";


// Test 2

$newUser = new User("Alice Dupont", "alice@example.com");
$newUser->save();

echo "<br>Nouvel utilisateur ajouté avec ID : " . $newUser->getId();
