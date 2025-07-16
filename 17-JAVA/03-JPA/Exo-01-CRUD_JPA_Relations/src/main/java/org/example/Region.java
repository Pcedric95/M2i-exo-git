package org.example;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Entity
public class Region {

    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Getter
    private String nom;

    @Getter
    private double surface;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private Climat climat;

    public Region() {}

    public Region(String nom, double surface, Climat climat) {
        this.nom = nom;
        this.surface = surface;
        this.climat = climat;
    }

    // getter setter

    @Override
    public String toString() {
        return "Region{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", surface=" + surface +
                ", climat=" + climat +
                '}';
    }

    @ManyToMany
    private List<Specie> specieList;

}
