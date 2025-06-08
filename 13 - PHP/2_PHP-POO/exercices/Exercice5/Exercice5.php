<?php

require_once "Forme.php"; 
require_once "Cercle.php"; 
require_once "Rectangle.php"; 

$rectangle = new Rectangle("R1", 10, 5); 
$cercle = new Cercle("C1", 5); 

echo "=== Rectangle === \n ";
$rectangle->info(); 
echo "\n=== Cercle === \n ";
$cercle->info(); 