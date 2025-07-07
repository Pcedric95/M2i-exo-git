package org.example;

public class Zoo {
    public static void main(String[] args) {

        lion l1 = new lion(4, "Simba");
        elephant e1 = new elephant(8, "Barry");

        EnclosDesLions enclosLions = new EnclosDesLions();
        EnclosDesElephants enclosElephants = new EnclosDesElephants();

        enclosLions.ajouterAnimal(l1);
        enclosElephants.ajouterAnimal(e1);


        System.out.println("\n--- Enclos des lions ---");
        enclosLions.afficherAnimaux();
        System.out.println("\n--- Enclos des elephants ---");
        enclosElephants.afficherAnimaux();
    }
}
