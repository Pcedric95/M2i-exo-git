package com.m2i.dogapi.controller;

import com.m2i.dogapi.entity.Dog;
import com.m2i.dogapi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.http.ResponseEntity;



@RestController
@RequestMapping("/api/v0.1/dogs")
public class DogController {

    @Autowired
    private DogRepository dogRepository;

    // Liste des chiens -> GET /api/v0.1/dogs
    @GetMapping
    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }

    // trouver un chien par ID -> GET /api/v0.1/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Dog> getDogById(@PathVariable Long id) {
        Optional<Dog> dog = dogRepository.findById(id);
        return dog.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    //  ajouter un chien -> POST /api/v1/dogs
    @PostMapping
    public Dog createDog(@RequestBody Dog dog) {
        return dogRepository.save(dog);
    }

    // PUT /api/v0.1/dogs/{id} → modifier un chien
    @PutMapping("/{id}")
    public ResponseEntity<Dog> updateDog(@PathVariable Long id, @RequestBody Dog updatedDog) {
        return dogRepository.findById(id)
                .map(existingDog -> {
                    existingDog.setName(updatedDog.getName());
                    existingDog.setBreed(updatedDog.getBreed());
                    existingDog.setColor(updatedDog.getColor());
                    existingDog.setGender(updatedDog.getGender());
                    existingDog.setBirthDate(updatedDog.getBirthDate());
                    existingDog.setSterilized(updatedDog.getSterilized());
                    Dog savedDog = dogRepository.save(existingDog);
                    return ResponseEntity.ok(savedDog);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    //  supprimer un chien -> DELETE /api/v0.1/dogs/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDog(@PathVariable Long id) {
        if (dogRepository.existsById(id)) {
            dogRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
