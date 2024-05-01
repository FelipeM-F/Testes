
const el = require('./elements').ELEMENTS;

class CadastrarUsuario {
    acessarCadastro(){
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    }

    preencherDadosUsuario(nome, email, senha){
        cy.get(el.nome).type(nome);
        cy.get(el.email).type(email);
        cy.get(el.senha).type(senha);
        cy.get(el.botaoCadastrar).click();
    }

    validarCadastro(){
        cy.intercept('POST', 'usuarios').as('cadastroRequest');
        cy.wait('@cadastroRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(201);
    });
    }

}

export default new CadastrarUsuario();