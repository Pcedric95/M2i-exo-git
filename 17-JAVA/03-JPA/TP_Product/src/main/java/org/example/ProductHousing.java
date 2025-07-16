package org.example;

import lombok.*;
import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@ToString(callSuper = true)
public class ProductHousing extends Product {

    private double height;
    private double width;

    public ProductHousing(String name, double price, double height, double width) {
        super(name, price);
        this.height = height;
        this.width = width;
    }
}
