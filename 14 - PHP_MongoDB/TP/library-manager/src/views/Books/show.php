<?php

use Library\Manager\Models\Book;
use Library\Manager\Models\User;

ob_start();

$id = $_GET['id'] ?? null;

if (!$id || !is_numeric($id)) {
    echo "<p>ID invalide.</p>";
} else {
    $book = Book::findById((int) $id);

    if (!$book) {
        echo "<p>Livre non trouvé.</p>";
    } else {
        $user = User::findById($book->getUserId());
        ?>
        <h2>Détail du livre</h2>
        <ul>
            <li><strong>Titre :</strong> <?= $book->getTitre() ?></li>
            <li><strong>Auteur :</strong> <?= $book->getAuteur() ?></li>
            <li><strong>ISBN :</strong> <?= $book->getIsbn() ?></li>
            <li><strong>Ajouté par :</strong> <?= $user ? $user->getNom() : 'Utilisateur inconnu' ?></li>
        </ul>

        <p><a href="?page=index">← Retour à la liste</a></p>
        <?php
    }
}

$content = ob_get_clean();
require_once __DIR__ . '/../layouts/main.php';
