package org.example;


import javax.persistence.*;
import java.util.List;


@Entity
public class Specie
{

    @Id
    @GeneratedValue

    private Long id;
    private String commonName;
    private String scientificName;

    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToMany(mappedBy = "specieList")
    private List<Region> regionList;

    public Specie() {}

    public Specie(String commonName, String scientificName, Category category) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.category = category;
    }

    // getter setter

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getScientificName() {
        return scientificName;
    }

    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Region> getRegionList() {
        return regionList;
    }

    public void setRegionList(List<Region> regionList) {
        this.regionList = regionList;
    }
}
