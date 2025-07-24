package org.example.exo06_api_gestion_meubles.model;

import lombok.*;
import jakarta.persistence.*;
import java.util.UUID;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    private Furniture furniture;

    private int quantity;
}
