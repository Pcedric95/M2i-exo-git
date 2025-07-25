package org.example;

public class Salarie {
    protected String matricule;
    protected String service;
    protected String categorie;
    protected String nom;
    protected int salaire;

    static int nbSalaries;
    static int totalSalaires;



    public Salarie(String matricule, String service, String categorie, String nom, int salaire){
        this.matricule = matricule;
        this.service = service;
        this.categorie = categorie;
        this.nom = nom;
        this.salaire = salaire;
        nbSalaries++;
        totalSalaires += salaire;

    }

    public void afficherSalaire(){
        System.out.println("Le salaire de " + nom +" est de " + salaire + " euros");
    }

    static void afficherTotalSalaries(){
        System.out.println("Le nombre de salariés est de " + nbSalaries + " pour un total de salaire de " + totalSalaires);
    }

    static void reset(){
        nbSalaries = 0;
        totalSalaires = 0;
    }
    public String toString() {
        return "Salarie : " + nom + " (" + matricule + "), Salaire = " + salaire + "€";
    }
}
