package org.example;

public class Commercial extends Salarie{
    private int chiffreAffaires;
    private int commission;


    public Commercial(String matricule, String service, String categorie, String nom, int salaire ,int chiffreAffaires, int commission) {
        super(matricule, service, categorie, nom, salaire);
        this.chiffreAffaires = chiffreAffaires;
        this.commission =commission;
    }

    public void afficherSalaire(){
        int commissionMontant = chiffreAffaires * commission / 100;
        int total = salaire + commissionMontant;
        System.out.println("Le salaire de " + nom + " est de " + salaire + " euros " + commissionMontant + " euros de commission  = " + total + " euros");
    }

    public String toString() {
        int commissionMontant = chiffreAffaires * commission / 100;
        int total = salaire + commissionMontant;
        return "Salarie : " + nom + " matricule : " + matricule + ", Salaire : " + salaire + " €";
    }
}
