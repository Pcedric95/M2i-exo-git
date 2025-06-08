<?php 

class Personnage{

    public function __construct(
        private string $nom, 
        private int $pointDeVie, 
        private int $pointDattaque)
    {
        $this->nom = $nom; 
        $this->pointDeVie = $pointDeVie; 
        $this->pointDattaque = $pointDattaque; 
    }

    public function getPointDeVie(){
        return $this->pointDeVie; 
    }

    public function getPointDattaque(){
        return $this->pointDattaque; 
    }

    public function getNom(){
        return $this->nom; 
    }

    public function setPointDeVie($nouveauPointDeVie){
        $this->pointDeVie = $nouveauPointDeVie; 
    }

    public function attack(Personnage $adversaire){
        $adversaire->setPointDeVie($adversaire->getPointDeVie() - $this->getPointDattaque());
        echo $this->getNom(), " a attaqué ", $adversaire->getNom(), PHP_EOL; 
        echo "Il reste ", $adversaire->getPointDeVie(), " pv à ", $adversaire->getNom(), PHP_EOL; 
    }

    public function estEnVie(): bool{
        return $this->getPointDeVie() > 0; 
    }

    public function __destruct(){
        echo $this->getNom(), " a fui le champs de bataille....", PHP_EOL; 
    }
}

$p1 = new Personnage("Geralt", 100, 10); 
$p2 = new Personnage("Jaskier", 20, 1); 


echo "=== DEBUT ===", PHP_EOL; 

do{
    $p1->attack($p2); 
    if(!$p2->estEnVie()){
        unset($p2); 
        break; 
    }

    $p2->attack($p1);

}while($p1->estEnVie() && $p2->estEnVie());
echo "=== FIN ==="; 