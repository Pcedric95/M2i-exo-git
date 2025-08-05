package org.example.environement.service;


import org.example.environement.dto.travellogs.TravellogDtoResponse;
import org.example.environement.dto.travellogs.TravellogDtoStat;
import org.example.environement.repository.TravellogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravellogsService {

    private final TravellogRepository travellogRepository;


    public TravellogsService(TravellogRepository travellogRepository) {
        this.travellogRepository = travellogRepository;
    }


    public TravellogDtoStat getStat (long id){

    }

    public List<TravellogDtoResponse> get(int i) {
    }
    
    public List<TravellogDtoStat> getStatForUserLastMonth (String user){

    }
}
