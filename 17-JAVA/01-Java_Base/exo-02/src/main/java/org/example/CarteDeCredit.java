package org.example;

public class CarteDeCredit implements Paiement {
    protected String numeroCarte;
    protected String titulaire;
    protected String dateExpiration;
    protected int codeCVV;
    protected Compte compte;

    public CarteDeCredit(String numeroCarte, String titulaire, String dateExpiration, int codeCVV, Compte compte) {
        this.numeroCarte = numeroCarte;
        this.titulaire = titulaire;
        this.dateExpiration = dateExpiration;
        this.codeCVV = codeCVV;
        this.compte = compte;
    }

    public String effectuerPaiement(double montant) {
        if (compte.debiter(montant)) {
            return "Paiement de " + montant + " € effectué par carte. Solde : " + compte.getSolde() + " €";
        } else {
            return "Paiement refusé : solde insuffisant (solde actuel : " + compte.getSolde() + " €)";
        }
    }
}
