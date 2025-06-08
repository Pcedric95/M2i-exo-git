<?php

do{
    $note = readline("Veuillez entrer une note entre 0 et 20 : ");
    
    if($note < 0 || $note >20){
        echo "Erreur : la note doit être comprise entre 0 et 20" . PHP_EOL;
    }
} while ($note < 0 || $note >20);

$appreciation = "";

switch (true) {
    case ($note <= 9):
        $appreciation = "Insuffisant";
        break;
    case ($note <= 11):
        $appreciation = "Passable";
        break;
    case ($note <= 13):
        $appreciation = "Assez bien";
        break;
    case ($note <= 15):
        $appreciation = "Bien";
        break;
    case ($note <= 17):
        $appreciation = "Très bien";
        break;
    case ($note <= 20):
        $appreciation = "Excellent";
        break;
}

echo "Appréciation : $appreciation" . PHP_EOL;


?>