<?php

$notes = [];

while (true){
    $saisieUtilisateur = readline("Veuillez entrer une note.Vous tapez le mot 'fin' pour terminer.");

    if($saisieUtilisateur === 'fin'){
        break;
    }

    $notes[] = $saisieUtilisateur;
}

echo "Voici les notes enregistrées : " . PHP_EOL;

foreach ($notes as $index => $note ) {
    $numNote = $index + 1;
    echo "Note $numNote : $note" . PHP_EOL;
}
