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

    private final TravellogRepository travellogRepository;
    private final ObservationRepository ObservationRepository ;


    public TravellogsService(TravellogRepository travellogRepository) {
        this.travellogRepository = travellogRepository;
        this.ObservationRepository = ObservationRepository;
    }


    public TravellogDtoStat getStat (long id){
        List<Travellog> travellogs = travellogRepository.findTravellogByObservation_Id(id);
        TravellogDtoStat travellogDtoStat = new TravellogDtoStat();
        return travellogDtoStat;
    }

    public List<TravellogDtoResponse> get(int i) {
        return travellogRepository.findAll();
    }


    // Je sais qu'il faut retourner quelque chose mais je n'arrive pas à déterminer quoi ici
    public List<TravellogDtoStat> getStatForUserLastMonth (String user){;
        
    }
}
