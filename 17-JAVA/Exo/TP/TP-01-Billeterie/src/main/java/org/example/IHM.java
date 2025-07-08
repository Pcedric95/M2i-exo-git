package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class IHM {
    private static List<Client> Client = new ArrayList<>();
    private static List<Evenement> Evenement = new ArrayList<>();
    private static List<Billet> Billet = new ArrayList<>();

    private void reserverBillet(){
        
    }



















    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choix;

        do {
            System.out.print("----- Menu Pincipal ----");
            System.out.print("1. Créer un client ");
            System.out.print("2. Créer un évènement ");
            System.out.print("3. Réserver un billet ");
            System.out.print("4. Afficher les billets d'un client ");
            System.out.print("0. Quitter");
            System.out.print(" Veulliez choisir une option :");
            choix = sc.nextInt();
            sc.nextLine();

            switch (choix){
                case 1:
                    creerClient();
                    break;
                case 2:
                    creerEvenement();
                    break;
                case 3:
                    reserverBillet();
                    break;
                case 4:
                    afficherBillets();
                    break;
                case 0:
                    System.out.println("Au revoir");
                    break;
                default:
                    System.out.println("Choix incorrect");
                    break;
            }
        }while(choix!=0);


    }
}
