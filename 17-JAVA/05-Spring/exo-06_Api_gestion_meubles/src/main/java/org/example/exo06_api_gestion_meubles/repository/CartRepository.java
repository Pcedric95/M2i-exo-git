package org.example.exo06_api_gestion_meubles.repository;

import org.example.exo06_api_gestion_meubles.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, UUID> {
}
