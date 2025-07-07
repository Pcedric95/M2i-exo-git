package org.example;

import java.util.Arrays;

public class Accestableau {
    public static void main(String[] args) {

        int[] tableau = {1, 2, 3, 4, 5};

        // Accès à l'élément 4 :
        System.out.println("Element à l'index 4 : " + tableau[4]);

        // Accès à l'élément 5 -> erreur index hors limite
        try{
            System.out.print("Elément 5 : " + tableau[5]);
        } catch (Exception e) {
            System.out.println("Erreur inattendue : " + e.getMessage());
        }

    }
}
