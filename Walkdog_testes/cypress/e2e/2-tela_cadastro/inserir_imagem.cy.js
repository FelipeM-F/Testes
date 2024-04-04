/// <reference types="cypress" />

describe('Testes dos formulários da tela inicial', () => {
    beforeEach(() => {
      cy.visit('https://walkdog.vercel.app/signup')
    })

    it('image_form', () => {
      cy.get('.dropzone input[type=file]').selectFile('./github.png', { force: true })
      cy.get('.dropzone img').should('have.attr', 'src')
    })

    it('image_form_vazio', () => {
        cy.get('.button-register').click();
        cy.contains('Adcione um documento com foto (RG ou CHN)')
    })

})
