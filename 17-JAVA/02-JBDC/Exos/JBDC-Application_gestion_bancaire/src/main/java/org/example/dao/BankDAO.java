package org.example.dao;

import org.example.model.Customer;
import org.example.model.BankAccount;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class BankDAO {

    private String url = "jdbc:mysql://localhost:3306/banque";
    private String username = "root";
    private String password = "root";

    /**
     * Crée un client et un compte bancaire associé dans la base de données.
     * @param customer Objet Customer contenant les infos du client (prénom, nom, téléphone)
     * @param initialAmount Montant initial du compte bancaire
     * @throws SQLException Si une erreur SQL survient (ex. : connexion échouée)
     */



    // Créer un client et un compte associé
    public void createCustomerAndAccount(Customer customer, double initialAmount) throws SQLException {
        try (Connection connection = DriverManager.getConnection(url, username, password)) {

            // 1 - Insérer client
            String createCustomer = "INSERT INTO client (firstname, lastname, phone) VALUES (?, ?, ?)";
            PreparedStatement psCustomer = connection.prepareStatement(createCustomer, Statement.RETURN_GENERATED_KEYS);
            psCustomer.setString(1, customer.getFirstname()); // Définir prénom
            psCustomer.setString(2, customer.getLastname());  // nom
            psCustomer.setString(3, customer.getPhone());     // téléphone
            psCustomer.executeUpdate();    // exécuter insertion


            // 2 - Récuperation id client
            ResultSet rsCustomer = psCustomer.getGeneratedKeys();
            int customerId = 0;
            if (rsCustomer.next()) {
                customerId = rsCustomer.getInt(1);   // récupération id généré
                customer.setId(customerId);                     // maj objet customer avec l'id
            }else {
                throw new SQLException("Erreur lors de l'insertion du client, impossible de récupérer id du client ");
            }

            // 3 - insérer un compte bancaire

            String createAccount = "INSERT INTO bank_account (customer_id, total_amount) VALUES (?, ?)";
            PreparedStatement psAccount = connection.prepareStatement(createAccount, Statement.RETURN_GENERATED_KEYS);
            psAccount.setInt(1, customerId);        // lier compte avec client avec l'id
            psAccount.setDouble(2, initialAmount);  // mettre un montant initial
            psAccount.executeUpdate();                           // executer insertion

            // 4 - Récupérer l'ID du compte
            rsCustomer = psAccount.getGeneratedKeys();
            if (rsCustomer.next()) {
                int accountId = rsCustomer.getInt(1);   // récupération id compte
                BankAccount account = new BankAccount();
                account.setId(accountId);
                account.setCustomerId(customerId);
                account.setTotalAmount(initialAmount);
            }
        }
    }
}
