package org.example.environement.repository;

import org.example.environement.entity.Observation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObservationRepository extends JpaRepository <Observation,Long>{
}
