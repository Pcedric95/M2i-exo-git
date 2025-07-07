package org.example;

import java.util.Scanner;

public class Zoo {
    public static void main(String[] args) {



        lion l1 = new lion(4, "Simba");
        elephant e1 = new elephant(8, "Barry");


        EnclosDesLions enclosLions = new EnclosDesLions();
        EnclosDesElephants enclosElephants = new EnclosDesElephants();

        /*

        --- TESTS SANS IHM : conservation pour référence ---

        enclosLions.ajouterAnimal(l1);
        enclosElephants.ajouterAnimal(e1);


        System.out.println("\n--- Enclos des lions ---");
        enclosLions.afficherAnimaux();
        System.out.println("\n--- Enclos des elephants ---");
        enclosElephants.afficherAnimaux();

        */

        // IHM

        Scanner scanner = new Scanner(System.in);
        int choix =  -1;

        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Ajouter un lion");
            System.out.println("2. Ajouter elephant");
            System.out.println("3. Créer un enclos");
            System.out.println("0. Quitter le menu");
            choix  = scanner.nextInt();

            switch (choix){
                case 1:
                    scanner.nextLine();
                    // Demande nom et age
                    System.out.print("Nom du lion : ");
                    String nomLion = scanner.nextLine();
                    System.out.print("Âge du lion : ");
                    int ageLion = scanner.nextInt();

                    // Créer et ajouter l'animal
                    lion nouveauLion = new lion(ageLion, nomLion);
                    enclosLions.ajouterAnimal(nouveauLion);
                    break;
                case 2:
                    scanner.nextLine();
                    // Demande nom et age
                    System.out.print("Nom de l'éléphant : ");
                    String nomElephant = scanner.nextLine();
                    System.out.print("Âge de l'éléphant : ");
                    int ageElephant = scanner.nextInt();
                    // Créer et ajouter l'animal
                    elephant nouvelElephant = new elephant(ageElephant, nomElephant);
                    enclosElephants.ajouterAnimal(nouvelElephant);
                    break;
                case 3:
                    int sousChoix;
                    do {
                        System.out.println("\n--- Créer un enclos --- ");
                        System.out.println("1. Enclos de lions");
                        System.out.println("2. Enclos d’éléphants");
                        System.out.println("0. Retour");
                        sousChoix = scanner.nextInt();
                        switch (sousChoix) {
                            case 1:
                                enclosLions = new EnclosDesLions();
                                System.out.println("Nouvel enclos de lions créé.");
                                break;
                            case 2:
                                enclosElephants = new EnclosDesElephants();
                                System.out.println("Nouvel enclos d’éléphants créé.");
                                break;
                        }
                    } while (sousChoix != 0);
                    break;
            }



        } while(choix != 0);




    }
}
