package org.example.exo04gestionnaire_recette.repository;

import org.example.exo04gestionnaire_recette.model.Recette;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecetteRepository extends JpaRepository<Recette, Integer> {
}
