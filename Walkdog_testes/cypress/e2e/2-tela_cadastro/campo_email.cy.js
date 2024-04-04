/// <reference types="cypress" />

describe('Testes dos formulários da tela inicial', () => {
    beforeEach(() => {
      cy.visit('https://walkdog.vercel.app/signup')
    })

    it('email_form', () => {
      const email = 'joao@email.com'
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
    })

    it('invalid_email_form', () => {
      const email = 'joaoemail.com'
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
      cy.contains('Informe um email válido')
    })

    it('email_form_vazio', () => {
      cy.get('.button-register').click();
      cy.contains('Informe o seu melhor email')
    })

    it('special_characters_invalid_email_form', () => {
      const email = 'joao+test@email.com';
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
      cy.contains('Informe um email válido')
    })
    
    it('email_form_com_mult_@s', () => {
      const email = 'joao@@email.com';
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
      cy.contains('Informe um email válido')
    })

    it('email_form_sem_endereço_após_@', () => {
      const email = 'joao@';
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
      cy.contains('Informe um email válido')
    })

    it('email_form_com_enderço_inválido', () => {
      const email = 'joao@com';
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
      cy.contains('Informe um email válido') 
    })

    it('email_form_preenchido_com_espaços', () => {
      const email = '         ';
      cy.get('[name=email]').type(`${email}`);
      cy.get('.button-register').click();
      cy.contains('Informe um email válido')
    })
  })