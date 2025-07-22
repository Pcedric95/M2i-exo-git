package org.example.exo04gestionnaire_recette.controller;

import org.example.exo04gestionnaire_recette.model.Recette;
import org.example.exo04gestionnaire_recette.service.RecetteService;
import org.example.exo04gestionnaire_recette.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/recettes")
public class RecetteController {

    @Autowired
    private RecetteService recetteService;

    @Autowired
    private CategorieService categorieService;

    // Liste des recettes
    @GetMapping
    public String listRecettes(Model model) {
        model.addAttribute("recettes", recetteService.getAll());
        return "recettes/list";
    }

    // Formulaire d'ajout
    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("recette", new Recette());
        model.addAttribute("categories", categorieService.getAll());
        return "recettes/add";
    }

    // Traitement ajout avec validation
    @PostMapping("/add")
    public String add(@ModelAttribute @Validated Recette recette, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("categories", categorieService.getAll());
            return "recettes/add";
        }
        recetteService.add(recette);
        return "redirect:/recettes";
    }

    // Formulaire d'édition
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable int id, Model model) {
        recetteService.findById(id).ifPresent(r -> {
            model.addAttribute("recette", r);
            model.addAttribute("categories", categorieService.getAll());
        });
        return "recettes/edit";
    }

    //  Traitement modification avec validation
    @PostMapping("/edit")
    public String edit(@ModelAttribute @Validated Recette recette, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("categories", categorieService.getAll());
            return "recettes/edit";
        }
        recetteService.update(recette);
        return "redirect:/recettes";
    }

    //  Suppression
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        recetteService.delete(id);
        return "redirect:/recettes";
    }
}
