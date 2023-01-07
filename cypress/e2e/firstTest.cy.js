/// <reference types="Cypress" />

//const { method } = require("cypress/types/bluebird");

it.skip("Example sending the Get request", () => {
  cy.request("https://next.privat24.ua/").then((response) => {
    console.log(response);
  });
});

//Example HTTP POST request with expect verification of respomse
it("Example sending the Post request", () => {
  const requestBody = {
    action: "info",
    phone: "+380939393933",
    amount: 120,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0526",
    xref: "75c292505a0a54467ebc201f80d1dea6",
    _: 1673048148416,
  };
  const headerData = {
    cookie:
      "_ga=GA1.2.1070101999.1671900134; _gid=GA1.2.553494157.1673039575; pubkey=b9b3dd98fd87128bbb71f6e8df88cbf0; fp=58; lfp=12/24/2022, 6:42:25 PM; pa=1673046636904.60060.0752267693645674next.privat24.ua0.6084058365086134+1",
  };
  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headerData,
  }).then((response) => {
    expect(response).to.have.property("status").to.eq(200); //check status code
    expect(response.body).to.have.property("status").to.eq("success"); //check status
    expect(response.body.data).to.have.property("amount").to.eq("120.0"); //check amount

    console.log(response);
  });
});

//Example HTTP POST request with should verification of respomse
it.only("Example sending the Post request", () => {
  const requestBody = {
    action: "info",
    phone: "+380939393933",
    amount: 120,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0526",
    xref: "75c292505a0a54467ebc201f80d1dea6",
    _: 1673048148416,
  };
  const headerData = {
    cookie:
      "_ga=GA1.2.1070101999.1671900134; _gid=GA1.2.553494157.1673039575; pubkey=b9b3dd98fd87128bbb71f6e8df88cbf0; fp=58; lfp=12/24/2022, 6:42:25 PM; pa=1673046636904.60060.0752267693645674next.privat24.ua0.6084058365086134+1",
  };
  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headerData,
  })
    .its("body")
    .should("contain", {
      status: "success",
    })
    .its("data")
    .should("contain", {
      amount: "120.0",
    });
});
