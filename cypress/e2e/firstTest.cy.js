/// <reference types="Cypress" />

const { contains } = require("cypress/types/jquery");

// doesn't work without clear function
it("SHOULD", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en");
  cy.get('[data-qa-node="amount"]')
    .clear('[data-qa-node="amount"]')
    .type(100)
    .should("have.value", 100)
    .and("be.visible");
});

it("EXPECT", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en");
  cy.get('[data-qa-node="amount"]')
    .clear('[data-qa-node="amount"]')
    .type(100)
    .then((input) => {
      expect(input).to.have.value(100);
    });
});

it("Check default value for deposite (UAH)", () => {
  cy.visit("https://next.privat24.ua/deposit?lang=en");
  cy.get('[data-qa-value="UAH"]').should("be.checked");
});

it("Check default value for deposite (USD)", () => {
  cy.visit("https://next.privat24.ua/deposit?lang=en");
  cy.get('[data-qa-value="UAH"]').should("not.be.checked");
});

it.only("mouseover", () => {
  cy.visit("https://next.privat24.ua/deposit?lang=en");
  cy.contains("My deposits")
    .trigger("mouseover")
    .get('id="archiveDeposits"')
    .should("be.visible");
});
