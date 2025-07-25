package org.example.exo06_api_gestion_meubles.model;

import lombok.*;
import jakarta.persistence.*;
import org.hibernate.engine.spi.CascadeStyle;

import java.util.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cart {

    @Id
    @GeneratedValue
    private UUID id;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> items = new ArrayList<>();

    private double totalPrice;
}
