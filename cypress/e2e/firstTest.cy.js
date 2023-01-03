/// <reference types="Cypress" />
/*

//linkedin
it("Search by Id", () => {
  cy.visit("https://www.linkedin.com/home");
  cy.get("#session_key");
});

//wiki
it("Search by Class", () => {
  cy.visit(
    "https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0"
  );
  cy.get(".vector-search-box-input");
});

//flashscore
it("Search by Tag", () => {
  cy.visit("https://www.flashscore.ua/");
  cy.get("nav");
});

//linkedin
it("Search by Tag value", () => {
  cy.visit("https://www.linkedin.com/home");
  cy.get('[name="session_password"]');
});

//linkedin
it("Search by different Tag values", () => {
  cy.visit("https://www.linkedin.com/home");
  cy.get(
    '[type="button"][data-tracking-control-name="homepage-basic_signin-form_password-visibility-toggle-button"]'
  );
});

//linkedin
it("Search by different Types", () => {
  cy.visit("https://www.linkedin.com/");
  cy.get(
    'button[type="button"][data-tracking-control-name="homepage-basic_signin-form_password-visibility-toggle-button"]'
  );
});

//linkedin
it.only("Search by contains Name", () => {
  cy.visit("https://www.linkedin.com/");
  cy.get('[class^="google"]');
});
*/
// comment

it("Using Get with Find and eq", () => {
  cy.visit("https://next.privat24.ua/deposit");
  cy.get("tbody").find("td").find("div").find("button").eq(0);
});

it("Using Get with Find and eq", () => {
  //change viewport
  cy.viewport(1800, 700);
  cy.visit("https://www.flashscore.ua/?rd=flashscore.com.ua");
  cy.get("aside").find("div").find("div").find("a").eq(4);
});

it.only("Using Get with Find and eq", () => {
  //change viewport
  cy.viewport(1800, 700);
  cy.visit("https://www.flashscore.ua/?rd=flashscore.com.ua");
  cy.get("aside").find("div").find("div").find("a").eq(4);
});
