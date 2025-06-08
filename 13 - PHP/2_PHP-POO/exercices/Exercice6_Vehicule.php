<?php

interface Motorise {
    public function demarrer(); 
}

interface Electrique {
    public function recharger(); 
}

interface Volant {
    public function decoller(); 
    public function atterrir(); 
}

interface Flottant {
    public function naviguer(); 
}

abstract class Vehicule {
    protected string $nom; 
    protected string $marque; 

    public function __construct($nom, $marque){
        $this->nom = $nom; 
        $this->marque = $marque; 
    }

    public function __toString(){
        return $this->nom." ".$this->marque; 
    }
}

class Voiture extends Vehicule implements Motorise {

    public function demarrer(): string{
        return "Voiture qui démarre : {$this->nom} - {$this->marque}". PHP_EOL; 
    }
}

class VoitureHybride extends Voiture implements Electrique {
    public function recharger() : void{
        echo "La voiture se recharge.\n";  
    }
}

class Hydravion extends Vehicule implements Motorise, Volant, Flottant{
    public function demarrer(): string{
        return "Hydravion qui démarre : {$this->nom} - {$this->marque}". PHP_EOL; 
    }

    public function decoller(): string{
        return "Hydravion qui decolle : {$this->nom} - {$this->marque}". PHP_EOL; 
    }

    public function atterrir(): string{
        return "Hydravion qui atterri : {$this->nom} - {$this->marque}". PHP_EOL; 
    }

    public function naviguer(): string{
        return "Hydravion qui navigue : {$this->nom} - {$this->marque}". PHP_EOL; 
    }
}

$voiture = new Voiture("Clio", "Renault"); 
echo $voiture, PHP_EOL; 
echo $voiture->demarrer(); 

$hybride = new VoitureHybride("Prius", "Toyota"); 
echo $hybride, PHP_EOL; 
echo $hybride->demarrer(); 
$hybride->recharger(); 

$hydravion = new Hydravion("PlanePlouf", "Boewing");
echo $hydravion, PHP_EOL; 
echo $hydravion->demarrer(); 
echo $hydravion->decoller(); 
echo $hydravion->atterrir(); 
echo $hydravion->naviguer(); 