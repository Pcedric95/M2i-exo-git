package org.example.exo06_api_gestion_meubles.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Furniture {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private String description;
    private double price;
    private int stock;

}
