/// <reference types="cypress" />

describe('Testes dos formulários da tela inicial', () => {
    beforeEach(() => {
      cy.visit('https://walkdog.vercel.app/signup')
    })

    it('cpf_form', () => {
      const cpf = '36828416520'
      cy.get('[name=cpf]').type(`${cpf}`);
      cy.get('.button-register').click();
    })

    it('invalid_cpf_form', () => {
      const cpf = '01234567899'
      cy.get('[name=cpf]').type(`${cpf}`);
      cy.get('.button-register').click();
      cy.contains('CPF inválido')
    })

    it('cpf_form_com_letras', () => {
        const cpf = 'abcdefghijl'
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('CPF inválido')
      })

    it('cpf_form_vazio', () => {
      cy.get('.button-register').click();
      cy.contains('Informe o seu CPF');
    })

    it('cpf_menos_digitos_que_o_necessario', () => {
        const cpf = '1234567890'
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('CPF inválido')
    })
  
      it('cpf_mais_digitos_que_o_necessario', () => {
        const cpf = '368284165200'
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('CPF inválido')
    })
  
      it('cpf_com_pontuacao', () => {
        const cpf = '368.284.165-20'
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('CPF inválido')
    })
  
      it('cpf_com_espacos', () => {
        const cpf = ' 36828416520 '
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('CPF inválido')
    })
  
      it('cpf_com_zeros', () => {
        const cpf = '00000000000'
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('CPF inválido')
    })

    it('cpf_preenchido_com_espaços', () => {
        const cpf = '         ';
        cy.get('[name=cpf]').type(`${cpf}`);
        cy.get('.button-register').click();
        cy.contains('Informe o seu CPF')
    })

  })