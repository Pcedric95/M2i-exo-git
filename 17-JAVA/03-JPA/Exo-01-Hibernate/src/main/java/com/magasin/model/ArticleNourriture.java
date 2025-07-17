package com.magasin.model;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "articles_nourriture")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ArticleNourriture extends Article {
    private LocalDate datePeremption;

    public ArticleNourriture(String title, double prix, int quantite, LocalDate dateRestock, LocalDate datePeremption) {
        super(null, title, prix, quantite, dateRestock);
        this.datePeremption = datePeremption;
    }

}
