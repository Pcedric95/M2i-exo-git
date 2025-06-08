<?php

$prenoms = ["Alice", "Marc", "Élodie", "Paul", "Nina"];

foreach ($prenoms as $prenom) {
    echo "Prénom : $prenom " . PHP_EOL;

    for ($i=0; $i < strlen($prenom); $i++) { 
        if($prenom[$i] === "a"){
            echo "Ce prénom contient la lettre 'a' " . PHP_EOL;
            break;
        }
    }
}