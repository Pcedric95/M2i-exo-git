package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class IHM {
    private static List<Client> clients = new ArrayList<>();
    private static List<Evenement> evenements = new ArrayList<>();
    private static List<Billet> billets = new ArrayList<>();

    private void reserverBillet(Scanner sc){

        // -------------  Clients ---------------------


        //Afficher client avec les index

        System.out.println("Liste des clients :");

        for (int i = 0; i < clients.size(); i++) {
            Client c = clients.get(i);
            System.out.println(i + " - " + c.getPrenom() + " " + c.getNom());
        }

        // Demander à l'utilisateur de choisir un client
        System.out.print("Veuillez choisir un client :");
        int indexClient = sc.nextInt();
        sc.nextLine(); // vider l'entrée utilisateur

        // Récupérer le client selectionné
        Client clientChoisi = clients.get(indexClient);

        // --------------- évènements  --------------------

        // Afficher les évènements avec les index
        System.out.println("Liste des évènements :");

        for (int i = 0; i < evenements.size(); i++){
            Evenement e = evenements.get(i);
            System.out.println(i + " - " + e);
        }

        // Demande à l'user de choisir un évènement
        System.out.print("Veuillez choisir un evenements :");
        int indexEvenements = sc.nextInt();
        sc.nextLine();

        // Récupérer evenements
        Evenement evenementChoisi = evenements.get(indexEvenements);

        // Demander user numéro place + type de place
        System.out.println("Veuillez entrer le numéro de place :");
        int numeroPlace = sc.nextInt();
        sc.nextLine();
        System.out.println("Veuillez entrer le type de place : ");
        String typePlace = sc.nextLine();

        // Créer un billet
        Billet billet = new Billet(numeroPlace,clientChoisi, evenementChoisi,typePlace);

        // Ajouter billet au client
        clientChoisi.ajouterBillet(billet);
        evenementChoisi.ajouterBillet(billet);
        billets.add(billet);

        // confirmation
        System.out.println("Billet réservé avec succès pour " + clientChoisi.getPrenom() + " " + clientChoisi.getNom());
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
