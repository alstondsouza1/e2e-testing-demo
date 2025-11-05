describe("Delete Todo From List", () => {

    // reset list array to empty before each test
    beforeEach(() => {
        cy.request("POST", "http://localhost:3001/reset");
    });

    it("deletes a todo", () => {
        // visit the frontend
        cy.visit("/");
        cy.get("input[aria-label='todo-input']").type("Go to the gym");
        cy.contains("Add").click();
        cy.contains("li", "Go to the gym").should("exist");
        cy.contains("button", "Delete").click();
        cy.contains("li", "Go to the gym").should("not.exist");
    });
});