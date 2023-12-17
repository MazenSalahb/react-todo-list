import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem.trim()) {
      onSubmit(newItem);
      setNewItem("");
    }
  };

  return (
    <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="todo" className="text-slate-900 text-xl">
          New Item
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Todo title"
          className="border border-1 duration-150 focus:border-slate-900 p-1 rounded-md outline-none shadow-lg"
        />
      </div>
      <button className="w-full bg-slate-900 text-white p-1 rounded-md shadow-md duration-150 hover:bg-slate-950">
        Add
      </button>
    </form>
  );
}
