<?php
enum TypeVegetal: string {
    case Fleur = 'Fleur';
    case Plante = 'Plante';
    case Autre = 'Autre';
}

class Vegetal {
    protected string $nom;
    protected string $couleur;

    public function __construct(string $nom, string $couleur) {
        $this->nom = $nom;
        $this->couleur = $couleur;
    }

    public function afficher(): string {
        return "Nom : <strong>{$this->nom}</strong><br>Couleur : {$this->couleur}";
    }

    public function getType(): string {
        return get_class($this);
    }
}

class Fleur extends Vegetal {
    
    public function afficher(): string {
        return parent::afficher().
        "<br>Description : Petite fleur qui sent bon";
    }
}

class Plante extends Vegetal {
    public function afficher(): string {
        return parent::afficher().
        "<br>Description : Petite plante toute simple";
    }
}
?>
