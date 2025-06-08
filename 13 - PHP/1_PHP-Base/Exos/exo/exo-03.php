<?php

    $age = (int) readline("Quel est votre âge ?");

    if ($age >= 18){
        echo "Vous êtes majeur" . PHP_EOL;
    } else {
        echo "Vous êtes mineur" . PHP_EOL;
    }
    echo $age . PHP_EOL;
?>