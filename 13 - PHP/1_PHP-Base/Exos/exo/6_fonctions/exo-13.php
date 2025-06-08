<?php

function prixTTC(float $prixHT, float $tauxTVA) : float{
    return $prixHT * (1 + $tauxTVA / 100);
}

echo "Le prix TTC est de : " . prixTTC(10.5 , 20) . " €" . PHP_EOL;
