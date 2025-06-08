<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Demo d'une page PHP</title>
</head>
<body>

<h1>Demo d'une page PHP</h1>

<?php

    $a = 3;
    $b = 4;

    $somme = $a + $b;
    $difference = $a - $b;
    $produit = $a * $b;
    $quotient = $a / $b;

    echo "Somme (a + b)     : $somme" . PHP_EOL;
    echo "Différence (a - b): $difference" . PHP_EOL;
    echo "Produit (a * b)   : $produit" . PHP_EOL;
    echo "Quotient (a / b)  : $quotient" . PHP_EOL;
    
?>



</body>
</html>
