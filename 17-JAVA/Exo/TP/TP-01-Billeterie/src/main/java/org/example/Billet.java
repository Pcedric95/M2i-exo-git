package org.example;

public class Billet {
    private int numeroPlace;
    private Client client;
    private Evenement evenement;
    private TypePlace typePlace; // "standard", "gold", "vip"

    // Constructeur
    public Billet(int numeroPlace, Client client, Evenement evenement, TypePlace typePlace) {
        this.numeroPlace = numeroPlace;
        this.client = client;
        this.evenement = evenement;
        this.typePlace = typePlace;
    }


    // Getters
    public int getNumeroPlace() {
        return numeroPlace;
    }

    public Client getClient() {
        return client;
    }

    public Evenement getEvenement() {
        return evenement;
    }

    public String getTypePlace() {
        return typePlace;
    }

    // Setters
    public void setNumeroPlace(int numeroPlace) {
        this.numeroPlace = numeroPlace;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void setEvenement(Evenement evenement) {
        this.evenement = evenement;
    }

    public void setTypePlace(String typePlace) {
        this.typePlace = typePlace;
    }

    // toString
    @Override
    public String toString() {
        return "Billet n°" + numeroPlace + " - " + typePlace + " - " + client.getPrenom() + " " + client.getNom();
    }

}
