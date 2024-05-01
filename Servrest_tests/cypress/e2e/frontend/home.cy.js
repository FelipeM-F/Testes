
/// <reference types="cypress" />

import Home from './pages/Home'

describe('Adicionar item na lista', () => {
  beforeEach(() => {
    Home.acessarHome();
  })

  it('deve poder inserir um produto', () => {
    Home.inserirItemNaLista();
    Home.validarItemNaLista();
  });  
})