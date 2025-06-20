<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Library Manager</title>
    <link rel="stylesheet" href="css/style.css"

</head>
<body>
<h1> Mini Gestionnaire de Bibliothèque Personnelle</h1>

<nav>
    <a href="?page=index">Accueil</a>
    <a href="?page=create">Ajouter un livre</a>
</nav>

<div class="container">

    <div class="content">
        <?php

        // Ajouter contenu des vues
        if (isset($content)) {
            echo $content;
        }
        ?>
    </div>
</div>
</body>
</html>
