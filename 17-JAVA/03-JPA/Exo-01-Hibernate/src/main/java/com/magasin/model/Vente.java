package com.magasin.model;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ventes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private StatutVente statut;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    // un seul produit par vente pour le moment
    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;
}
