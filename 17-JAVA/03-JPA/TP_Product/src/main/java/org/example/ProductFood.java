package org.example;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class ProductFood extends Product{

    private LocalDate expiryDate;

    public ProductFood(String name, double price, LocalDate expiryDate) {
        super(name, price);
        this.expiryDate = expiryDate;
    }

}
