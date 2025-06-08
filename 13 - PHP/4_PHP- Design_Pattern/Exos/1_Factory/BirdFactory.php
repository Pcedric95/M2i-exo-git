<?php
require_once "AnimalFactory.php";
require_once "Bird.php";

class BirdFactory implements AnimalFactory{
    public function createAnimal(): Animal{
        return new Bird();
    }
}