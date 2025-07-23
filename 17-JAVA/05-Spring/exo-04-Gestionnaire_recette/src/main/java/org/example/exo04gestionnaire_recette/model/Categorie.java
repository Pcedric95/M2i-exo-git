package org.example.exo04gestionnaire_recette.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.util.List;
import java.util.ArrayList;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Categorie {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "Le nom est obligatoire")
    private String nom;
    @NotBlank(message = "La description est obligatoire")
    private String description;

    // Ajout : liste des recettes associées à cette catégorie
    @OneToMany(mappedBy = "categorie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Recette> recettes = new ArrayList<>();

}
