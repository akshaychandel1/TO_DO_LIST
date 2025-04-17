import { useState } from "react";
import './App.css';

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    setItems([...items, { id: Date.now(), text: newItem }]);
    setNewItem("");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <form onSubmit={addItem}>
        <h1>My To Do List</h1>
        <label htmlFor="new-item">New Item</label>
        <input
          type="text"
          id="new-item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <h1>To Do List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}