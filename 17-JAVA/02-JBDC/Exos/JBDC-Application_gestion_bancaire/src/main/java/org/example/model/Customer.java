package org.example.model;

public class Customer {
    private int id;
    private String firstname;
    private String lastname;
    private String phone;

    // Constructeur vide
    public Customer() {}

    // constructeurs avec paramètres
    public Customer(int id, String firstname, String lastname, String phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
    }


}
