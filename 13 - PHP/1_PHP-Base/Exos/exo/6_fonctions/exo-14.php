<?php

function calculMoyenne(...$nombres) {
    if (count($nombres) === 0) {
        return null;
    } else {
        $somme = 0;
        foreach ($nombres as $nombre) {
            $somme += $nombre;
        }
        return $somme / count($nombres);
    }
}


function afficherMoyenne(?float $moyenne) {
    if($moyenne === null) {
        echo "Aucun nombre n'a été donné";
    } else{
        echo "La moyenne est : $moyenne" . PHP_EOL;
    }
}


$moyenne = calculMoyenne(12, 18, 9);
afficherMoyenne($moyenne);

$moyenneVide = calculMoyenne();
afficherMoyenne($moyenneVide);