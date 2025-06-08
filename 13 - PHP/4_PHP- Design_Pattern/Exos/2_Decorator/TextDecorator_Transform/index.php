<?php
require_once "Majuscule.php";
require_once "Minuscule.php";
require_once "Prefixe.php";
require_once "Suffixe.php";

$texte = "hello";

$prefixe = new Prefixe("[");
$suffixe = new Suffixe("]");
$majuscule = new Majuscule();

$resultat = $majuscule->transform($suffixe->transform($prefixe->transform($texte)));

echo $resultat; // [HELLO]
