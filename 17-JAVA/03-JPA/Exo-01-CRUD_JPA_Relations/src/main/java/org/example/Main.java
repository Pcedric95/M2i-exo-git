package org.example;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

//TIP Pour <b>exécuter</b> un code, appuyer sur <shortcut actionId="Run"/> ou
// cliquez sur licône {0} dans la marge.
public class Main {
    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Exo_01_JPA");
        EntityManager em = emf.createEntityManager();

        // Créer une région
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
        emf.close();

    }
}