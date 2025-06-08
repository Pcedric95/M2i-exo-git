<?php

// Les classes (POO)

// Création d'une classe
class Fruit {
    // Création des propriétés (données)
    public string $nom;
    protected string $couleur;
    private string $forme; 
    public string $saison = "pringtemps";   

    // Création d'une propriété static 
    private static int $nbInstanceFruit = 0; 

    // Constructeur de notre classe => appelé lors de l'instanciation d'un objet. 
    public function __construct($nom, $couleur, $forme = "rond"){
        $this->nom = $nom;  
        $this->couleur = $couleur;  
        $this->forme = $forme;  

        self::$nbInstanceFruit++; 
        echo "L'objet $this->nom a été instancié!!\n"; 
    }

    // Méthode static => méthode lié à notre classe et non aux objets
    public static function getNbInstance(){
        return self::$nbInstanceFruit; 
    }

    // Accesseur de couleur (getter)
    public function getCouleur(){
        $this->couleur = strtoupper($this->couleur); 
        return $this->couleur; 
    }

    // Mutateur de couleur (setter)
    public function setCouleur($couleur){
        $this->couleur = $couleur; 
    }

    // Méthode de classe
    public function eplucher() : void{
        echo "je suis " , $this->nom , " et je suis épluché !!!", PHP_EOL; 
    }

    // Méthode toString() permettant d'afficher directement notre objet. 
    public function __toString(){
        return "Nom : $this->nom, couleur : ". $this->getCouleur()." , forme : $this->forme, Saison : $this->saison"; 
    }

    // Création d'un destructeur => fonction appelé à la destruction de notre objet.
    public function __destruct(){
        self::$nbInstanceFruit--; 
        echo "Je suis un pauvre fruit qui part à la chasse...", PHP_EOL; 
    }
}

echo "Nombre d'instance de fruit : ", Fruit::getNbInstance(), PHP_EOL; 

$banane = new Fruit("Banane", "Jaune"); 
echo $banane->saison, PHP_EOL; 
echo $banane->nom, PHP_EOL; 

echo "Nombre d'instance de fruit : ", Fruit::getNbInstance(), PHP_EOL; 
unset($banane); 


echo "Nombre d'instance de fruit : ", Fruit::getNbInstance(), PHP_EOL; 
$pomme = new Fruit("Pomme", "Rouge"); 
echo $pomme->nom, PHP_EOL; 
// echo $pomme->couleur, PHP_EOL; 
echo $pomme->getCouleur(), PHP_EOL; 
$pomme->eplucher(); 

echo $pomme, PHP_EOL; 

echo "Nombre d'instance de fruit : ", Fruit::getNbInstance(), PHP_EOL; 

// PHP va automatiquement détruire tout les objets et variables de notre scripts. 