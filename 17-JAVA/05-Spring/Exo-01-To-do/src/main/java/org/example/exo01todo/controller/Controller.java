package org.example.exo01todo.controller;

import org.example.exo01todo.interfaces.TodoServiceInterface;
import org.example.exo01todo.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@org.springframework.stereotype.Controller
public class Controller {

    @Autowired
    private TodoServiceInterface todoService;

    @RequestMapping("/todos")
    @ResponseBody
    public List<Todo> getTodos(){
        return todoService.getAllTodos();
    }

    @RequestMapping("/todo")
    @ResponseBody
    public Todo getFirstTodo(){
        return todoService.getFirstTodo();
    }
}
