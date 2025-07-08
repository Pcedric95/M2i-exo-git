package org.example;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class IHM {
    private static List<Client> clients = new ArrayList<>();
    private static List<Evenement> evenements = new ArrayList<>();
    private static List<Billet> billets = new ArrayList<>();

    private static void reserverBillet(Scanner sc) {

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

        for (int i = 0; i < evenements.size(); i++) {
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
        Billet billet = new Billet(numeroPlace, clientChoisi, evenementChoisi, typePlace);

        // Ajouter billet au client
        clientChoisi.ajouterBillet(billet);
        evenementChoisi.ajouterBillet(billet);
        billets.add(billet);

        // confirmation
        System.out.println("Billet réservé avec succès pour " + clientChoisi.getPrenom() + " " + clientChoisi.getNom());
    }

    private static void afficherBillets(Scanner sc) {

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

        // récupérer les billets du client
        List<Billet> billetsClient = clientChoisi.getBillets();

        // --- Afficher les billets ---
        System.out.println("Liste des billets :");
        for (Billet b : billetsClient) {
            System.out.println(b);
        }
        if (billetsClient.isEmpty()) {
            System.out.println("Ce client n’a réservé aucun billet.");
        } else {
            System.out.println("Billets réservés :");
            for (Billet b : billetsClient) {
                System.out.println(b);
            }
        }
    }


    private static void creerClient(Scanner sc) {
        System.out.println("-------- Ajouter un nouveau client --------");
        System.out.print("Nom : ");
        String nom = sc.nextLine();

        System.out.print("Prénom : ");
        String prenom = sc.nextLine();

        System.out.print("Rue : ");
        String rue = sc.nextLine();

        System.out.print("Ville : ");
        String ville = sc.nextLine();
        Adresse adresse = new Adresse(rue, ville);

        System.out.print("Âge : ");
        int age = Integer.parseInt(sc.nextLine());

        System.out.print("Téléphone : ");
        String telephone = sc.nextLine();

        Client client = new Client(nom, prenom, adresse, age, telephone);
        clients.add(client);
        System.out.println("Client ajouté !");
    }


    private static void creerEvenement(Scanner sc) {
        System.out.println("----- Créer un évènement -----");

        System.out.print("Nom de l'évènement : ");
        String nom = sc.nextLine();

        System.out.print("Rue du lieu : ");
        String rue = sc.nextLine();

        System.out.print("Ville du lieu : ");
        String ville = sc.nextLine();

        System.out.print("Capacité du lieu : ");
        int capacite = Integer.parseInt(sc.nextLine());

        System.out.print("Date (format AAAA-MM-JJ) : ");
        LocalDate date = LocalDate.parse(sc.nextLine());

        System.out.print("Heure (format HH:MM) : ");
        LocalTime heure = LocalTime.parse(sc.nextLine());

        Lieu lieu = new Lieu(rue, ville, capacite);
        Evenement evenement = new Evenement(nom, lieu, date, heure, capacite);

        evenements.add(evenement);
        System.out.println("Évènement ajouté !");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choix;

        do {
            System.out.println("\n--- MENU PRINCIPAL ---");
            System.out.println("1. Créer un client");
            System.out.println("2. Créer un événement");
            System.out.println("3. Réserver un billet");
            System.out.println("4. Afficher les billets d’un client");
            System.out.println("0. Quitter");
            System.out.print("Votre choix : ");
            choix = sc.nextInt();
            sc.nextLine();

            switch (choix) {
                case 1 -> creerClient(sc);
                case 2 -> creerEvenement(sc);
                case 3 -> reserverBillet(sc);
                case 4 -> afficherBillets(sc);
                case 0 -> System.out.println("Au revoir !");
                default -> System.out.println("Choix invalide.");
            }

        } while (choix != 0);

        sc.close();
    }

}
