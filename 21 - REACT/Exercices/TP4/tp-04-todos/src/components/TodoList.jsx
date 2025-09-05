import { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";



function TodoList() {

    // Initialiser l'état et le dispatch avec useReducer
    const [state, dispatch] = useReducer(todoReducer, initialState);

    // état -> gère le texte nouvelle tâche 
    const [newTodoText, setNewTodoText] = useState("");

    // Fonction -> Ajouter nouvelle tâche
    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") { // Si champ non vide
            dispatch({ type: 'ADD_TASK', text: newTodoText }); // Envoyer action ADD_TASK
            setNewTodoText(""); // Réinitialiser champ de texte
        }
    };

    return (
    <div>
      <h1>Liste de tâches</h1>
      <div>
        {/* Champ de saisie pour ajouter une tâche */}
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        {/* Bouton pour ajouter la tâche */}
        <button onClick={handleAddTodo}>Ajouter</button>
      </div>
      {/* Liste des tâches */}
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {/* Texte de la tâche, cliquable pour basculer le statut */}
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
            >
              {todo.text}
            </span>
            {/* Bouton pour supprimer la tâche */}
            <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;