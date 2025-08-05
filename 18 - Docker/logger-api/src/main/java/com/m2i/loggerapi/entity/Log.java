package com.m2i.loggerapi.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Log {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;
    private String source;
    private String timestamp;

    @Enumerated(EnumType.STRING)
    private Level level;

    public enum Level {
        INFO, WARN, ERR
    }
}
