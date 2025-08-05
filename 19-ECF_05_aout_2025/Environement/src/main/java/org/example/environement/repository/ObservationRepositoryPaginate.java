package org.example.environement.repository;

import org.example.environement.entity.Observation;
import org.springframework.data.repository.PagingAndSortingRepository;



// Je me suis basé sur les autres codes ici, ne sachant pas exactement à quoi cela servira
public interface ObservationRepositoryPaginate extends PagingAndSortingRepository<Observation,Long> {
}
