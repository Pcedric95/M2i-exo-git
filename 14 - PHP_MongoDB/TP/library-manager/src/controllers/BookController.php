<?php

use Library\Manager\Models\Book;
use Library\Manager\Repository\BookRepository;


function createBook(): void {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        storeBook(); // logique séparée
    } else {
        require_once __DIR__ . '/../views/Books/create.php';
    }
}



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


function listBooks(): void {
    $repo = new BookRepository();
    $books = $repo->findAll();

    // Transmet à la vue
    require_once __DIR__ . '/../views/Books/index.php';
}

function showBook(int $id): void {
    $repo = new \Library\Manager\Repository\BookRepository();
    $book = $repo->findById($id);

    if (!$book) {
        echo "Livre introuvable.";
        return;
    }

    // Récupération des avis MongoDB
    $reviewRepo = new \Library\Manager\Repository\ReviewRepository();
    $reviews = $reviewRepo->findByBookId($book->getId());
    $avgNote = $reviewRepo->getAverageNote($book->getId());

    // Passe les données à la vue
    require_once __DIR__ . '/../views/Books/show.php';
}


// 2.2 Ajouter avis - MongoDB

use Library\Manager\Models\Review;
use Library\Manager\Repository\ReviewRepository;

function addReview(): void {
    $book_id = (int) ($_GET['id'] ?? 0);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $note = (int) ($_POST['note'] ?? 0);
        $commentaire = $_POST['commentaire'] ?? '';

        if ($book_id > 0 && $note >= 1 && $note <= 5 && $commentaire) {
            $review = new Review($book_id, $note, $commentaire);
            $repo = new ReviewRepository();
            $repo->addReview($review);

            header("Location: ?page=show&id=$book_id");
            exit;
        } else {
            echo "Avis invalide.";
        }
    }
}
