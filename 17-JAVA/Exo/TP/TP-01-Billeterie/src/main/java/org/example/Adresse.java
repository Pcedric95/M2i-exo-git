package org.example;

public class Adresse {
    private String rue;
    private String ville;

    // Constructeur
    public Adresse(String rue, String ville) {
        this.rue = rue;
        this.ville = ville;
    }

    // Getters
    public String getRue() {
        return rue;
    }

    public String getVille() {
        return ville;
    }

    // Setters
    public void setRue(String rue) {
        this.rue = rue;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    // toString
    @Override
    public String toString() {
        return rue + ", " + ville;
    }
}
