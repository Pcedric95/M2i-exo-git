<?php
require_once "AnimalFactory.php";
require_once "Dog.php";

class DogFactory implements AnimalFactory {
    public function createAnimal(): Animal {
        return new Dog();
    }
}
