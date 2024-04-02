/// <reference types="cypress" />


describe('login form tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('successful login', () => {
        const logEmail = 'joaosilva@email.com'
        const passwd = '123456'

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('#loginEmail').type(`${logEmail}{enter}`)
        cy.get('#loginPassword').type(`${passwd}{enter}`)
        cy.contains('button', 'Entrar').click();

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(302);
            expect(interception.response.headers.location).to.equal('/index.html');
        });
    })

    it('wrong password', () => {
        const logEmail = 'joaosilva@email.com'
        const passwd = 'error'

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('#loginEmail').type(`${logEmail}{enter}`)
        cy.get('#loginPassword').type(`${passwd}{enter}`)
        cy.contains('button', 'Entrar').click();

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(404);
        });
      })

      it('wrong user', () => {
        const logEmail = 'joaosilva@email.com.br'
        const passwd = 'er123456ror'

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('#loginEmail').type(`${logEmail}{enter}`)
        cy.get('#loginPassword').type(`${passwd}{enter}`)
        cy.contains('button', 'Entrar').click();

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(401);
        });
      })
    
  })
  