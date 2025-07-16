package org.example;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

//TIP Pour <b>exécuter</b> un code, appuyer sur <shortcut actionId="Run"/> ou
// cliquez sur licône {0} dans la marge.
public class Main {
    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Exo_01_JPA");
        EntityManager em = emf.createEntityManager();

/*        *//* Créer une région *//*
        Region r = new Region("Auvergne", 100000, Climat.HUMIDE);

        //
        em.getTransaction().begin();

        // Insert
        em.persist(r);
        em.getTransaction().commit();

        // Lecture
        Region r2 = em.find(Region.class, r.getId());
        System.out.println("Région trouvée :" + r2);

        // Modification
        em.getTransaction().begin();
        r2.setNom("Nouvelle Auvergne");
        em.flush();
        em.getTransaction().commit();

        // Suppression
        em.getTransaction().begin();
        em.remove(r2);
        

        em.close();
        emf.close();*/

        //  ----------------------  Tests    ------------------------------

        em.getTransaction().begin();

        // Créer une région
        Region region = new Region("Auvergne", 100000, Climat.HUMIDE);
        region.setNom("Nouvelle Auvergne");
        region.setClimat(Climat.CONTINENTAL);
        em.persist(region);

        // créer une espèce
        Specie specie = new Specie("Chouette Blanche", "Chouettose", Category.BIRD);
        em.persist(specie);

        // lier cette espèce à la région
        region.setSpecieList(List.of(specie));
        specie.setRegions(List.of(region));

        // Créer une observation
        Observation observation = new Observation(specie, "Paul", "Lyon", 45.789, 3.098, LocalDate.now(), "Vu depuis une montagne");
        em.persist(observation);

        // créer un déplacement
        Travellog travellog = new Travellog(observation, 8.6, TravelMode.BIKE);
        em.persist(travellog);


        em.getTransaction().commit();
        em.close();
        emf.close();
    }
}