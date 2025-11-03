describe("Todo App", () => {
    it("adds a todo", () => {
      cy.visit("/");
      cy.get("input[aria-label='todo-input']").type("Buy milk");
      cy.contains("Add").click();
      cy.contains("li", "Buy milk").should("exist");
    });
  });
  