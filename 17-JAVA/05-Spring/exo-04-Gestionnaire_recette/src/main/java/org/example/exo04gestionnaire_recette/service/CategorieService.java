package org.example.exo04gestionnaire_recette.service;

import org.example.exo04gestionnaire_recette.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.exo04gestionnaire_recette.model.Categorie;


import java.util.List;
import java.util.Optional;



@Service
public class CategorieService {

    @Autowired
    private CategorieRepository categorieRepository;

    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }

    public Categorie add(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public Optional<Categorie> findById(int id) {
        return categorieRepository.findById(id);
    }

    public void update(Categorie updatedCategorie) {
        categorieRepository.save(updatedCategorie);
    }

    public void delete(int id) {
        categorieRepository.deleteById(id);
    }
}
