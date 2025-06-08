<?php

class Chien{
    private string $nom; 
    private string $race; 
    private int $age; 

    public static string $nomDuChenil = "WaWa Land";
    public static int $nbChiens = 0;  

    public function __construct($nom, $race, $age){
        $this->nom = $nom;
        $this->race = $race;
        $this->age = $age;

        self::$nbChiens++; 
        echo "Le chien $nom vient d'entrer dans le chenil\n"; 
    }

    public function __destruct(){
        echo "Le chien a été adopté\n";
        self::$nbChiens--; 
    }

    public function getNom(){
        return $this->nom; 
    }

    public function setNom($nom){
        $this->nom = $nom; 
    }

    public function getRace(){
        return $this->race; 
    }

    public function setRace($race){
        $this->race = $race; 
    }

    public function getAge(){
        return $this->age; 
    }

    public function setAge($age){
        $this->age = $age; 
    }

    public function __toString(){
        return "Nom : {$this->getNom()}, Race : {$this->getRace()}, Age : {$this->getAge()}, Nom du chenil : ". self::$nomDuChenil. " \n"; 
    }
}

$rex = new Chien("Rex", "Berger Allemand", 4); 
$bull = new Chien("Bull", "Bulldog", 3); 

$rex->setNom("Rax"); 
$rex->setAge(5); 
$rex->setRace("Labrador");

echo $rex; 
echo $bull; 

echo Chien::$nomDuChenil, PHP_EOL; 
Chien::$nomDuChenil = "Chut Chut pas de marque";
echo Chien::$nomDuChenil, PHP_EOL; 

echo Chien::$nbChiens, PHP_EOL; 
echo $rex; 
echo $bull; 

unset($rex); 
echo Chien::$nbChiens, PHP_EOL; 