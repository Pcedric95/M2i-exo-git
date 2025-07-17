package com.magasin;

import com.magasin.dao.ArticleDAO;
import com.magasin.model.ArticleMode;
import com.magasin.model.ArticleNourriture;
import com.magasin.model.ArticleElectronique;
import com.magasin.model.Client;
import com.magasin.model.Vente;
import com.magasin.model.StatutVente;
import com.magasin.dao.ClientDAO;
import com.magasin.dao.VenteDAO;

import java.time.LocalDate;
import java.util.List;


public class Main {
    public static void main(String[] args) {


        // Création d'un nouvel article ArticleMode (t-shirt)

        ArticleMode articleMode = new ArticleMode(
                "T-shirt Homme rouge",
                15.99,
                35,
                LocalDate.now(),
                "Homme",
                "L"
        );

        // Initialisation du DAO
        ArticleDAO articleDAO = new ArticleDAO();

        // Ajout de l'article dans la base de données
        articleDAO.save(articleMode);
        System.out.println("T-shirt ajouté avec succès ! ID : " + articleMode.getId());

        // Consultation de l'article
        ArticleMode retrievedTshirt = (ArticleMode) articleDAO.findById(articleMode.getId());
        if (retrievedTshirt != null) {
            System.out.println("Article récupéré : " + retrievedTshirt.getTitle() +
                    ", Catégorie : " + retrievedTshirt.getCategorie() +
                    ", Taille : " + retrievedTshirt.getTaille());
        }



        // ---------------     Nourriture      ----------------------------
        // Création d'un article Nourriture
        ArticleNourriture viennoiseries = new ArticleNourriture(
                "Pain au chocolat",
                1.99,
                120,
                LocalDate.now(),
                LocalDate.now().plusDays(7)

        );

        // Enregistrer dans bdd
        articleDAO.save(viennoiseries);
        System.out.println("Article ajouté ! ID : " + viennoiseries.getId());

        // Récupérer depuis bdd
        ArticleNourriture painChocoDepuisBDD = (ArticleNourriture) articleDAO.findById(viennoiseries.getId());
        if (painChocoDepuisBDD != null) {
            System.out.println("Article récupéré : " + painChocoDepuisBDD.getTitle() +
                    ", Stock : " + painChocoDepuisBDD.getQuantiteEnStock() +
                    ", Péremption : " + painChocoDepuisBDD.getDatePeremption());
        }


        // ---------------     Electronique      ----------------------------

        ArticleElectronique smartphone = new ArticleElectronique(
                "Samsung Galaxy S23 Ultra",
                1299.99,
                16,
                LocalDate.now(),
                48
        );

        // enregistrement dans la bdd
        articleDAO.save(smartphone);
        System.out.println("L'article a bien été ajouté ! ID : " + smartphone.getId());

        // Récupération dans la BDD
        ArticleElectronique smartphoneDepuisBDD = (ArticleElectronique) articleDAO.findById((smartphone.getId()));
        if (smartphoneDepuisBDD != null ) {
            System.out.println("Article récupéré : " + smartphoneDepuisBDD.getTitle() + ", Prix : " + smartphoneDepuisBDD.getPrix() + ", quantité en stock : " + smartphoneDepuisBDD.getQuantiteEnStock());
        }

        // ---------------     Client      ----------------------------

        // Création d'un client
        Client client = new Client();
        client.setNom("Marc");
        client.setPrenom("Olivier");
        client.setEmail("email@example.com");

        ClientDAO clientDAO = new ClientDAO();
        clientDAO.save(client);

        // Création d'une vente (article déjà là)
        Vente vente = new Vente();
        vente.setDate(LocalDate.now());
        vente.setStatut(StatutVente.EN_COURS);
        vente.setClient(client);
        vente.setArticle(smartphone);

        VenteDAO venteDAO = new VenteDAO();
        venteDAO.save(vente);

        System.out.println("Vente enregistrée ! ID : " + vente.getId());


        // ---------------------   Vente ----------------

        System.out.println("Liste des ventes : ");

        List<Vente> ventes = venteDAO.findAll();

        for (Vente v : ventes) {
            System.out.println("Vente ID : " + v.getId() +
                    " | Client : " + v.getClient().getNom() +
                    " | Article : " + v.getArticle().getTitle() +
                    " | Date : " + v.getDate() +
                    " | Statut : " + v.getStatut());
        }

        // Fermeture de la SessionFactory
        articleDAO.close();
    }
}