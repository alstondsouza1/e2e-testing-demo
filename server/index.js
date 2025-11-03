const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

app.get("/todos", (_req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { text } = req.body || {};
  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Text is required" });
  }
  todos.push(text.trim());
  res.json({ success: true });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
