package org.example;

import lombok.*;
import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@ToString(callSuper = true)
public class ProductElectronic extends Product {

    private int batteryDuration;

    public ProductElectronic(String name, double price, int batteryDuration) {
        super(name, price);
        this.batteryDuration = batteryDuration;
    }
}
