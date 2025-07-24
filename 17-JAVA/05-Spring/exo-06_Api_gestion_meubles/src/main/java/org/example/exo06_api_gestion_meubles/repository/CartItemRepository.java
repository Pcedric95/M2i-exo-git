package org.example.exo06_api_gestion_meubles.repository;

import org.example.exo06_api_gestion_meubles.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface CartItemRepository extends JpaRepository<CartItem, UUID> {
    // CRUD basique inclus d’office
}
