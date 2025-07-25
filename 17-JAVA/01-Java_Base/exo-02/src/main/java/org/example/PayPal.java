package org.example;

public class PayPal implements Paiement {
    protected String adresseEmail;
    protected String motDePasse;
    protected Compte compte;

    public PayPal(String adresseEmail, String motDePasse, Compte compte) {
        this.adresseEmail = adresseEmail;
        this.motDePasse = motDePasse;
        this.compte = compte;
    }

    public String effectuerPaiement(double montant) {
        if (compte.debiter(montant)) {
            return "Paiement de " + montant + " € effectué via PayPal. Solde : " + compte.getSolde() + " €";
        } else {
            return "Paiement refusé : solde insuffisant (solde actuel : " + compte.getSolde() + " €)";
        }
    }
}
