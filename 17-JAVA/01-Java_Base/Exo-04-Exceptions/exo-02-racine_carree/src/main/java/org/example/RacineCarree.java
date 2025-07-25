package org.example;

import java.util.Scanner;

public class RacineCarree {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Entrez un nombre entier positif : ");
        String saisie = scanner.nextLine();


        try{
            int nombre = Integer.parseInt(saisie);
            if (nombre < 0){
                System.out.println("Erreur : le nombre entré est negatif");
            }else {
                double racine = Math.sqrt(nombre);
                System.out.println("La racine carrée de " + nombre + " est " + racine);
            }
        }catch (NumberFormatException e){
            System.out.println("Erreur : vous devez entrer un nombre positif.");
        }
    }
}
