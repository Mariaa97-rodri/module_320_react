import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const initialState = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  { userId: 1, id: 5, title: "laboriosam mollitia et enim", completed: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm dispatch={dispatch} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}