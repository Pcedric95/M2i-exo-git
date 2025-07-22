package org.example.exo04gestionnaire_recette.controller;

import org.example.exo04gestionnaire_recette.model.Recette;
import org.example.exo04gestionnaire_recette.model.Categorie;
import org.example.exo04gestionnaire_recette.service.RecetteService;
import org.example.exo04gestionnaire_recette.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/recettes")
public class RecetteController {

    @Autowired
    private RecetteService recetteService;

    @Autowired
    private CategorieService categorieService;

    // Affiche liste des recettes
    @GetMapping
    public String listRecettes(Model model) {
        model.addAttribute("recettes", recetteService.getAll());
        return "recettes/list";
    }

    // Affichage formulaire d'ajout
    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("recette", new Recette());
        model.addAttribute("categories", categorieService.getAll());
        return "recettes/add";
    }

    // traitement formulaire d'ajout en post
    @PostMapping("/add")
    public String add(@Validated Recette recette) {
        recetteService.add(recette);
        return "redirect:/recettes";
    }

    //  affichage formulaire de modifs
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable int id, Model model) {
        recetteService.findById(id).ifPresent(r -> {
            model.addAttribute("recette", r);
            model.addAttribute("categories", categorieService.getAll());
        });
        return "recettes/edit";
    }

    // traitement modifications
    @PostMapping("/edit")
    public String edit(@ModelAttribute @Validated Recette recette) {
        recetteService.update(recette);
        return "redirect:/recettes";
    }

    // Suppression
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        recetteService.delete(id);
        return "redirect:/recettes";
    }
}
