<?php

// Commentaire sur une ligne
# Commentaire sur une ligne

/* 
Commentaire
sur 
plusieurs 
lignes
*/

echo "hello";
echo ("world\n");
echo '\tTout le monde\n';

// Déclaration de variables

// Déclarations
$chaine        = "\nma Variable qui est une chaine de caracteres";
$nombreEntier  = 10;
$nombreDecimal = 10.5;
$boolean       = true;

// Affichages
echo $chaine . PHP_EOL;                           // saut de ligne portable
echo $nombreEntier . PHP_EOL;
echo $nombreDecimal . PHP_EOL;
echo ($boolean ? 'true' : 'false') . PHP_EOL;     // true → 'true', false → 'false'

// on déclare une constante avec le mot-clé 'const'

const ma_constante = "Ceci est une constante\n";

// ma_constante = "je chnage ma constante" ;

// Ancienne façon de déclarer une constante, obsolète
define("IS_ACTIVE", true);
// var_dump permet d'afficher le type et la valeur d'une variable.
var_dump (IS_ACTIVE);
echo ma_constante;

// echo concatène les chaines passés en paramètre
$hello = "Hello " ;
$world = "world!";
echo PHP_EOL, $hello, $world, PHP_EOL;
echo "Ceci est un hello world : $hello$world", PHP_EOL;

// La concatenation se fait avec le .
$concatenat = $hello . $world;
echo $concatenat, PHP_EOL;

// On peut récupérer le type d'une variable
echo "Type de mon booléen : ", gettype($boolean), PHP_EOL;

// La fonction print() qui permet d'afficher le contenu d'une variable directement
print($concatenat);
echo PHP_EOL;

// readline permet de lire l'information saisie dans la console.
// prend en paramètre une chaine de caracteres qui l'affiche à l'utilisateur
 // Attention elle retourne une chaine de caractères.
$prenom = readline("Veuillez entrer votre prénom : ");
echo $prenom, PHP_EOL;

// Pour changer le type de la saisie, on doit l'indiquer directement '(typeSouhaité)readline():'
$age = (int)readline("Veuillez entrer votre âge : ");
var_dump($age);
echo "votre âge est de $age ans", PHP_EOL;

$pseudo = "totoDu64";
$motDePasse = "topSecret";

// concatenation avec le '.'
echo $pseudo . " : " . $motDePasse;

// Interpolation
echo "pseudo : $pseudo, mot de passe : $motDePasse";

// On peut détruire une variable avec la méthode unset()
unset($motDePasse);

echo $motDePasse;