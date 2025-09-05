import { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import './TodoList.css';



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
    <div className="todo-container">
      <h1 className="todo-title">Liste de tâches</h1>
      <div className="todo-form">
        {/* Champ de saisie pour ajouter une tâche */}
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Ajouter une tâche..."
          className="todo-input"
        />
        {/* Bouton pour ajouter la tâche */}
        <button onClick={handleAddTodo} className="todo-button">Ajouter</button>
      </div>
      {/* Liste des tâches */}
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {/* Texte de la tâche, cliquable pour basculer le statut */}
            <span
            className={`todo-text ${todo.completed ? 'completed' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_TASK', id: todo.id })}
          >
            {todo.text}
          </span>
            {/* Bouton pour supprimer la tâche */}
            <button className="todo-delete" onClick={() => dispatch({ type: 'DELETE_TASK', id: todo.id })}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;