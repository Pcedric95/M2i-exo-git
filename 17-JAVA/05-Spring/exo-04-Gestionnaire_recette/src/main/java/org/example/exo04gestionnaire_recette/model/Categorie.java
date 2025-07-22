package org.example.exo04gestionnaire_recette.model;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Categorie {

    private int id;
    @NotBlank(message = "Le nom est obligatoire")
    private String nom;
    @NotBlank(message = "La description est obligatoire")
    private String description;
}
