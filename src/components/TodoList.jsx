import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className="flex flex-col gap-3">
      {todos.map((todo) => {
        return <TodoItem todo={todo} setTodos={setTodos} key={todo.id} />;
      })}
    </ul>
  );
}
