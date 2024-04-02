/// <reference types="cypress" />


describe('user tests', () => {
    beforeEach(() => {
        cy.clearAllCookies;
        cy.loginAPI('pedrooliveira@email.com', '123456');
 
        cy.get('#profileBtn').click();
    })

    it('name_comparison', () => {      
        cy.request('http://localhost:3000/user').then((response) => {
            cy.wait(250);
            expect(response.status).to.eq(200);
            const expectedUsername = response.body.userName;
            cy.get('#userName').should('have.value', expectedUsername);
        });
    });

    it('cpf_comparison', () => {
        cy.request('http://localhost:3000/user').then((response) => {
            cy.wait(250);
            expect(response.status).to.eq(200);
            const expectedCpf = response.body.cpf;
            cy.get('#cpfModal').should('have.value', expectedCpf);
        });
    })

    it('wallet_comparison', () => {
        cy.request('http://localhost:3000/user').then((response) => {
            cy.wait(250);
            expect(response.status).to.eq(200);
            const expectedWallet = response.body.wallet;
            cy.get('#walletModal').should('have.value', expectedWallet);
        });
    })

    it('points_comparison', () => {
        cy.request('http://localhost:3000/user').then((response) => {
            cy.wait(250);
            expect(response.status).to.eq(200);
            const expectedPoints = response.body.points;
            cy.get('#points').should('have.value', expectedPoints);
        });
    })

    it('user_deposit_button', () => {  
        cy.get('.button__deposit').click();
        cy.get('#depositModal').should('be.visible');
    })


})