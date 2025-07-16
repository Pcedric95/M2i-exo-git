package org.example;

import javax.persistence.*;
import java.util.List;


@Entity
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private double surface;

    @Enumerated(EnumType.STRING)
    private Climat climat;

    public Region() {}

    public Region(String nom, double surface, Climat climat) {
        this.nom = nom;
        this.surface = surface;
        this.climat = climat;
    }

    // getter setter

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }
    public double getSurface() { return surface; }

    public Climat getClimat() { return climat; }
    public void setClimat(Climat climat) { this.climat = climat; }

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
