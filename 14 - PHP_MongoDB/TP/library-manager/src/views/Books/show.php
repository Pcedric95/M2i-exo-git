<?php

use Library\Manager\Models\User;
use Library\Manager\Repository\CategoryRepository;

/** @var \Library\Manager\Models\Book $book */
/** @var array $reviews */
/** @var float $avgNote */

$categoryRepo = new CategoryRepository();
$categories = $categoryRepo->findByBookId($book->getId());
$catNames = array_map(fn($c) => $c->getNom(), $categories);

$user = User::findById($book->getUserId());

ob_start();
?>

    <h2>Détails du livre</h2>

    <ul>
        <li><strong>Titre :</strong> <?= $book->getTitre() ?></li>
        <li><strong>Auteur :</strong> <?= $book->getAuteur() ?></li>
        <li><strong>ISBN :</strong> <?= $book->getIsbn() ?></li>
        <li><strong>Ajouté par :</strong> <?= $user ? $user->getNom() : 'Inconnu' ?></li>
        <li><strong>Catégories :</strong> <?= implode(', ', $catNames) ?: 'Aucune' ?></li>
    </ul>

    <hr>

    <h3>Avis sur ce livre</h3>
    <p>Note moyenne : <strong><?= $avgNote ?>/5</strong></p>

<?php if (empty($reviews)): ?>
    <p>Aucun avis pour ce livre.</p>
<?php else: ?>
    <ul>
        <?php foreach ($reviews as $rev): ?>
            <li>
                <strong><?= $rev['note'] ?>/5</strong> — <?= htmlspecialchars($rev['commentaire']) ?><br>
                <em>Posté le : <?= date('d/m/Y', $rev['date']->toDateTime()->getTimestamp()) ?></em>
            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>

    <hr>

    <h3>Laisser un avis</h3>
    <form method="post" action="?page=review&id=<?= $book->getId() ?>">
        <label for="note">Note :</label>
        <input type="number" name="note" id="note" min="1" max="5" required><br><br>

        <label for="commentaire">Commentaire :</label><br>
        <textarea name="commentaire" id="commentaire" rows="4" cols="50" required></textarea><br><br>

        <button type="submit">Envoyer</button>
    </form>

    <p><a href="?page=index">← Retour à la liste</a></p>

<?php
$content = ob_get_clean();
require_once __DIR__ . '/../layouts/main.php';
