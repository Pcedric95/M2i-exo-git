package org.example.exo04gestionnaire_recette.controller;

import org.example.exo04gestionnaire_recette.model.Categorie;
import org.example.exo04gestionnaire_recette.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/categories")
public class CategorieController {

    @Autowired
    private CategorieService categorieService;

    // Affichage liste de toutes les catégories
    @GetMapping
    public String listCategories(Model model) {
        model.addAttribute("categories", categorieService.getAll());
        return "categories/list";
    }

    // Affichage formulaire d'ajout de nouvelle catégorie
    @GetMapping("/add")
    public String addForm(Model model) {
        model.addAttribute("categorie", new Categorie());
        return "categories/add";
    }

    // traitement formulaire d'ajout en post
    @PostMapping("/add")
    public String add(@Validated Categorie categorie) {
        categorieService.add(categorie);
        return "redirect:/categories";
    }


    // affichage formulaire pour une catégorie donnée
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable int id, Model model) {
        categorieService.findById(id).ifPresent(c -> model.addAttribute("categorie", c));
        return "categories/edit";
    }

    // traitement modifications catégorie
    @PostMapping("/edit")
    public String edit(@Validated Categorie categorie) {
        categorieService.update(categorie);
        return "redirect:/categories";
    }

    // suppression d'une catégorie
    @GetMapping("/delete/{id}")
    public String deleteCategorie(@PathVariable int id) {
        categorieService.delete(id);
        return "redirect:/categories";
    }
}
