package org.example.exo04gestionnaire_recette.repository;

import org.example.exo04gestionnaire_recette.model.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Integer> {
}
