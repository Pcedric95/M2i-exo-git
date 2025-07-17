package com.magasin.dao;



import com.magasin.model.Article;
import com.magasin.model.ArticleMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import java.util.List;



public class ArticleDAO {
    private static SessionFactory sessionFactory;

    // créer la session factory
    public ArticleDAO() {
        // Initialisation de la SessionFactory
        sessionFactory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Article.class)
                .addAnnotatedClass(ArticleMode.class)
                .buildSessionFactory();
    }

    // Ajouter un article
    public void save (Article article) {
        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();
            session.save(article);
            session.getTransaction().commit();
        }
    }

    // Consulter un article avec son ID
    public Article findById(Long id) {
        try (Session session = sessionFactory.openSession()) {
            return session.get(Article.class, id);
        }
    }


    // Lister tous les articles
    public List<Article> findAll() {
        try (Session session = sessionFactory.openSession()) {
            return session.createQuery("FROM Article", Article.class).list();
        }
    }


    // Modifier un article
    public void update(Article article) {
        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();
            session.update(article);
            session.getTransaction().commit();
        }
    }

    // Supprimer un article
    public void delete(Long id) {
        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();
            Article article = session.get(Article.class, id);
            if (article != null) {
                session.delete(article);
            }
            session.getTransaction().commit();
        }
    }

    // Fermer la Sessionfactory
    public void close() {
        if (sessionFactory != null) {
            sessionFactory.close();
        }
    }

}
