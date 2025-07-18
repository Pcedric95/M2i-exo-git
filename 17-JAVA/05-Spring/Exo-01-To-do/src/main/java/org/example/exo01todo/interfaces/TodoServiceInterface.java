package org.example.exo01todo.interfaces;

import org.example.exo01todo.model.Todo;

import java.util.List;


public interface TodoServiceInterface {
    List<Todo> getAllTodos();
    Todo getFirstTodo();
}
