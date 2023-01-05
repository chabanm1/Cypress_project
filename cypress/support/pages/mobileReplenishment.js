export class MobilePnoneReplenishment {
  typePhoneNumber(phoneNumber) {
    cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
  }
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
  submitPayment() {
    cy.get('[data-qa-node="submit"]').click();
  }
  checkDebitCard(debitCard) {
    cy.get('[data-qa-node="card"]').should("have.text", debitCard);
  }
  checkDebitAmountCurrency(amount, currency) {
    cy.get('[data-qa-node="amount"]')
      .should("contain.text", amount)
      .and("contain.text", currency);
  }
  checkCommissionAmount(amount) {
    cy.get('[data-qa-node="commission"]').should("contain.text", amount);
  }
  checkCommissionCurrency(currency) {
    cy.get('[data-qa-node="commission"]').should("contain.text", currency);
  }
  fi(currency) {
    cy.get('[data-qa-node="commission"]').should("contain.text", currency);
  }
}
export const mobileReplenishment = new MobilePnoneReplenishment();
