package org.example.environement.repository;

import org.example.environement.entity.Observation;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


// Je me suis basé sur les autres codes ici, ne sachant pas exactement à quoi cela servira
@Repository
public interface ObservationRepositoryPaginate extends PagingAndSortingRepository<Observation,Long> {
}
