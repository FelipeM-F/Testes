/// <reference types="cypress" />


function criarCarrinho(token) {
 
    
  cy.listaProdutos().then(() => {
    const prod1 = Cypress.env("id1");
    const prod2 = Cypress.env("id2");
    
      cy.request({
        method: 'POST',
        url: 'carrinhos',
        headers: {
          authorization: token
        },
        body: {
          "produtos": [
            {
              "idProduto": prod1,
              "quantidade": 1
            },
            {
              "idProduto": prod2,
              "quantidade": 3
            }
          ]
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
      })    
  }); 
}
  
  export {criarCarrinho };