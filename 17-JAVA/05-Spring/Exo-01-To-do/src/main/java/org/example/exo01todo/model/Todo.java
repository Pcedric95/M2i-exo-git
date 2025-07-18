package org.example.exo01todo.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Todo {
    private String name;
    private String description;
    private boolean isDone;
}
