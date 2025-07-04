<?php

use Library\Manager\Models\Book;
use Library\Manager\Models\User;

ob_start();

$pdo = \Library\Manager\Database\MySQLConnection::getConnection();
$stmt = $pdo->query("SELECT * FROM books ORDER BY id DESC");
$books = $stmt->fetchAll(PDO::FETCH_ASSOC);
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
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($books as $book): ?>
            <tr>
                <td><?= htmlspecialchars($book['titre']) ?></td>
                <td><?= htmlspecialchars($book['auteur']) ?></td>
                <td><?= htmlspecialchars($book['isbn']) ?></td>
                <td><?= htmlspecialchars($book['user_id']) ?></td>
                <td><a href="?page=show&id=<?= $book['id'] ?>">Voir</a></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>

<?php
$content = ob_get_clean();
require_once __DIR__ . '/../layouts/main.php';
