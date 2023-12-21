describe("template spec", () => {
  it("Test que pasa", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Test que falla", () => {
    cy.visit("https://exampasdle.cypress.io");
  });

  it.skip("Test skippeado", () => {
    cy.visit("https://example.cypress.io");
  });
});
