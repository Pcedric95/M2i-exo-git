package com.magasin.model;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;


@Entity
@Table(name = "clients")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Client {
    @Id
    @GeneratedValue
    private Long id;

    private String nom;
    private String prenom;
    private String email;


    // Historique de ses achats
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Vente> ventes;
}
