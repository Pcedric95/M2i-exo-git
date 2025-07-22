package org.example.exo04gestionnaire_recette.model;

import lombok.*;
import jakarta.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Recette {
    private int id;

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    @NotBlank(message = "La description est obligatoire")
    private String liste_Ingredients;

    @NotBlank(message = "Les instructions sont obligatoires")
    private String instructions;

    @NotNull(message = "Une catégorie doit être selectionné")
    private Categorie categorie;
}
