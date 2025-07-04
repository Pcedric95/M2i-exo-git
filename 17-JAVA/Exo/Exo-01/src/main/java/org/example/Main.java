package org.example;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        ArrayList<Salarie> listeEmployes = new ArrayList<>();

        // Données de test automatiques
        Salarie salarie1 = new Salarie("S001", "Secrétariat", "Cadre", "Milan", 2700);
        Salarie salarie2 = new Salarie("S002", "Informatique", "Employe", "Japan", 1500);
        Commercial c = new Commercial("C123", "Ventes", "Cadre", "Milan", 2500, 10000, 5);

// Ajouter dans la liste
        listeEmployes.add(salarie1);
        listeEmployes.add(salarie2);
        listeEmployes.add(c);

// Afficher leurs salaires
        salarie1.afficherSalaire();
        salarie2.afficherSalaire();
        Salarie.afficherTotalSalaries();

// Réinitialiser
        Salarie.reset();
        Salarie.afficherTotalSalaries();

// Affichage du commercial
        c.afficherSalaire();
        System.out.println(c);



        int choix;

        do {
            System.out.println("\n  ========= MENU =========");
            System.out.println("1 - Ajouter un employé");
            System.out.println("2 - Afficher les salaires");
            System.out.println("3 - Rechercher un employé (à faire)");
            System.out.println("0 - Quitter");
            System.out.print("Entrez votre choix : ");
            choix = scanner.nextInt();

            switch (choix) {
                case 1:
                    int choix1;
                    do {
                        System.out.println("\n1 - Ajouter un salarié");
                        System.out.println("2 - Ajouter un commercial");
                        System.out.print("Choix : ");
                        choix1 = scanner.nextInt();
                        scanner.nextLine(); // vider \n

                        switch (choix1) {
                            case 1:
                                System.out.print("Nom : ");
                                String nom = scanner.nextLine();
                                System.out.print("Matricule : ");
                                String matricule = scanner.nextLine();
                                System.out.print("Service : ");
                                String service = scanner.nextLine();
                                System.out.print("Catégorie : ");
                                String categorie = scanner.nextLine();
                                System.out.print("Salaire : ");
                                int salaire = scanner.nextInt();

                                Salarie s = new Salarie(matricule, service, categorie, nom, salaire);
                                listeEmployes.add(s);
                                break;

                            case 2:
                                System.out.print("Nom : ");
                                String nomC = scanner.nextLine();
                                System.out.print("Matricule : ");
                                String matriculeC = scanner.nextLine();
                                System.out.print("Service : ");
                                String serviceC = scanner.nextLine();
                                System.out.print("Catégorie : ");
                                String categorieC = scanner.nextLine();
                                System.out.print("Salaire : ");
                                int salaireC = scanner.nextInt();
                                System.out.print("Chiffre d’affaires : ");
                                int ca = scanner.nextInt();
                                System.out.print("Commission (%) : ");
                                int taux = scanner.nextInt();

                                Commercial commercial = new Commercial(matriculeC, serviceC, categorieC, nomC, salaireC, ca, taux);
                                listeEmployes.add(commercial);
                                break;

                            default:
                                System.out.println("Choix invalide.");
                        }
                    } while (choix1 != 1 && choix1 != 2);
                    break;

                case 2:
                    System.out.println("\n====== Liste des salaires ======");
                    for (Salarie emp : listeEmployes) {
                        emp.afficherSalaire(); // polymorphisme actif ici
                    }
                    break;

                case 3:
                    System.out.println(" Fonction à faire plus tard");
                    break;

                case 0:
                    System.out.println("Au revoir !");
                    break;

                default:
                    System.out.println("Choix invalide, veuillez réessayer.");
            }

        } while (choix != 0);
    }
}
