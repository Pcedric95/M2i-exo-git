<?php

$nombre = readline("Veuillez saisir un nombre : ");

for ($i = 1; $i < $nombre; $i++){

    if($i % 3 === 0 || $i % 5 === 0){
        echo $i . PHP_EOL;
    }
}

?>