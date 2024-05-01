/// <reference types="cypress" />


function deletarCarrinho(token) {  
  cy.request({
    method: 'DELETE',
    url: `carrinhos/cancelar-compra`,
    headers: {
      authorization: token,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
  })
}

  
  export { deletarCarrinho };