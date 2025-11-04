// test suite for a simple todo app

describe("Todo App", () => {

    // runs before each test, resets backend data so tests are repeated
    beforeEach(() => {
      cy.request("POST", "http://localhost:3001/reset");
    });
    
    // test case: adding a todo
    it("adds a todo", () => {
        // vists the frontned
      cy.visit("/");

      // type into input and click add button
      cy.get("input[aria-label='todo-input']").type("Buy milk");
      cy.contains("Add").click();
      cy.contains("li", "Buy milk").should("exist");
    }); 
});
