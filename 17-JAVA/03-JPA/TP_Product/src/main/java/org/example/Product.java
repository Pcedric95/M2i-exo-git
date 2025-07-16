package org.example;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@ToString
@NoArgsConstructor
public abstract class Product {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private double price;


    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}
