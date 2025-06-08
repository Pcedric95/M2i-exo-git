<?php

$age = 18;

// Condition

if ($age >= 18) {
    echo "Vous êtes majeur.";
} else {
    echo "Vous êtes mineur.";
};

echo PHP_EOL;

// rand permet de donner un nombre aléatoire entre (min,max)
$random = rand(1, 100);

// Autre syntaxe pour un if...else (permet plusieurs ligne d'instructions)
if ($random < 10):
    echo "Le nombre $random est un chiffre.";
else:
    echo "Le nombre $random est un nombre.";
endif;

$codeHttp = 200;
$message = "";

switch ($codeHttp) {
    case 200:
        $message = "Ok";
        break;
    case 400:
        $message = "Not found";
        break;
    case 500:
        $message = "Server Error";
        break;
    default:
        $message = "Code inconnu";
        break;
}

echo PHP_EOL, $message;

$message = match ($codeHttp) {
    200, 201 => "ok !",
    400 => "Not found !",
    500 => "Server error",
    default => "Code inconnu"
};

echo PHP_EOL, $message;

// Condition ternaire : expression ? resultatSiVrai : resultatSiFaux
$message = $random % 2 ? "Votre nombre est paire" : "Votre nombre est impaire";

echo PHP_EOL, $message," " , $random;