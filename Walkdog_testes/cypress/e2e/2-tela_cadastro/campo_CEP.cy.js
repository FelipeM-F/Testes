describe('Testes dos formulários da tela inicial', () => {
    beforeEach(() => {
      cy.visit('https://walkdog.vercel.app/signup')
    })

    it('cep_correto', () => {
      const cep = '91110001'
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
    })

    it('cep_incorreto', () => {
      const cep = '123456789'
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
      cy.contains('Informe um CEP válido')
    })

    it('cep_com_letras', () => {
      const cep = 'abcd'
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
      cy.contains('Informe um CEP válido')
    })

    it('cep_vazio', () => {
      cy.get('.field input[type=button]').click();
      cy.contains('Informe um CEP válido')
    })

    it('cep_com_pontuacao', () => {
      const cep = '12.345-678'
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
      cy.contains('Informe um CEP válido')
    })

    it('cep_com_espacos', () => {
      const cep = ' 12345-678 '
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
      cy.contains('Informe um CEP válido')
    })

    
    it('cep_preenchido_com_espaços', () => {
        const cep = '         ';
        cy.get('[name=cep]').type(`${cep}`);
        cy.get('.field input[type=button]').click();
        cy.contains('Informe um CEP válido')
    })

    it('cep_com_zeros', () => {
      const cep = '00000-000'
      cy.get('[name=cep]').type(`${cep}`);
      cy.get('.field input[type=button]').click();
      cy.contains('Informe um CEP válido')
    })

})

