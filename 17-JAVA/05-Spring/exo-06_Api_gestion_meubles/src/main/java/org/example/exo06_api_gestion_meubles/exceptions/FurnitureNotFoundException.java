package org.example.exo06_api_gestion_meubles.exceptions;

import java.util.UUID;

public class FurnitureNotFoundException extends RuntimeException {
    public FurnitureNotFoundException(UUID id) {
        super("Meuble non trouvé avec l'id : " + id);
    }
}
