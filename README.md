# E2E Testing Demo with Cypress

This project demonstrates **End‑to‑End (E2E)** testing using **Cypress** on a simple full‑stack To‑Do App.

## Tech Stack
- Frontend: React + Vite
- Backend: Express.js
- E2E Testing: Cypress

## Project Structure
```
project/
 ├── client/      # React app
 │   └── cypress/ # Cypress tests
 └── server/      # Express API
```

## Getting Started

### Install Dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### Start Backend
```bash
cd server
node index.js
```

Runs at: `http://localhost:3001`

### Start Frontend
```bash
cd client
npm run dev
```

Runs at: `http://localhost:5173`

### Run E2E Tests (Client folder)
```bash
npm run test:e2e
```

---

## Cypress Test Example
```js
describe("Todo App", () => {
  beforeEach(() => {
    cy.request("POST", "http://localhost:3001/reset");
  });

  it("adds a todo", () => {
    cy.visit("/");
    cy.get("input[aria-label='todo-input']").type("Buy milk");
    cy.contains("Add").click();
    cy.contains("li", "Buy milk").should("exist");
  });
});
```

---

## 🔁 API Routes

  Method   Endpoint   Description
  -------- ---------- ----------------------------
  GET      `/todos`   Get todos
  POST     `/todos`   Add todo
  POST     `/reset`   Reset todos (testing only)

---

## Learning Goals
✔ Understand E2E testing  
✔ Set up Cypress in a React project  
✔ Test real user flows  
✔ Validate backend + frontend integration  

---
