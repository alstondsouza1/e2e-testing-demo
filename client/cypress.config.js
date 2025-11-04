const { defineConfig } = require("cypress");

// export Cypress E2E testing configuration
module.exports = defineConfig({
  e2e: {

    // base URL for app being testing, so Cypress will use this URL for cy.visit("/")
    baseUrl: "http://localhost:5173",
    video: false,
  },
});