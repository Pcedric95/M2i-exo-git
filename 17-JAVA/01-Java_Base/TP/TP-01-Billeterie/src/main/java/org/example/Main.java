package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        // Test adresse
        Adresse adresseTest = new Adresse("12 rue des Lilas", "Lyon");
        System.out.println(adresseTest);

        // Test lieu
        Lieu salle = new Lieu("10 avenue du Parc", "Villeurbanne", 300);
        System.out.println(salle);


    }
}