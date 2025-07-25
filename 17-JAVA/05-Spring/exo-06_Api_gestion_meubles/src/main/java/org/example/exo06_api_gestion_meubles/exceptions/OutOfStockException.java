package org.example.exo06_api_gestion_meubles.exceptions;

public class OutOfStockException extends RuntimeException {
    public OutOfStockException(String item, int stock) {
        super("Stock insuffisant pour " + item + " (stock restant : " + stock + ")");
    }
}
