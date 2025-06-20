<?php

use Library\Manager\Models\User;
use Library\Manager\Repository\ReviewRepository;
use Library\Manager\Repository\CategoryRepository;

/** @var \Library\Manager\Models\Book[] $books */

$reviewRepo = new ReviewRepository();
$categoryRepo = new CategoryRepository();

ob_start();
?>

    <h2>Liste des livres</h2>

<?php if (count($books) === 0): ?>
    <p>Aucun livre enregistré pour le moment.</p>
<?php else: ?>
    <table border="1" cellpadding="8" cellspacing="0">
        <thead>
        <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>ISBN</th>
            <th>Utilisateur</th>
            <th>Catégories</th>
            <th>Avis</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($books as $book): ?>
            <?php
            $user = User::findById($book->getUserId());
            $categories = $categoryRepo->findByBookId($book->getId());
            $catNames = array_map(fn($c) => $c->getNom(), $categories);

            $avis = $reviewRepo->findByBookId($book->getId());
            $avg = $reviewRepo->getAverageNote($book->getId());
            ?>
            <tr>
                <td><?= $book->getTitre() ?></td>
                <td><?= $book->getAuteur() ?></td>
                <td><?= $book->getIsbn() ?></td>
                <td><?= $user ? $user->getNom() : 'Inconnu' ?></td>
                <td><?= implode(', ', $catNames) ?></td>
                <td><?= count($avis) ?> avis — ★ <?= $avg ?></td>
                <td><a href="?page=show&id=<?= $book->getId() ?>">Voir</a></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>

<?php
$content = ob_get_clean();
require_once __DIR__ . '/../layouts/main.php';
