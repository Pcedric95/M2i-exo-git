package org.example;

public class GestionPaiement {
    public static void main(String[] args) {
        Compte compteCarte = new Compte(100.0);
        Compte comptePaypal = new Compte(60.0);

        CarteDeCredit carte = new CarteDeCredit("12345678910", "Jean Serge", "12/27", 123, compteCarte);
        PayPal paypal = new PayPal("milan@paypal.com", "azerty", comptePaypal);

        System.out.println(carte.effectuerPaiement(40.0));   // OK
        System.out.println(carte.effectuerPaiement(80.0));   // Refusé

        System.out.println(paypal.effectuerPaiement(50.0));  // OK
        System.out.println(paypal.effectuerPaiement(20.0));  // Refusé
    }
}
