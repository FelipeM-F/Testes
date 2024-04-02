/// <reference types="cypress" />


describe('beting tests', () => {
    beforeEach(() => {
        cy.clearAllCookies;
        cy.loginAPI('pedrooliveira@email.com', '123456');
  
    })

    it('wallet deposit', () => {
        let walletValue = 0;
        const depositValue = Math.floor(Math.random() * (100 - 1 + 1)) + 1;   
        cy.wait(1000);
        cy.get('#wallet-value').invoke('text').then((text) => {
            walletValue = parseInt(text);
            cy.wait(1000);
            cy.get('#moneyBtn').click();
            cy.get('#depositAmount').type(`${depositValue}`);    
            cy.get('#confirmDepositBtn').click();
            cy.get('#wallet-value').should('text', `${walletValue + depositValue}`);
          });
    })

    it('beting', () => {
        cy.get('.bet-card').then($cards => {
            const randomIndex = Math.floor(Math.random() * $cards.length);  
            const randomTeam = Math.floor(1 + Math.random() * 2) === 1 ? '.team1-btn' : '.team2-btn';
            cy.log(randomIndex);
            cy.get('.bet-card').eq(`${randomIndex}`).find(`${randomTeam}`).click()
            cy.get('#wallet-bet').invoke('text').then((wallet) => {
                const amount = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                cy.get('#amount').type(`${amount}`);
                cy.get('#confirmarBet').click();
                cy.get('#wallet-value').should('text', `${wallet - amount}`);
            });
        });
    })


  })
  