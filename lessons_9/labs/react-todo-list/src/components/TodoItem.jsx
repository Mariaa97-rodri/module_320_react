import { useState } from 'react';

export default function TodoItem({ todo, dispatch}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    function handleSave() {
        dispatch ({
            type: "EDIT",
            payload: { id: todo.id, title: editText}
        });

        setIsEditing(false);
    }

    return (
        <li>
            <input
            type="checkbox"
            checked = {todo.completed}
            onChange={() =>
                dispatch({ type: "TOGGLE", payload: todo.id})
            }
            />
            {isEditing ? (
                <>
                <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                </>
            ): (
                <>
                <span
                style={{ textDecoration: todo.completed ? "line-through" : "none"}}
                >
                    {todo.title}
                </span>
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>

                <button
                disabled={!todo.completed}
                onClick={() =>
                    dispatch({ type: "DELETE", payload: todo.id})
                }
                >
                    Delete
                </button>
                </>
            )}
        </li>
    )
}