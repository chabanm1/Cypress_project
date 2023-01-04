/// <reference types="Cypress" />

it("Rplenishment of Ukraine mobile phone number", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="phone-number"]')
    .type(939393933)
    .get('[data-qa-node="amount"]')
    .clear()
    .type(100)
    .get('[data-qa-node="numberdebitSource"]')
    .type(4552331448138217)
    .get('[data-qa-node="expiredebitSource"]')
    .type("05 / 24")
    .get('[data-qa-node="cvvdebitSource"]')
    .type(111)
    .get('[data-qa-node="submit"]')
    .click()
    .wait(2000)
    .get('[data-qa-node="card"]')
    .should("have.text", "4552 **** **** 8217")
    .get('[data-qa-node="amount"]')
    .should("contain.text", "100")
    .and("contain.text", "UAH")
    .get('[data-qa-node="commission"]')
    .should("contain.text", "2")
    .get('[data-qa-node="commission-currency"]')
    .should("contain.text", "UAH");
});
