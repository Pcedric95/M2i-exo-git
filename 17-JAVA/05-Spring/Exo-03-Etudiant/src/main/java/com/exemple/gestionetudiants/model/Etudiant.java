package com.exemple.gestionetudiants.model;

import lombok.*;

@Data
public class Etudiant {
    private Long id;
    private String nom;
    private String prenom;
    private int age;
    private String email;
}
