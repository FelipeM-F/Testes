/// <reference types="cypress" />


function userLogin() {
  let email
  let password
  cy.dadosLogin().then(() => {
    email = Cypress.env('email');
    password = Cypress.env('password');
    return cy.request({
      method: 'POST',
      url: 'login',
      body: {
        "email": email,
        "password": password
      }
      }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('authorization')
      })
  });
  }

export { userLogin };