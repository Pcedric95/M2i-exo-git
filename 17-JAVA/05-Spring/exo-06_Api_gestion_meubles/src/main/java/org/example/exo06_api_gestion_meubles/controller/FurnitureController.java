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
    
}
