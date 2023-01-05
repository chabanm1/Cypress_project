export class BasePage {
  typeAmount(amount) {
    cy.get('[data-qa-node="amount"]').clear().type(amount);
  }
  typeDebitCardData(cardNumber, expDate, cvv) {
    cy.get('[data-qa-node="numberdebitSource"]')
      .type(cardNumber)
      .get('[data-qa-node="expiredebitSource"]')
      .type(expDate)
      .get('[data-qa-node="cvvdebitSource"]')
      .type(cvv);
  }
}
export const basePage = new BasePage();
