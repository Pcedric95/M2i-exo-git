package org.example;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;



@Setter
@Getter
@Entity
public class Travellog {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private Observation observation;

    private double distanceKm;

    @Enumerated
    private TravelMode mode;

    public Travellog() {}

    public Travellog(Observation observation, double distanceKm, TravelMode mode) {
        this.observation = observation;
        this.distanceKm = distanceKm;
        this.mode = mode;
    }

}
