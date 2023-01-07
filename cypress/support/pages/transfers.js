export class Transfers {
  typeDebitCardLastFirstName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamedebitSource"]')
      .type(firstName)
      .get('[data-qa-node="lastNamedebitSource"]')
      .type(lastName);
  }
  typeReceiverCardData(cardNumber) {
    cy.get('[data-qa-node="numberreceiver"]').type(cardNumber);
  }
  typeReceiverCardLastFirstName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamereceiver"]')
      .type(firstName)
      .get('[data-qa-node="lastNamereceiver"]')
      .type(lastName);
  }
  chooseUSDCurrency() {
    cy.get('[data-qa-node="currency"]')
      .click()
      .get('[data-qa-value="USD"]')
      .click();
  }
  addNewComment(anyComment) {
    cy.get('[data-qa-node="toggle-comment"]')
      .click()
      .get('[data-qa-node="comment"]')
      .type(anyComment);
  }
  clickTrasferButton() {
    cy.get('[type="submit"]').click();
  }
  checkPayerCard(payerCard) {
    cy.get('[data-qa-node="payer-card"]').should("have.text", payerCard);
  }
  checkReceiverCard(receiverCard) {
    cy.get('[data-qa-node="receiver-card"]').should("have.text", receiverCard);
  }
  checkPayerAmountCurrency(amountCurrency) {
    cy.get('[data-qa-node="payer-amount"]').should("have.text", amountCurrency);
  }
  checkReceiverAmountCurrency(amoumtCurrency) {
    cy.get('[data-qa-node="receiver-amount"]').should(
      "have.text",
      amoumtCurrency
    );
  }
  checkCommissionAmountCurrency(amoumtCurrency) {
    cy.get('[data-qa-node="payer-currency"]').should(
      "have.text",
      amoumtCurrency
    );
  }
  checkTotalAmountCurrency(amoumt, currency) {
    cy.get('[data-qa-node="total"]')
      .should("contain.text", "104.95")
      .and("contain.text", "USD");
  }
  checkAddedComment(comment) {
    cy.get('[data-qa-node="comment"]').should("contain.text", comment);
  }
}
export const transfers = new Transfers();
