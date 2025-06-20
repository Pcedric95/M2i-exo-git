<?php
ob_start();
?>

    <h2>Ajouter un nouveau livre</h2>

    <form method="post" action="?page=store">
        <label for="titre">Titre :</label><br>
        <input type="text" id="titre" name="titre" required><br><br>

        <label for="auteur">Auteur :</label><br>
        <input type="text" id="auteur" name="auteur" required><br><br>

        <label for="isbn">ISBN :</label><br>
        <input type="text" id="isbn" name="isbn" required><br><br>

        <label for="user_id">Utilisateur (ID) :</label><br>
        <input type="number" id="user_id" name="user_id" required><br><br>

        <button type="submit">Enregistrer</button>
    </form>

<?php
$content = ob_get_clean();
require_once __DIR__ . '/../layouts/main.php';
