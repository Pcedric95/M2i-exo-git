package org.example.exo04gestionnaire_recette.service;

import org.springframework.stereotype.Service;
import org.example.exo04gestionnaire_recette.model.Categorie;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;


@Service
public class CategorieService {
    private final List<Categorie> categorieList = new ArrayList<>();
    private final AtomicInteger idGenerator = new AtomicInteger(0);

    public List<Categorie> getAll() {
        return categorieList;
    }
    public Categorie add(Categorie categorie) {
        if (categorie.getId() == 0) {
            categorie.setId(idGenerator.incrementAndGet());
            categorieList.add(categorie);
        }
        return categorie;
    }

    public Optional<Categorie> findById(int id) {
        return categorieList.stream().filter(c -> c.getId() == id).findFirst();
    }

    public void update(Categorie updatedCategorie) {
        findById(updatedCategorie.getId()).ifPresent(c -> {
            c.setNom(updatedCategorie.getNom());
            c.setDescription(updatedCategorie.getDescription());
        });
    }

    public void delete(int id) {
        categorieList.removeIf(c -> c.getId() == id);
    }
}
