describe("template spec", { tags: "@reggression" }, () => {
  it("Test que pasa", { tags: "@onlypass" }, () => {
    cy.visit("https://example.cypress.io");
  });

  it("Test que falla", { tags: "@onlyfails" }, () => {
    cy.visit("https://exampasdle.cypress.io");
  });

  it.skip("Test skippeado", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Test de env", { tags: "@env" }, () => {
    const user = Cypress.env("user_TEST");
    const pass = Cypress.env("pass_TEST");
    cy.log(user);
    cy.log(pass);
  });
});
