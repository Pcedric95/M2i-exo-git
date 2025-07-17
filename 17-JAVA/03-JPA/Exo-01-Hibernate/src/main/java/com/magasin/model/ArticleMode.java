package com.magasin.model;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "articles_mode")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleMode extends Article {
    private String categorie; // homme, femme, enfant
    private String taille;    // S, M, L, XL, etc.

    // Constructeur personnalisé
    public ArticleMode(String title, double prix, int quantite, LocalDate dateRestock, String categorie, String taille) {
        super(null, title, prix, quantite, dateRestock); // null pour l'ID
        this.categorie = categorie;
        this.taille = taille;
    }
}
