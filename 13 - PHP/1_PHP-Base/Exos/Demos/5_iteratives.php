<?php

$prenom = readline("Veuillez saisir votre prénom : ");

while($prenom !== "Toto"){
    echo "Erreur. je préfère t'appeler toto ^^\n";
    $prenom = readline("Veuillez saisir votre prénom (le bon cette fois hahaha) : ");
};

do{
    echo "Ton nom est $prenom";
    
    if($prenom !== ("Toto")){
        echo "Erreur. Je souhaite que ton nom soit toto ^^ ";
    }
} while($prenom !== "Toto"){

};