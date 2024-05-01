## Testes ServeRest

Testes realizado da API ServeRest (https://serverest.dev/)

Foram realizados testes no frontend, onde se utilizou o padrão de Page Objects para melhor estruturar o código e no backend
No front foram feitos testes para:
* Criar um usuário
* Inserir items em uma lista de conmpras
No back foram feitos testes para:
* Buscar e realizar o login de um usuário com privilégios de administrador
* Criar e excluir um carrinho vínculado a um usuário

* ## Para rodar o projeto

É necessário possuir o nodejs (https://nodejs.org/) instalado e rodar os seguintes comandos no terminal:

      npm install
      npx cypress open

* Selecionar e2e Testing na tela que abrir
* Escolher um navegador e clicar em "Start E2E Testing"
* Selecionar um teste da lista.

Obs: Caso você queira rodar os testes apenas no terminal você pode trocar o camndo cypres open por:

      npx cypress run
