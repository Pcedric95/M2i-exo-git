package com.m2i.loggerapi.controller;

import com.m2i.loggerapi.entity.Log;
import com.m2i.loggerapi.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/logs")
public class LogController {

    @Autowired
    private LogRepository logRepository;

    // 🔹 GET /api/v1/logs -> liste des logs
    @GetMapping
    public List<Log> getAllLogs() {
        return logRepository.findAll();
    }

    // 🔹 POST /api/v1/logs -> ajout d’un log
    @PostMapping
    public Log createLog(@RequestBody Log log) {
        return logRepository.save(log);
    }
}
