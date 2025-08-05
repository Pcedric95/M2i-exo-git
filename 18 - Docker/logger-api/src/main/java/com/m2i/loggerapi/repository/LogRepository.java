package com.m2i.loggerapi.repository;

import com.m2i.loggerapi.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {
}
