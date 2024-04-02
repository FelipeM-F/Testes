/// <reference types="cypress" />


describe('register form tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-page="register-form"]').click()
    })
  
    it('successful register', () => {        
        /* 
         cy.intercept('POST', '/user').as('userRegister');
 
         const firstName = 'Felipe'
         const lastName = 'Fracasso'
         const usrName = 'FelipeM-F'
         const logEmail = 'felipef@email.com'
         const passwd = '123456'
         const dateOfB = '1988-01-01'
         const cpf = '12345678910'
         
 
         cy.get('#firstName').type(`${firstName}{enter}`)
         cy.get('#lastName').type(`${lastName}{enter}`)
         cy.get('#nickname').type(`${usrName}{enter}`)
         cy.get('#email').type(`${logEmail}{enter}`)
         cy.get('#password').type(`${passwd}{enter}`)
         cy.get('#dob').type(`${dateOfB}`)
         cy.get('#cpf').type(`${cpf}{enter}`)
 
         cy.contains('button', 'Registrar').click();
 
         cy.wait('@userRegister').then((interception) => {
             expect(interception.response.statusCode).to.equal(200);
         });*/
 
    })

     it('register without firstName', () => {        
        
 
         const firstName = 'Felipe'
         const lastName = 'Fracasso'
         const usrName = 'FelipeM-F'
         const logEmail = 'felipef@email.com'
         const passwd = '123456'
         const dateOfB = '1988-01-01'
         const cpf = '12345678910'
         
         cy.get('#lastName').type(`${lastName}{enter}`)
         cy.get('#nickname').type(`${usrName}{enter}`)
         cy.get('#email').type(`${logEmail}{enter}`)
         cy.get('#password').type(`${passwd}{enter}`)
         cy.get('#dob').type(`${dateOfB}`)
         cy.get('#cpf').type(`${cpf}{enter}`)
 
         cy.contains('button', 'Registrar').click();

         cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Por favor, preencha todos os campos.');
        });
    
 
    })

     it('register without lastName', () => {        
        

        const firstName = 'Felipe'
        const lastName = 'Fracasso'
        const usrName = 'FelipeM-F'
        const logEmail = 'felipef@email.com'
        const passwd = '123456'
        const dateOfB = '1988-01-01'
        const cpf = '12345678910'
        

        cy.get('#firstName').type(`${firstName}{enter}`)
        cy.get('#nickname').type(`${usrName}{enter}`)
        cy.get('#email').type(`${logEmail}{enter}`)
        cy.get('#password').type(`${passwd}{enter}`)
        cy.get('#dob').type(`${dateOfB}`)
        cy.get('#cpf').type(`${cpf}{enter}`)

        cy.contains('button', 'Registrar').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Por favor, preencha todos os campos.');
        });

    })

    it('register without username', () => {        
        
         const firstName = 'Felipe'
         const lastName = 'Fracasso'
         const usrName = 'FelipeM-F'
         const logEmail = 'felipef@email.com'
         const passwd = '123456'
         const dateOfB = '1988-01-01'
         const cpf = '12345678910'
         
 
         cy.get('#firstName').type(`${firstName}{enter}`)
         cy.get('#lastName').type(`${lastName}{enter}`)
         cy.get('#email').type(`${logEmail}{enter}`)
         cy.get('#password').type(`${passwd}{enter}`)
         cy.get('#dob').type(`${dateOfB}`)
         cy.get('#cpf').type(`${cpf}{enter}`)
 
         cy.contains('button', 'Registrar').click();
 
         cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Por favor, preencha todos os campos.');
        });
 
    })

    it('register without email', () => {        
        

        const firstName = 'Felipe'
        const lastName = 'Fracasso'
        const usrName = 'FelipeM-F'
        const logEmail = 'felipef@email.com'
        const passwd = '123456'
        const dateOfB = '1988-01-01'
        const cpf = '12345678910'
        
        cy.get('#firstName').type(`${firstName}{enter}`)
        cy.get('#lastName').type(`${lastName}{enter}`)
        cy.get('#nickname').type(`${usrName}{enter}`)
        cy.get('#password').type(`${passwd}{enter}`)
        cy.get('#dob').type(`${dateOfB}`)
        cy.get('#cpf').type(`${cpf}{enter}`)

        cy.contains('button', 'Registrar').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Por favor, preencha todos os campos.');
        });

    })

   it('register without password', () => {        
        

    const firstName = 'Felipe'
    const lastName = 'Fracasso'
    const usrName = 'FelipeM-F'
    const logEmail = 'felipef@email.com'
    const passwd = '123456'
    const dateOfB = '1988-01-01'
    const cpf = '12345678910'
    
    cy.get('#firstName').type(`${firstName}{enter}`)
    cy.get('#lastName').type(`${lastName}{enter}`)
    cy.get('#nickname').type(`${usrName}{enter}`)
    cy.get('#email').type(`${logEmail}{enter}`)
    cy.get('#dob').type(`${dateOfB}`)
    cy.get('#cpf').type(`${cpf}{enter}`)

    cy.contains('button', 'Registrar').click();

    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Por favor, preencha todos os campos.');
    });

   })

   it('register without date of birth', () => {        
        

    const firstName = 'Felipe'
    const lastName = 'Fracasso'
    const usrName = 'FelipeM-F'
    const logEmail = 'felipef@email.com'
    const passwd = '123456'
    const dateOfB = '1988-01-01'
    const cpf = '12345678910'
    
    cy.get('#firstName').type(`${firstName}{enter}`)
    cy.get('#lastName').type(`${lastName}{enter}`)
    cy.get('#nickname').type(`${usrName}{enter}`)
    cy.get('#email').type(`${logEmail}{enter}`)
    cy.get('#password').type(`${passwd}{enter}`)
    cy.get('#cpf').type(`${cpf}{enter}`)

    cy.contains('button', 'Registrar').click();

    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Por favor, preencha todos os campos.');
    });

  })

  it('register without cpf', () => {        
        

    const firstName = 'Felipe'
    const lastName = 'Fracasso'
    const usrName = 'FelipeM-F'
    const logEmail = 'felipef@email.com'
    const passwd = '123456'
    const dateOfB = '1988-01-01'
    const cpf = '12345678910'
    
    cy.get('#firstName').type(`${firstName}{enter}`)
    cy.get('#lastName').type(`${lastName}{enter}`)
    cy.get('#nickname').type(`${usrName}{enter}`)
    cy.get('#email').type(`${logEmail}{enter}`)
    cy.get('#password').type(`${passwd}{enter}`)
    cy.get('#dob').type(`${dateOfB}`)

    cy.contains('button', 'Registrar').click();

    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Por favor, preencha todos os campos.');
    });

  })

})
  