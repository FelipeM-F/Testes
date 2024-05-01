
const el = require('./elements').ELEMENTS;

class Home {
    acessarHome(){
        cy.loginHome("teste@teste.com","123456") // Não é necessário criar um usuário, apenas informar algum valor nos campos.
    }

    inserirItemNaLista(){
        cy.get(el.inserirItem).first().click();
    }
    validarItemNaLista(){
        cy.listaProdutos();
        let amount = 0;
        amount++;
        cy.window().then((win) => {
            const products = win.localStorage.getItem('products');
            expect(products).to.contain(Cypress.env('id1'));
            expect(products).to.contain(`"amount":${amount}`);
          });
    }
}

export default new Home();