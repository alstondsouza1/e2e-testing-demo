const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

// GET todos
app.get("/todos", (_req, res) => {
  res.json(todos);
});

// ADD todo
app.post("/todos", (req, res) => {
  const { text } = req.body || {};
  if (!text?.trim()) return res.status(400).json({ error: "Text required" });
  todos.push(text.trim());
  res.json({ success: true });
});

// RESET for Cypress
app.post("/reset", (_req, res) => {
  todos = [];
  res.json({ success: true });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((_, index) => index !== id);
  res.json({ success: true });
});

app.listen(3001, () => console.log(`Server running on http://localhost:3001`));