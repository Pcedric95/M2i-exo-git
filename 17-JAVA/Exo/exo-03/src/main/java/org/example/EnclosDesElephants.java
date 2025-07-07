package org.example;

import java.util.ArrayList;
import java.util.List;

public class EnclosDesElephants implements Enclos<elephant>{

    public List<elephant> elephants = new ArrayList<>();

    public void ajouterAnimal(elephant elephant){
        elephants.add(elephant);
    }

    @Override
    public void afficherAnimaux() {
        System.out.println("Les éléphants présents dans l'enclos : ");

        for (elephant animal : elephants){
            System.out.println("-" + animal.name + ", " + animal.age + " ans");
        }
    }
}
