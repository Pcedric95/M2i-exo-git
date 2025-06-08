<?php

require_once "AnimalFactory.php";
require_once "Cat.php";

class CatFactory implements AnimalFactory
{
    public function createAnimal(): Animal{
        return new Cat();
    }
}