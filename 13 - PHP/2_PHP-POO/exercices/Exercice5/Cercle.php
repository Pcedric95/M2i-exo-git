<?php 

class Cercle extends Forme{
    public function __construct($nom, private float $rayon){
        parent::__construct($nom); 
    }

    public function calculerAire() : float{
        // return $this->rayon * $this->rayon * pi(); 
        return pow($this->rayon, 2) * pi(); 
        // return ($this->rayon ** 2) * pi(); 
    }

    public function calculerPerimetre() : float{
        return $this->rayon * pi() * 2; 
    }

    public function info(){
        parent::info(); 
        echo "Notre cercle est de rayon $this->rayon."; 
        echo "Le cercle a un périmètre de {$this->calculerPerimetre()}.\n"; 
        echo "Le cercle a également une aire de {$this->calculerAire()}.\n";
    }
}