package org.example.exo06_api_gestion_meubles.service;

import org.example.exo06_api_gestion_meubles.model.Furniture;
import org.example.exo06_api_gestion_meubles.repository.FurnitureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FurnitureService {

    private final FurnitureRepository furnitureRepository;

    public FurnitureService(FurnitureRepository furnitureRepository, FurnitureRepository furnitureRepository1) {
        this.furnitureRepository = furnitureRepository;
    }

    public List<Furniture> getAllFurniture() {
        return furnitureRepository.findAll();
    }
    public Optional<Furniture> getFurnitureById(UUID id) {
        return furnitureRepository.findById(id);
    }
    public Furniture saveFurniture(Furniture furniture) {
        return furnitureRepository.save(furniture);
    }
    public void deleteFurniture(UUID id) {
        furnitureRepository.deleteById(id);
    }



}
