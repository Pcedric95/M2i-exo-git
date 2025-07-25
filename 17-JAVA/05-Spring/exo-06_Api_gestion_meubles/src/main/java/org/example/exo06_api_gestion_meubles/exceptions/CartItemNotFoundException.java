package org.example.exo06_api_gestion_meubles.exceptions;

import java.util.UUID;

public class CartItemNotFoundException extends RuntimeException {
    public CartItemNotFoundException(UUID id) {
        super("Item du panier non trouvé avec l'id : " + id);
    }
}
