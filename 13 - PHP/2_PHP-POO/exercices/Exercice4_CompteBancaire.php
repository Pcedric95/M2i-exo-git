<?php

class CompteBancaire {
    protected $titulaire; 
    protected $solde;
    protected $devise;
    
    public function __construct($titulaire, $solde, $devise) {
        $this->titulaire = $titulaire;
        $this->solde = $solde;
        $this->devise = $devise;
        echo "Compte bancaire créé pour {$this->titulaire} avec un solde initial de {$this->solde} {$this->devise}.\n";
    }
    
    public function __destruct() {
        echo "Le compte bancaire de {$this->titulaire} a été détruit.\n";
    }
    
    public function deposer($montant) {
        if ($montant > 0) {
            $this->solde += $montant;
            echo "{$montant} {$this->devise} ont été déposés sur le compte de {$this->titulaire}.\n";
        } else {
            echo "Erreur : Le montant à déposer doit être positif.\n";
        }
    }
    
    public function retirer($montant) {
        if ($montant <= 0) {
            echo "Erreur : Le montant à retirer doit être positif.\n";
            return false;
        }
        
        if ($this->solde >= $montant) {
            $this->solde -= $montant;
            echo "{$montant} {$this->devise} ont été retirés du compte de {$this->titulaire}.\n";
            return true;
        } else {
            echo "Erreur : Solde insuffisant pour effectuer le retrait.\n";
            return false;
        }
    }
    
    public function afficherSolde() {
        echo "Solde du compte de {$this->titulaire} : {$this->solde} {$this->devise}.\n";
    }
    
    public function getSolde() {
        return $this->solde;
    }
    
    public function getDevise() {
        return $this->devise;
    }
}

class CompteEpargne extends CompteBancaire {
    private $tauxInteret;
    
    public function __construct($titulaire, $solde, $devise, $tauxInteret) {
        parent::__construct($titulaire, $solde, $devise);
        $this->tauxInteret = $tauxInteret;
        echo "Compte épargne créé avec un taux d'intérêt de {$this->tauxInteret}%.\n";
    }
    
    public function calculerInterets() {
        $interets = $this->solde * ($this->tauxInteret / 100);
        $this->solde += $interets;
        echo "Intérêts calculés : {$interets} {$this->devise} ajoutés au compte.\n";
        return $interets;
    }
    
    public function __destruct() {
        echo "Le compte épargne de {$this->titulaire} a été détruit.\n";
        parent::__destruct();
    }
}

class CompteCourant extends CompteBancaire {
    private $decouvertAutorise;
    
    public function __construct($titulaire, $solde, $devise, $decouvertAutorise) {
        parent::__construct($titulaire, $solde, $devise);
        $this->decouvertAutorise = $decouvertAutorise;
        echo "Compte courant créé avec un découvert autorisé de {$this->decouvertAutorise} {$this->devise}.\n";
    }
    
    public function retirerAvecDecouvert($montant) {
        if ($montant <= 0) {
            echo "Erreur : Le montant à retirer doit être positif.\n";
            return false;
        }
        
        if ($this->solde + $this->decouvertAutorise >= $montant) {
            $this->solde -= $montant;
            echo "{$montant} {$this->devise} ont été retirés du compte courant de {$this->titulaire}.\n";
            
            if ($this->solde < 0) {
                echo "Attention : Votre compte est à découvert de " . abs($this->solde) . " {$this->devise}.\n";
            }
            return true;
        } else {
            echo "Erreur : Le montant dépasse votre solde disponible incluant le découvert autorisé.\n";
            return false;
        }
    }
    
 
}

 