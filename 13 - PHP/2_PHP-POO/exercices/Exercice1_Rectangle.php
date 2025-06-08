<?php

class Rectangle{
    public int $largeur;
    public int $hauteur; 

    public function __construct($largeur, $hauteur){
        $this->largeur = $largeur; 
        $this->hauteur = $hauteur; 
    }

    public function perimetre(){
        return 2 * ($this->hauteur + $this->largeur); 
    }

    public function surface(){
        return $this->largeur * $this->hauteur; 
    }
}

$monRectange = new Rectangle(4, 10); 
echo "Perimetre : ", $monRectange->perimetre(), PHP_EOL;
echo "Surface : ", $monRectange->surface(), PHP_EOL;

