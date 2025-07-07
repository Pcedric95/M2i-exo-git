package org.example;
import java.util.Scanner;


public class ConversionSaisie {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Entrez un nombre entier : ");
        String saisie = scanner.nextLine();

        try {
            int nombre = Integer.parseInt(saisie);
            System.out.print("Vous avez saisie le nombre : " + nombre);
        } catch (NumberFormatException e) {
            System.out.print("Erreur : votre saisie n'est pas nombre entier valdie !");
        }

    }
}
