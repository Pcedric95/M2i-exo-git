package org.example;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import org.example.Travellog;



@Entity
public class Observation {
    @Setter
    @Getter
    @Id
    @GeneratedValue
    private Long id;


    // Une observation pour une espèce, mais une espèce peut avoir plusieurs observations
    @Setter
    @Getter
    @ManyToOne
    private Specie specie;

    @Setter
    @Getter
    private String observerName;

    @Setter
    @Getter
    private String location;

    @Setter
    @Getter
    private double latitude;

    @Setter
    @Getter
    private double longitude;

    @Setter
    @Getter
    private LocalDate observationDate;

    @Setter
    @Getter
    private String comment;

    // Bidirectionnel — chaque observation a un seul déplacement
    @OneToOne(mappedBy = "observation")
    private Travellog travellog;



    public Observation() {}

    public Observation(Specie specie, String observerName, String location, double latitude, double longitude, LocalDate observationDate, String comment) {
        this.specie = specie;
        this.observerName = observerName;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.observationDate = observationDate;
        this.comment = comment;
    }
}
