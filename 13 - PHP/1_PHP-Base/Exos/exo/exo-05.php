<?php

    $age1 = 28;
    $age2 = 15;

    if ($age1 >= 18 and $age2 >= 18){
        echo "Vous pouvez accéder à l'évènement" . PHP_EOL;
    } elseif ((($age1 <18 && $age2 > 25) || ($age2 <18 && $age1 > 25))){
        echo "Vous pouvez accéder à l'évènement" . PHP_EOL;
    } else{
        echo "Accès refusé" . PHP_EOL;
    }
?>