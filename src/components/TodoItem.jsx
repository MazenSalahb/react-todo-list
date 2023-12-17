export default function TodoItem({ todo, setTodos }) {
  const toggleTodo = (id, completed) => {
    setTodos((currTodo) => {
      return currTodo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <li>
      <label className="flex gap-1 accent-blue-500">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-slate-500" : ""}>
          {todo.title}
        </span>

        <button
          className="px-1 border border-1 border-red-500 rounded-sm text-red-500"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </label>
    </li>
  );
}
