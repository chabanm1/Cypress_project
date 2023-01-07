/// <reference types="Cypress" />
import { basePage } from "../support/pages/basePage";
import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";

beforeEach("setup Success response with stub", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/confirm/check?", {
    fixture: "confirmResponse/success.json",
  });
});

it("Replenishment of Ukraine mobile phone number", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en");
  mobileReplenishment.typePhoneNumber(939393933);
  basePage.typeAmount(100);
  basePage.typeDebitCardData(4552331448138217, "05 / 24", 111);
  mobileReplenishment.submitPayment();
  cy.wait(2000);
  mobileReplenishment.checkDebitCard("4552 **** **** 8217");
  mobileReplenishment.checkDebitAmountCurrency("100", "UAH");
  mobileReplenishment.checkCommissionAmount("2");
  mobileReplenishment.checkCommissionCurrency("UAH");
  cy.contains("Pay").click();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

it.skip("Money transfer between foreign cards", () => {
  cy.visit("https://next.privat24.ua/money-transfer/card?lang=en");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  transfers.typeDebitCardLastFirstName("Shayne", "McConnell");
  transfers.typeReceiverCardData("5309233034765085");
  transfers.typeReceiverCardLastFirstName("Juliana", "Janssen");
  basePage.typeAmount("100");
  transfers.chooseUSDCurrency();
  transfers.addNewComment("TransFer");
  transfers.clickTrasferButton();
  cy.wait(2000);
  transfers.checkPayerCard("4552 3314 4813 8217");
  transfers.checkReceiverCard("5309 2330 3476 5085");
  transfers.checkPayerAmountCurrency("100 USD");
  transfers.checkReceiverAmountCurrency("100 USD");
  transfers.checkCommissionAmountCurrency("4.95 USD");
  transfers.checkTotalAmountCurrency("104.95 USD", "USD");
  transfers.checkAddedComment("TransFer");
});
