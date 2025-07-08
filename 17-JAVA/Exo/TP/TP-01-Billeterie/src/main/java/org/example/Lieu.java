package org.example;

public class Lieu extends Adresse {
    private int capacite;

    // Constructeur
    public Lieu(String rue, String ville, int capacite) {
        super(rue, ville); // appel du constructeur d'Adresse
        this.capacite = capacite;
    }

    // Getter
    public int getCapacite() {
        return capacite;
    }

    // Setter
    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    // toString
    @Override
    public String toString() {
        return super.toString() + " (Capacité : " + capacite + ")";
    }
}
