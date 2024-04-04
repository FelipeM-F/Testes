/// <reference types="cypress" />

describe('Testes dos formulários da tela inicial', () => {
    beforeEach(() => {
      cy.visit('https://walkdog.vercel.app/signup')
    })


    it('nome_form', () => {
      const nome = 'João Carlos Silva'
      cy.get('.field input[name=name').type(`${nome}`);
      cy.get('.button-register').click();
    })

    it('namo_form_vazio', () => {
  
      cy.get('.button-register').click();
      cy.contains('Informe o seu nome completo')
    })

    it('nome_form_val_invalido', () => {
      const nome = '            '
      cy.get('.field input[name=name').type(`${nome}`);
      cy.get('.button-register').click();
      cy.contains('Informe o seu nome completo')
    })

    it('image_form', () => {
      cy.get('.dropzone input[type=file]').selectFile('./github.png', { force: true })
      cy.get('.dropzone img').should('have.attr', 'src')
    })

    it('image_form', () => {
      cy.get('.dropzone p').should('contain', 'Upload do seu documento de identificação')
    })

  })