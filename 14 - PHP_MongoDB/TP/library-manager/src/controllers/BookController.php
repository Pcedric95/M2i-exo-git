<?php

use Library\Manager\Models\Book;

function storeBook(): void {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $titre = $_POST['titre'] ?? '';
        $auteur = $_POST['auteur'] ?? '';
        $isbn = $_POST['isbn'] ?? '';
        $user_id = (int) ($_POST['user_id'] ?? 0);

        // Sécurité : vérifier que tout est rempli
        if ($titre && $auteur && $isbn && $user_id > 0) {
            $existing = Book::findByIsbn($isbn);

            if (!$existing) {
                $book = new Book($titre, $auteur, $isbn, $user_id);
                $book->save();

                // Redirection après succès
                header('Location: ?page=index');
                exit;
            } else {
                echo " Ce livre existe déjà avec ID : " . $existing->getId();
            }
        } else {
            echo " Tous les champs sont obligatoires.";
        }
    } else {
        echo " Requête invalide.";
    }
}
