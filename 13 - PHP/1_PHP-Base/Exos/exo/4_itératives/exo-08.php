<?php

$somme = 0;
$i = 0;

while ($i <= 100) {
    if($i % 2 === 0)
    {
        $somme += $i;
    }
    $i++;
}

echo "La somme des nombres pairs entre 0 et 100 est de : $somme" . PHP_EOL;
?>