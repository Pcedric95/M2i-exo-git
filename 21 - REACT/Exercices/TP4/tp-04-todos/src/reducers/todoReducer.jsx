export const initialState = {
    todos: [],
}

export function todoReducer(state, action) {
    switch (action.type) {
        // Ajouter la nouvelle tâche à la liste
        case 'ADD_TASK':
            return {
                todos: [...state.todos, { id: Date.now(), tex: action.text, completed:false}],
            };

        // Valider une tâche 
        case 'TOGGLE_TASK' :
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, completed: todo.completed} : todo
                ),
            };
        
        // Supprimer une tâche
        case 'DELETE_TASK' : 
            return {
                todos: state.todos.filter((todo) => todo.id !== action.id),
            }
        // Si action inconnue, retourner l'état
        default:
            return state;
    }
}