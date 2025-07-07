package org.example;

import java.util.ArrayList;
import java.util.List;


public class EnclosDesLions implements Enclos<lion>{
    private List<lion> lions = new ArrayList<>();

    @Override
    public void ajouterAnimal(lion animal) {
        lions.add(animal);
    }

    @Override
    public void afficherAnimaux() {
        System.out.println("🦁 Lions présents dans l'enclos :");

        for(lion animal : lions){
            System.out.println("- " + animal.name + ", " + animal.age + " ans");

        }
    }
}
