<?php

require_once "CatFactory.php";
require_once "DogFactory.php";
require_once "BirdFactory.php";


// test chat

echo "Test chat :\n";
$catFactory = new CatFactory();
$chat = $catFactory->createAnimal();
$chat->makeSound(); 


// test chien
echo "Test chien :\n";
$dogFactory = new DogFactory();
$chien = $dogFactory->createAnimal();
$chien->makeSound(); 

// Test bird 

echo "Test bird :\n";
$birdFactory = new BirdFactory();
$bird = $birdFactory->createAnimal();
$bird->makeSound(); 

?>