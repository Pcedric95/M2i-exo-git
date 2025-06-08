<?php
require_once "Animal.php";


class Bird implements Animal {
    public function makeSound(): void{
        echo "Cuit Cuit !\n";
    }
}