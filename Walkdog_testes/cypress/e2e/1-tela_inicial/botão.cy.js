/// <reference types="cypress" />

describe('teste do botão', () => {
  beforeEach(() => {
    cy.visit('https://walkdog.vercel.app/')
  })

  it('Teste_botão', () => {
    cy.get('a[href="/signup"]').click()
  })

})
