/// <reference types="Cypress" />

//type
it("type", () => {
  cy.visit("https://next.privat24.ua/?lang=en")
    .get('[data-qa-node="undefined-number"]')
    .type(112233344);
});

//focus
it("focus", () => {
  cy.visit("https://next.privat24.ua/?lang=en")
    .get('[data-qa-node="undefined-number"]')
    .type(112233344);
});
