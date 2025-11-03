import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((r) => r.json())
      .then(setTodos)
      .catch(console.error);
  }, []);

  const addTodo = async () => {
    if (!text.trim()) return;
    await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setTodos((prev) => [...prev, text]);
    setText("");
  };

  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 500 }}>
      <h1>To-Do App</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          aria-label="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task…"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{ marginTop: 12 }}>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
