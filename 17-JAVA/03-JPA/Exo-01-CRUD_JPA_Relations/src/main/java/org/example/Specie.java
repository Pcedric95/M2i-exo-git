package org.example;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Entity
public class Specie
{

    @Getter
    @Setter
    @Id
    @GeneratedValue
    private Long id;

    @Getter
    @Setter
    private String commonName;

    @Getter
    @Setter
    private String scientificName;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private Category category;

    @Setter
    @Getter
    @ManyToMany(mappedBy = "specieList")
    private List<Region> regionList;


    @OneToMany(mappedBy = "specie")
    private List<Observation> observations;


    public Specie() {}

    public Specie(String commonName, String scientificName, Category category) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.category = category;
    }

    public void setRegions(List<Region> region) {
        this.regionList = region;
    }

}
