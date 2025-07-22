package org.example.exo04gestionnaire_recette.controller;

import org.example.exo04gestionnaire_recette.model.Categorie;
import org.example.exo04gestionnaire_recette.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/categories")
public class CategorieController {

    @Autowired
    private CategorieService categorieService;

    // 🔹 Affichage de toutes les catégories
    @GetMapping
    public String listCategories(Model model) {
        model.addAttribute("categories", categorieService.getAll());
        return "categories/list";
    }

    // 🔹 Formulaire d'ajout
    @GetMapping("/add")
    public String addForm(Model model) {
        model.addAttribute("categorie", new Categorie());
        return "categories/add";
    }

    // 🔹 Traitement du formulaire d'ajout avec validation
    @PostMapping("/add")
    public String add(@ModelAttribute @Validated Categorie categorie, BindingResult result) {
        if (result.hasErrors()) {
            return "categories/add";
        }
        categorieService.add(categorie);
        return "redirect:/categories";
    }

    // 🔹 Formulaire de modification
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable int id, Model model) {
        categorieService.findById(id).ifPresent(c -> model.addAttribute("categorie", c));
        return "categories/edit";
    }

    // 🔹 Traitement de la modification avec validation
    @PostMapping("/edit")
    public String edit(@ModelAttribute @Validated Categorie categorie, BindingResult result) {
        if (result.hasErrors()) {
            return "categories/edit";
        }
        categorieService.update(categorie);
        return "redirect:/categories";
    }

    // 🔹 Suppression
    @GetMapping("/delete/{id}")
    public String deleteCategorie(@PathVariable int id) {
        categorieService.delete(id);
        return "redirect:/categories";
    }
}
