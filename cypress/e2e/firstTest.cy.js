/// <reference types="Cypress" />
import { basePage } from "../support/pages/basePage";
import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";

it("Replenishment of Ukraine mobile phone number", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en");
  mobileReplenishment.typePhoneNumber(939393933);
  /*.get('[data-qa-node="phone-number"]')
  .type(939393933)*/
  basePage.typeAmount(100);
  /*.get('[data-qa-node="amount"]')
  .clear()
  .type(100)*/
  basePage.typeDebitCardData(4552331448138217, "05 / 24", 111);
  /*.get('[data-qa-node="numberdebitSource"]')
  //.type(4552331448138217)
  //.get('[data-qa-node="expiredebitSource"]')
  //.type("05 / 24")
  //.get('[data-qa-node="cvvdebitSource"]')
  .type(111)*/
  mobileReplenishment.submitPayment();
  /*.get('[data-qa-node="submit"]')
  .click()*/
  cy.wait(2000);
  mobileReplenishment.checkDebitCard("4552 **** **** 8217");
  /*.get('[data-qa-node="card"]')
  .should("have.text", "4552 **** **** 8217")*/
  mobileReplenishment.checkDebitAmountCurrency("100", "UAH");
  /*.get('[data-qa-node="amount"]')
  .should("contain.text", "100")
  .and("contain.text", "UAH")*/
  mobileReplenishment.checkCommissionAmount("2");
  /*.get('[data-qa-node="commission"]')
  .should("contain.text", "2")*/
  mobileReplenishment.checkCommissionCurrency("UAH");
  /*.get('[data-qa-node="commission-currency"]')
  .should("contain.text", "UAH");*/
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

it("Money transfer between foreign cards", () => {
  cy.visit("https://next.privat24.ua/money-transfer/card?lang=en");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  /*.get('[data-qa-node="numberdebitSource"]') 
    .type(4552331448138217)
    .get('[data-qa-node="expiredebitSource"]')
    .type("05 / 24")
    .get('[data-qa-node="cvvdebitSource"]')
    .type(111)*/
  transfers.typeDebitCardLastFirstName("Shayne", "McConnell");
  /*.get('[data-qa-node="firstNamedebitSource"]')
    .type("Shayne")
    .get('[data-qa-node="lastNamedebitSource"]')
    .type("McConnell")*/
  transfers.typeReceiverCardData("5309233034765085");
  /*cy.get('[data-qa-node="numberreceiver"]') // use fc
    .type(5309233034765085);*/
  transfers.typeReceiverCardLastFirstName("Juliana", "Janssen");
  /*cy.get('[data-qa-node="firstNamereceiver"]')
    .type("Juliana")
    .get('[data-qa-node="lastNamereceiver"]')
    .type("Janssen");*/
  basePage.typeAmount("100");
  /*cy.get('[data-qa-node="amount"]')
    .type(100)*/
  transfers.chooseUSDCurrency();
  /*cy.get('[data-qa-node="currency"]')
    .click()
    .get('[data-qa-value="USD"]')
    .click();*/
  transfers.addNewComment("TransFer");
  /*cy.get('[data-qa-node="toggle-comment"]')
    .click()
    .get('[data-qa-node="comment"]')
    .type("TransFer");*/
  transfers.clickTrasferButton();
  /*cy.get('[type="submit"]').click();*/
  cy.wait(2000);
  transfers.checkPayerCard("4552 3314 4813 8217");
  /*cy.get('[data-qa-node="payer-card"]').should(
    "have.text",
    "4552 3314 4813 8217"
  );*/
  transfers.checkReceiverCard("5309 2330 3476 5085");
  /*cy.get('[data-qa-node="receiver-card"]').should(
    "have.text",
    "5309 2330 3476 5085"
  );*/
  transfers.checkPayerAmountCurrency("100 USD");
  /*cy.get('[data-qa-node="payer-amount"]').should("have.text", "100 USD");*/
  transfers.checkReceiverAmountCurrency("100 USD");
  /*cy.get('[data-qa-node="receiver-amount"]').should("have.text", "100 USD");*/
  transfers.checkCommissionAmountCurrency("4.95 USD");
  /*cy.get('[data-qa-node="payer-currency"]') //use fc
    .should("have.text", "4.95 USD")*/
  transfers.checkTotalAmountCurrency("104.95 USD", "USD");
  /*cy.get('[data-qa-node="total"]')
    .should("contain.text", "104.95")
    .and("contain.text", "USD");*/
  transfers.checkAddedComment("TransFer");
  /*cy.get('[data-qa-node="comment"]').should("contain.text", "TransFer");*/
});
