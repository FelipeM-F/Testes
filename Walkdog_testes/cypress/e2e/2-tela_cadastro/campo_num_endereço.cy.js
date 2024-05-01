describe('Testes dos formulários da tela inicial', () => {
    beforeEach(() => {
      cy.visit('https://walkdog.vercel.app/signup')
      const cep = '91110001'
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
    })

    
    it('numero_endereco_correto', () => {
      const numeroEndereco = '123'
      cy.get('[name=addressNumber]').type(`${numeroEndereco}`);
      cy.get('.button-register').click();
    })

    it('numero_endereco_zero', () => {
      const numeroEndereco = '0';
      cy.get('[name=addressNumber]').type(`${numeroEndereco}`);
      cy.get('.button-register').click();
      cy.contains('Informe um número maior que zero')
    })

    it('numero_endereco_negativo', () => {
      const numeroEndereco = '-123'
      cy.get('[name=addressNumber]').type(`${numeroEndereco}`);
      cy.get('.button-register').click();
      cy.contains('Informe um número maior que zero')
    })

    it('numero_endereco_com_letras', () => {
      const numeroEndereco = 'abcd'
      cy.get('[name=addressNumber]').type(`${numeroEndereco}`);
      cy.get('.button-register').click();
      cy.contains('Informe um número maior que zero')
    })

    it('numero_endereco_vazio', () => {
      cy.get('.button-register').click();
      cy.contains('Informe um número maior que zero')
    })

    it('numero_endereco_com_espacos', () => {
      const numeroEndereco = '   '
      cy.get('[name=addressNumber]').type(`${numeroEndereco}`);
      cy.get('.button-register').click();
      cy.contains('Informe um número maior que zero')
    })
})

