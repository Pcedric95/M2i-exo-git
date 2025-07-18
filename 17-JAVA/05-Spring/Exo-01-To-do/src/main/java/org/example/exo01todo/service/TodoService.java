package org.example.exo01todo.service;


import org.example.exo01todo.interfaces.TodoServiceInterface;
import org.example.exo01todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TodoService  implements TodoServiceInterface {
    private final List<Todo> todos = new java.util.ArrayList<>();

    public TodoService() {
        // des exemples
        todos.add(new Todo("Description","Le premier exemple de todo", true));
        todos.add(new Todo("Courses","Acheter du lait",false));
        todos.add(new Todo("Révisions", "Relire les annotations Spring", false));
    }

    @Override
    public List<Todo> getAllTodos(){
        return todos;
    }

    @Override
    public Todo getFirstTodo(){
        return todos.isEmpty() ? null : todos.get(0);
    }
}
