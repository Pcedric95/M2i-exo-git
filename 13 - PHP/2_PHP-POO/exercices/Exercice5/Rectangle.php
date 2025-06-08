<?php 

class Rectangle extends Forme{
    private float $longueur; 
    private float $largeur; 

    public function __construct($nom, $longueur, $largeur){
        parent::__construct($nom); 
        $this->longueur = $longueur; 
        $this->largeur = $largeur; 
    }

    public function calculerAire() : float{
        return $this->longueur * $this->largeur; 
    }

    public function calculerPerimetre() : float {
        return 2 * ($this->longueur + $this->largeur); 
    }

    public function info(){
        parent::info(); 
        echo "Notre rectangle est de longueur $this->longueur et de largeur $this->largeur.\n"; 
        echo "Le rectangle a un périmètre de {$this->calculerPerimetre()}.\n"; 
        echo "Le rectangle a également une aire de {$this->calculerAire()}.\n";
    }

}