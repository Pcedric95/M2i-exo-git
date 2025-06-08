<?php 

trait Barre {
    public function virerDeBord(){
        echo "On vire de bord à la barre.\n";
    }
}

trait Voile {
    protected int $nbVoile = 1;
    
    public function hisserVoile(){
        echo "On hisse les voiles ($this->nbVoile).\n";
    }

    public function retracterVoile(){
        echo "On retracte les voiles.\n"; 
    }
}

trait Gouvernail {
    public function virerDeBord(){
        echo "On vire de bord avec le gouvernail.\n";
    }
}

class Navire{
    use Voile, Barre, Gouvernail {
        Gouvernail::virerDeBord insteadof Barre;
    }

    public string $nom; 
    public float $longueur; 

    public function __construct(string $nom, float $longueur, int $nbVoile){
        $this->nom = $nom; 
        $this->longueur = $longueur; 
        $this->nbVoile = $nbVoile; 
    }

    public function naviguer(){
        echo "Le navire $this->nom navigue aux caraïbe.\n";
    }
}

class BateauAMoteur{
    use Barre; 

    public string $nom; 
    public int $puissance; 

    public function __construct($nom, $puissance){
        $this->nom = $nom;
        $this->puissance = $puissance;
    }

    public function naviguer(){
        echo "$this->nom est en train de naviguer.\n"; 
    }
}

$navire = new Navire("Duchesse Anne", 25, 20); 
$navire->naviguer(); 
$navire->virerDeBord(); 
$navire->hisserVoile(); 
$navire->retracterVoile(); 

$bateau = new BateauAMoteur("Zodiak", 15); 
$bateau->naviguer(); 
$bateau->virerDeBord(); 