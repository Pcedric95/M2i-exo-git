<?php
require_once "TexteSimple.php";
require_once "Majuscule.php";
require_once "Minuscule.php";
require_once "Prefixe.php";
require_once "Suffixe.php";

$texte = new TexteSimple("hello");
$texte = new Prefixe($texte, "[");
$texte = new Suffixe($texte, "]");
$texte = new Majuscule($texte);

echo $texte->getContent(); // [HELLO]
