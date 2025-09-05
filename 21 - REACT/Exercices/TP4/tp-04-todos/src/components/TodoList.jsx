import { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";



function TodoList() {

    // Initialiser l'état et le dispatch avec useReducer
    const [state, dispatch] = useReducer(todoReducer, initialState);

    // état -> gère le texte nouvelle tâche 
}