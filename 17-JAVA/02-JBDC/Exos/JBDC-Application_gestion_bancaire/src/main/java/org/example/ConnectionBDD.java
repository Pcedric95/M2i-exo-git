package org.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnectionBDD {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/banque";
        String username = "root";
        String password = "root";

        // Requête pour créer la table client
        String createClientTable = "CREATE TABLE IF NOT EXISTS client (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "firstname VARCHAR(150), " +
                "lastname VARCHAR(150), " +
                "phone VARCHAR(20)" +
                ")";

        // Requête pour créer la table bank_account
        String createAccountTable = "CREATE TABLE IF NOT EXISTS bank_account (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "customer_id INT, " +
                "total_amount DOUBLE, " +
                "FOREIGN KEY (customer_id) REFERENCES client(id)" +
                ")";

        // Requête pour créer la table operation
        String createOperationTable = "CREATE TABLE IF NOT EXISTS operation (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "amount DOUBLE, " +
                "status VARCHAR(20), " +
                "account_id INT, " +
                "FOREIGN KEY (account_id) REFERENCES bank_account(id)" +
                ")";

        // Connexion à la BDD
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connecté avec succès");

            // Création des tables
            Statement statement = connection.createStatement();
            statement.executeUpdate(createClientTable);
            statement.executeUpdate(createAccountTable);
            statement.executeUpdate(createOperationTable);

            System.out.println("Tables créées avec succès");
        } catch (SQLException e) {
            System.out.println("Erreur : " + e.getMessage());
        }
    }
}