<?php
require_once "classes.php";
session_start();

// Initialisation de la session
if (!isset($_SESSION['serre'])) {
    $_SESSION['serre'] = [];
}

// Vide les données session
if (isset($_GET['clear'])) {
    $_SESSION['serre'] = [];
}

// Traitement du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $typeEnum = TypeVegetal::tryFrom($_POST['type']);
    if(!$typeEnum){
        echo "Erreur, type invalide !"; 
        exit; 
    }

    $nom = $_POST['nom'] ?? '';
    $couleur = $_POST['couleur'] ?? '';
    
    $veg = match ($typeEnum) {
        TypeVegetal::Fleur => new Fleur($nom, $couleur),
        TypeVegetal::Plante => new Plante($nom, $couleur),
        default => new Vegetal($nom, $couleur)
    }; 

    $_SESSION['serre'][] = $veg;

    header('Location: ' . $_SERVER['PHP_SELF']); // PRG (Post/Redirect/Get)
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma Serre</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>La serre des 3 fontaines</h1>
<hr>

<div class="formulaire">
    <form method="post">
        <input type="text" name="nom" placeholder="Nom du végétal" required>
        <input type="text" name="couleur" placeholder="Couleur" required>
        <select name="type">
            <?php foreach (TypeVegetal::cases() as $case): ?>
                <option value="<?= $case->value ?>" <?= $case === TypeVegetal::Fleur ? 'selected' : '' ?>>
                    <?= $case->name ?>
                </option>
            <?php endforeach; ?>
        </select>
        <button type="submit">Ajouter</button>
    </form>
</div>

<div class="formulaire">
    <form method="get">
        <button type="submit" name="clear">Vider session</button>
    </form>
</div>

<div class="serre">
    <?php foreach ($_SESSION['serre'] as $vegetal): ?>
        <div class="card">
            <div><?= $vegetal->afficher(); ?></div>
            <em>Type : <?= $vegetal->getType(); ?></em>
        </div>
    <?php endforeach; ?>
</div>

</body>
</html>
