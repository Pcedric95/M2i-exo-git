package org.example.environement.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.environement.entity.enums.TravelMode;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Travellog {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "observation_id")
    private Observation observation;
    private double distanceKm;

    @Enumerated(EnumType.STRING)
    private TravelMode mode;

    private double estimatedCo2Kg;

    public void calculateCO2(){
        double facteurEmission = switch (getMode()) {
            case WALKING , BIKE -> 0;
            case CAR -> 0.22;
            case BUS -> 0.11;
            case TRAIN -> 0.03;
            case PLANE -> 0.259;
        };
        this.estimatedCo2Kg = this.distanceKm * facteurEmission;
    }
}
