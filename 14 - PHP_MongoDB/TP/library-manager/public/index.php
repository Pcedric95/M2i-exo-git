<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Library\Manager\Models\Book;

echo "Bienvenue dans Library Manager !<br>";

$book = new Book("1984", "George Orwell");
echo "Livre : " . $book->getTitre() . " par " . $book->getAuteur();
