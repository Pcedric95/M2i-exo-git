package org.example.exo04gestionnaire_recette.service;

import org.example.exo04gestionnaire_recette.repository.RecetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.exo04gestionnaire_recette.model.Recette;

import java.util.List;
import java.util.Optional;

@Service
public class RecetteService {

    @Autowired
    private RecetteRepository recetteRepository;

    public List<Recette> getAll() {
        return recetteRepository.findAll();
    }

    public Recette add(Recette recette) {
        return recetteRepository.save(recette);
    }

    public Optional<Recette> findById(int id) {
        return recetteRepository.findById(id);
    }

    public Recette update(Recette recette) {
        return recetteRepository.save(recette);
    }

    public void delete(int id) {
        recetteRepository.deleteById(id);
    }
}
