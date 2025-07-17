package org.example;

import javax.persistence.*;
import lombok.*;
import java.time.LocalDate;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "articles")
@Data
@NoArgsConstructor
@AllArgsConstructor

public abstract class Article {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private double prix;
    private int quantiteEnStock;
    private LocalDate dateRestock;
}
