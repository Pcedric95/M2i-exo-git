<?php

$nom = readline("Veuillez entrer votre nom : ");
$prenom = readline("Veuillez entrer votre prenom : ");
$age = (int) readline("Veuillez entrer votre age : ");
$reponse = readline("Êtes-vous étudiant ? (oui/non) : ");
$estEtudiant = ($reponse === "oui");

$infos = [
    "Nom" => $nom,
    "Prenom" => $prenom,
    "Âge" => $age,
    "Etudiant" => $estEtudiant ? "oui" : "non"
];

foreach ($infos as $cle => $valeur){
    echo $cle . " : " . $valeur . PHP_EOL;

}