package com.magasin.model;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "articles_mode")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleMode extends Article {
    private String categorie; // homme, femme, enfant
    private String taille; // S, M, L, etc.
}