package org.example.exo06_api_gestion_meubles.exceptions;

import java.util.UUID;

public class CartNotFoundException extends RuntimeException {
    public CartNotFoundException(UUID id) {
        super("Panier non trouvé avec l'id : " + id);
    }
}
