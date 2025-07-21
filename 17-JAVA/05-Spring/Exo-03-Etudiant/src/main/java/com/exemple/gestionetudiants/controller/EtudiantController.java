package com.exemple.gestionetudiants.controller;

import com.exemple.gestionetudiants.model.Etudiant;
import com.exemple.gestionetudiants.repository.EtudiantRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class EtudiantController {
    private final EtudiantRepository repository;

    public EtudiantController(EtudiantRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public String accueil() { return "accueil"; }

    @GetMapping("/etudiants")
    public String listeEtudiants(Model model) {
        model.addAttribute("etudiants", repository.findAll());
        return "liste";
    }

    @GetMapping("/inscription")
    public String inscriptionForm(Model model) {
        model.addAttribute("etudiant", new Etudiant());
        return "inscription";
    }

    @PostMapping("/inscription")
    public String soumettreInscription(@ModelAttribute Etudiant etudiant) {
        repository.save(etudiant);
        return "redirect:/etudiants";
    }

    @GetMapping("/etudiant/{id}")
    public String afficherDetails(@PathVariable Long id, Model model) {
        var etudiant = repository.findById(id);
        if (etudiant.isEmpty()) {
            return "redirect:/etudiants";
        }
        model.addAttribute("etudiant", etudiant.get());
        return "details";
    }

    @GetMapping("/recherche")
    public String rechercheForm() {
        return "recherche";
    }

    @PostMapping("/recherche")
    public String resultatRecherche(@RequestParam String nom, Model model) {
        var resultat = repository.findByNom(nom);
        model.addAttribute("resultats", resultat);
        model.addAttribute("recherche", nom);
        return "resultat_recherche";
    }
}
