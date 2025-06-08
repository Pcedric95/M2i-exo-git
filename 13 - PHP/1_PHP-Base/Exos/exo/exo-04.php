<?php

    $nombre = (int) readline("Entrez un nombre :");

    if ($nombre > 0){
        echo "Le nombre est positif" . PHP_EOL;
    } elseif ($nombre < 0) {
        echo "Le nombre est négatif" . PHP_EOL;
    } else {
        echo "Le nombre est nul" . PHP_EOL;
    }
?>