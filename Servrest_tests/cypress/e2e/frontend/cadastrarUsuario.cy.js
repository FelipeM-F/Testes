
/// <reference types="cypress" />

import CadastrarUsuário from "./pages/CadastrarUsuário"


describe('Cadastrar usuário no sistema', () => {
    beforeEach(() => {
      CadastrarUsuário.acessarCadastro();
    })

    it('deve poder realizar o cadastro', () => {
      const num = Math.floor(Math.random() * 10001)
      const nome = "teste"
      const email = `teste${num}@teste.com`
      const senha = "123456"
      CadastrarUsuário.preencherDadosUsuario(nome, email, senha)
      CadastrarUsuário.validarCadastro()
    })
})