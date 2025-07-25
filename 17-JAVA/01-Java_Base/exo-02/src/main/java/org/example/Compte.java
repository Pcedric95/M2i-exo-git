package org.example;

public class Compte {
    private double solde;

    public Compte(double solde) {
        this.solde = solde;
    }

    public double getSolde() {
        return solde;
    }

    public boolean debiter(double montant) {
        if (solde >= montant) {
            solde -= montant;
            return true;
        }
        return false;
    }
}
