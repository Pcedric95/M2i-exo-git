package org.example.exo06_api_gestion_meubles.controller;

import org.example.exo06_api_gestion_meubles.model.Furniture;
import org.example.exo06_api_gestion_meubles.service.FurnitureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/furniture")
public class FurnitureController {

    private final FurnitureService furnitureService;

    public FurnitureController(FurnitureService furnitureService) {
        this.furnitureService = furnitureService;
    }

    // GET /api/furniture
    @GetMapping
    public List<Furniture> getAllFurniture() {
        return furnitureService.getAllFurniture();
    }

    // GET /api/furniture/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Furniture> getFurnitureById(@PathVariable UUID id) {
        return furnitureService.getFurnitureById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/furniture
    @PostMapping
    public Furniture createFurniture(@RequestBody Furniture furniture) {
        return furnitureService.saveFurniture(furniture);
    }

    // DELETE /api/furniture/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFurniture(@PathVariable UUID id) {
        furnitureService.deleteFurniture(id);
        return ResponseEntity.noContent().build();
    }
}
