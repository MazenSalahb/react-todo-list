import { useEffect, useState } from "react";
import NewTodoForm from "./components/newTodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((curTodo) => {
      return [...curTodo, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  return (
    <div className="w-2/3 mx-auto">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="text-2xl mb-3">Todo List</h1>
      {todos.length === 0 && "No Todos 😢"}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
