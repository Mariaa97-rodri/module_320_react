import { useState } from 'react';

export default function TodoForm ({ dispatch}) {
    const [newTodo, setNewTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if(!newTodo.trim()) return;

        const todo = {
            id: Date.now(),
            title: newTodo,
            completed: false
        };

        dispatch({ type: "ADD", payload: todo});
        setNewTodo("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a todo..."
            />
            <button>Add</button>
        </form>
    );
}