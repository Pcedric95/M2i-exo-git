package com.magasin.model;


import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "articles_electronique")
@Data
@NoArgsConstructor
@AllArgsConstructor


public class ArticleElectronique extends Article{
    private int dureeBatterie;

    public ArticleElectronique(String title, double prix, int quantite, LocalDate dateRestock, int dureeBatterie) {
        super(null, title, prix, quantite, dateRestock);
        this.dureeBatterie = dureeBatterie;
    }
}
