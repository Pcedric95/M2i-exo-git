package org.example;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class Evenement {
    private String nom;
    private Lieu lieu;
    private LocalDate date;
    private LocalTime heure;
    private int nombrePlaces;
    private List<Billet> billets;

    // Constructeur
    public Evenement(String nom, Lieu lieu, LocalDate date, LocalTime heure, int nombrePlaces) {
        this.nom = nom;
        this.lieu = lieu;
        this.date = date;
        this.heure = heure;
        this.nombrePlaces = nombrePlaces;
        this.billets = new ArrayList<>();
    }

    // Getters
    public String getNom() {
        return nom;
    }

    public Lieu getLieu() {
        return lieu;
    }

    public LocalDate getDate() {
        return date;
    }

    public LocalTime getHeure() {
        return heure;
    }

    public int getNombrePlaces() {
        return nombrePlaces;
    }

    public List<Billet> getBillets() {
        return billets;
    }

    // Setters
    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setLieu(Lieu lieu) {
        this.lieu = lieu;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setHeure(LocalTime heure) {
        this.heure = heure;
    }

    public void setNombrePlaces(int nombrePlaces) {
        this.nombrePlaces = nombrePlaces;
    }

    // Méthode pour ajouter un billet
    public void ajouterBillet(Billet billet) {
        billets.add(billet);
    }

    // Vérifie s’il reste des places disponibles
    public boolean estComplet() {
        return billets.size() >= nombrePlaces;
    }

    // toString
    @Override
    public String toString() {
        return nom + " le " + date + " à " + heure + " (" + lieu + ")";
    }
}
