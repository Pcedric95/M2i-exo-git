package com.exemple.gestionetudiants.repository;

import com.exemple.gestionetudiants.model.Etudiant;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Repository
public class EtudiantRepository {
    private final Map<Long, Etudiant> etudiants = new HashMap<>();
    private final AtomicLong idCounter = new AtomicLong();

    public List<Etudiant> findAll() { return new ArrayList<>(etudiants.values()); }

    public Etudiant save(Etudiant e) {
        if (e.getId() == null) e.setId(idCounter.incrementAndGet());
        etudiants.put(e.getId(), e);
        return e;
    }

    public Optional<Etudiant> findById(Long id) {
        return Optional.ofNullable(etudiants.get(id));
    }

    public List<Etudiant> findByNom(String nom) {
        return etudiants.values().stream()
                .filter(e -> e.getNom().equalsIgnoreCase(nom))
                .collect(Collectors.toList());
    }
}
