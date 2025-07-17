package com.magasin.dao;

import com.magasin.model.Vente;
import com.magasin.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class VenteDAO {

    public void save(Vente vente) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();
            session.save(vente);
            tx.commit();
        }
    }

    public List<Vente> findAll() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM Vente", Vente.class).list();
        }
    }
}
