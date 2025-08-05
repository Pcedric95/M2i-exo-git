package org.example.environement.service;


import org.example.environement.dto.travellogs.TravellogDtoResponse;
import org.example.environement.dto.travellogs.TravellogDtoStat;
import org.example.environement.entity.Travellog;
import org.example.environement.repository.ObservationRepository;
import org.example.environement.repository.TravellogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravellogsService {

    // Quelques complications dans mon service, je n'arrive pas à voir où je bloque

    private final TravellogRepository travellogRepository;
    private final ObservationRepository ObservationRepository ;


    public TravellogsService(TravellogRepository travellogRepository) {
        this.travellogRepository = travellogRepository;
        this.ObservationRepository = ObservationRepository;
    }


    // Je n’ai pas réussi à calculer les stats, mais j’ai compris qu’il fallait parcourir la liste
    // des Travellogs, additionner les distances et CO2 pour renvoyer dans le DTO.

    public TravellogDtoStat getStat (long id){
        List<Travellog> travellogs = travellogRepository.findTravellogByObservation_Id(id);
        TravellogDtoStat travellogDtoStat = new TravellogDtoStat();
        return travellogDtoStat;
    }

    // Je voulais renvoyer une liste de TravellogDtoResponse, mais je n’ai pas réussi à faire le mapping.

    public List<TravellogDtoResponse> get(int i) {
        return travellogRepository.findAll();
    }


// Méthode non terminée. Je sais qu’il faut filtrer les Travellogs d’un utilisateur sur le mois passé,
// mais je n'ai pas su comment faire avec les dates et les utilisateurs.

    public List<TravellogDtoStat> getStatForUserLastMonth (String user){;

    }
}
