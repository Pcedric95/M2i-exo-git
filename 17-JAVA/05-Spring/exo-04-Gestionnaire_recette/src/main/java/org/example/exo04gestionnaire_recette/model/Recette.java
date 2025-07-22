package org.example.exo04gestionnaire_recette.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Recette {
    private int id;
    private String nom;
    private String liste_Ingredients;
    private String instructions;
    private Categorie categorie;
}
