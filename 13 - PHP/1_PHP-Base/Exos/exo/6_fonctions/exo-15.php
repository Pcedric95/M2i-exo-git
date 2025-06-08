<?php

/* function doublerValeur($tableau){
    $resultat = [];

    foreach($tableau as $valeur){
        $resultat[] = $valeur * 2;
    }
    return $resultat;
} */


// Corrigé du prof

function doublerValeur (array $tab){
    /* $double = function($nb){
        return $nb * 2;
    }; */

    $double = fn($nb) => $nb * 2;


    for($i = 0 ; $i < count($tab); $i++){
        $tab[$i] = $double($tab[$i]);
    }

    /* foreach($tab as $val){
        $val = $double($val);
    } */

    return $tab;
}

$tab = [2,4,6,8];
$tab = doublerValeur($tab);
print_r($tab);