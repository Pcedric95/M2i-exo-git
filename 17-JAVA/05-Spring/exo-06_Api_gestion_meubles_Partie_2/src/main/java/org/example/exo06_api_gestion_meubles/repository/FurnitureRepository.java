package org.example.exo06_api_gestion_meubles.repository;

import org.example.exo06_api_gestion_meubles.model.Furniture;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface FurnitureRepository extends JpaRepository<Furniture, UUID> {

}
