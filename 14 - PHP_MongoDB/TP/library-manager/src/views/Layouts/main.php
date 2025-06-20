<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Library Manager</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; }
        nav a { margin-right: 15px; text-decoration: none; color: #0077cc; }
        nav a:hover { text-decoration: underline; }
        h1 { color: #333; }
        .content { margin-top: 20px; }
    </style>
</head>
<body>
<h1> Mini Gestionnaire de Bibliothèque Personnelle</h1>

<nav>
    <a href="?page=index">Accueil</a>
    <a href="?page=create">Ajouter un livre</a>
</nav>

<div class="content">
    <?php

    // Ajouter contenu des vues
    if (isset($content)) {
        echo $content;
    }
    ?>
</div>
</body>
</html>
