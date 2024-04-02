// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cookieParser = require("cookie-parser");

Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:3000/'); // ou a URL da sua página de login
    cy.get('#loginEmail').type(email);
    cy.get('#loginPassword').type(`${password}{enter}`); 
    cy.contains('button', 'Entrar').click();
    // Aguarde pelo redirecionamento ou ação subsequente, se necessário
  });

  Cypress.Commands.add('loginAPI', (email, password) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/login',
      body: {
        email: email,
        passworld: password //foi escrito errado no código :\
      }
    }).then((response) => {
      // Verifica se a resposta da API é bem-sucedida
      expect(response.status).to.eq(200);
      cy.setCookie('cookiedLogin', 'email')

      cy.visit('http://localhost:3000/'); // Altere a URL conforme necessário
    });
  });

