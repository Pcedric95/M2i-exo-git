package org.example.exo04gestionnaire_recette.model;

import jakarta.persistence.*;
import lombok.*;
import jakarta.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Recette {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    @NotBlank(message = "La description est obligatoire")
    private String liste_Ingredients;

    @NotBlank(message = "Les instructions sont obligatoires")
    private String instructions;


    @NotNull(message = "Une catégorie doit être selectionné")
    @ManyToOne // Plusieurs recettes vers une catégorie
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;
}
