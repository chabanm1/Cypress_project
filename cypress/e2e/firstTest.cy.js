/// <reference types="Cypress" />

//const { method } = require("cypress/types/bluebird");

it.skip("Example sending the Get request", () => {
  cy.request("https://next.privat24.ua/").then((response) => {
    console.log(response);
  });
});

it("Example sending the Post request", () => {
  const requestBody = {
    action: "add",
    phone: "+380939393933",
    amount: 120,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0526",
    operator: "Lifecell Ukraine",
    operatorId: "621",
    xref: "128936b681fe40be8d4a64bff863c559",
    nameA: "Shayne MCconnell",
    withDuplicateCheck: true,
    _: 1673039812552,
  };
  const headerData = {
    cookie:
      "_ga=GA1.2.1070101999.1671900134; pubkey=64e12264edf1f90e9e98c6da1644534a; _gid=GA1.2.553494157.1673039575; fp=53; lfp=12/24/2022, 6:42:25 PM; pa=1673039652328.4570.43290846537060457next.privat24.ua0.9004884945782936+1; _gat_gtag_UA_29683426_11=1",
  };
  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headerData,
  }).then((response) => {
    console.log(response.body);
  });
});
