package org.example;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
public class Observation {
    @Id
    @GeneratedValue
    private Long id;


    // Une observation pour une espèce, mais une espèce peut avoir plusieurs observations
    @ManyToOne
    private Specie specie;

    private String observerName;

    private String location;
    private double latitude;
    private double longitude;
    private LocalDate observationDate;
    private String comment;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Specie getSpecie() {
        return specie;
    }

    public void setSpecie(Specie specie) {
        this.specie = specie;
    }

    public String getObserverName() {
        return observerName;
    }

    public void setObserverName(String observerName) {
        this.observerName = observerName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public LocalDate getObservationDate() {
        return observationDate;
    }

    public void setObservationDate(LocalDate observationDate) {
        this.observationDate = observationDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
