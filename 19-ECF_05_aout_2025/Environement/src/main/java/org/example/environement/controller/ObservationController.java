package org.example.environement.controller;


import org.example.environement.dto.observation.ObservationDtoReceive;
import org.example.environement.dto.observation.ObservationDtoResponse;
import org.example.environement.service.ObservationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/observation")
public class ObservationController {

    private final ObservationService observationService;


    public ObservationController(ObservationService observationService) {
        this.observationService = observationService;
    }


    @GetMapping("/species/{speciesId}")
    public ResponseEntity<List<ObservationDtoResponse>> getObservationsBySpecies(@PathVariable long speciesId){
        List<ObservationDtoResponse> observations = observationService.getBySpecie(speciesId);
        return ResponseEntity.ok(observations);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ObservationDtoResponse> getObservationById(@PathVariable long id){
        return ResponseEntity.ok(observationService.get(id));
    }

    @GetMapping("/byLocation")
    public ResponseEntity<List<ObservationDtoResponse>> getObservationsByLocation(@RequestParam String location){
        return ResponseEntity.ok(observationService.getByLocation(location));
    }

    @PostMapping
    public ResponseEntity<ObservationDtoResponse> create(@RequestBody ObservationDtoReceive observationDto){
        return ResponseEntity.ok(observationService.create(observationDto));
    }




    @GetMapping
    public ResponseEntity<List<ObservationDtoResponse>> getAll(){
        List<ObservationDtoResponse> observation = ObservationService.get(pageSize,pageNumber);
        return ResponseEntity.ok(observation);
    }



}
