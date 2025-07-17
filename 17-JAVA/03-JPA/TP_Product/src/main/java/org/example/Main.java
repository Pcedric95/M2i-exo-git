package org.example;

import javax.persistence.*;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("tp_product");
        EntityManager em = emf.createEntityManager();

        // Début 'transaction'

        em.getTransaction().begin();


        // Création de produits
        ProductFood food = new ProductFood("Pizza", 10.0, LocalDate.of(2025,05,10));
        ProductElectronic electronic = new ProductElectronic("iPad", 1499.0, 10);
        ProductHousing housing = new ProductHousing("Flower pot", 10.0, 0.5, 1.0);

        // persistance

        em.persist(food);
        em.persist(electronic);
        em.persist(housing);

        // fin transaction
        em.getTransaction().commit();


        // vérification
        System.out.println("Produits enregistrés : ");
        System.out.println(food);
        System.out.println(electronic);
        System.out.println(housing);

        // Fermeture
        em.close();
        emf.close();
    }
}