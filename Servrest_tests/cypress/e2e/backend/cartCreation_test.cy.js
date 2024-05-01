/// <reference types="cypress" />

import * as CriarCarrinho from './requests/POST_cart.spec.js';
import * as DeletarCarrinho from './requests/DELETE_cart.spec.js';

describe('POST Login', () => {
  it('Lista Produtos', () => {
    let token;
    cy.userToken().then(() => {
      token = Cypress.env('authorization');
    }).then(() => {
      CriarCarrinho.criarCarrinho(token);
      DeletarCarrinho.deletarCarrinho(token);
    })
  })
});