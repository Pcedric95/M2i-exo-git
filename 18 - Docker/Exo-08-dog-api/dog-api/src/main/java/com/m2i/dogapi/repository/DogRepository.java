package com.m2i.dogapi.repository;

import com.m2i.dogapi.entity.Dog;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DogRepository extends JpaRepository<Dog, Long>{
}
