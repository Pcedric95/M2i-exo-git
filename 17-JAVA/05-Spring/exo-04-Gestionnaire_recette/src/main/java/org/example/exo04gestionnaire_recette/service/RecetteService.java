package org.example.exo04gestionnaire_recette.service;

import org.springframework.stereotype.Service;
import org.example.exo04gestionnaire_recette.model.Recette;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class RecetteService {
    private final List<Recette> recetteList = new ArrayList<>();
    private final AtomicInteger idGenerator = new AtomicInteger(0);

    public List<Recette> getAll() {
        return recetteList;
    }

    public Recette add(Recette recette) {
        if (recette.getId() == 0) {
            recette.setId(idGenerator.incrementAndGet());
            recetteList.add(recette);
        }
        return recette;
    }

    public Optional<Recette> findById(int id) {
        return recetteList.stream().filter(r -> r.getId() == id).findFirst();
    }

    public void update(Recette updatedRecette) {
        findById(updatedRecette.getId()).ifPresent(r -> {
            r.setNom(updatedRecette.getNom());
            r.setListe_Ingredients(updatedRecette.getListe_Ingredients());
            r.setInstructions(updatedRecette.getInstructions());
            r.setCategorie(updatedRecette.getCategorie());
        });
    }

    public void delete(int id) {
        recetteList.removeIf(r -> r.getId() == id);
    }
}
