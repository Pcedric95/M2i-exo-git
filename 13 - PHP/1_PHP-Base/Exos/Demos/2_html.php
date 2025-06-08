<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Demo d'une page PHP</title>
    <style>
        body{
            font-family : Arial;
            background: whitesmoke;
            padding : 20px;
        }
    </style>
</head>
<body>

<h1>Demo d'une page PHP</h1>

<?php
    $prenom = "Cédric";
    echo "<p>Bonjour $prenom !</p>";
?>
<h2>Bonjour, <?$prenom ?> !</h2>

<p>La taille du prénom est de <?= strlen($prenom)?> caractère !</p>
<p>
    <?= '<a href="https://www.google.com" target="_blank">Lien vers Google </a>' ?>
</p>

<button onclick="handleClick('<?= $prenom?>')"> Cliquez-moi</button>

<h2>Var dump</h2>

<?php var_dump($prenom)?>

<script>
    function handleClick(message){
        alert("Le bouton a été cliqué avec le message : " + message)
    }

</script>


</body>
</html>
