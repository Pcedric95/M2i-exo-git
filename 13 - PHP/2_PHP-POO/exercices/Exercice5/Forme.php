<?php 

abstract class Forme{
    public function __construct(protected string $nom){
    }

    abstract protected function calculerAire() : float;
    abstract protected function calculerPerimetre() : float; 

    public function info(){
        echo "Je suis une forme dont le nom est $this->nom.\n"; 
    }
}