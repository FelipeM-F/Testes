Cypress.Commands.add('loginHome', (email, token) => {
 
    cy.visit('https://front.serverest.dev/home', {
      onBeforeLoad: (browser) => {
        browser.localStorage.setItem('serverest/userEmail', email)
        browser.localStorage.setItem('serverest/userToken', token)
      }
    });
});

Cypress.Commands.add('listaProdutos', () => {
  cy.request({
    method: 'GET',
    url: 'produtos',

  }).then((response) => {
    expect(response.status).to.eq(200);
    const id1 = response.body.produtos[0]._id;
    const id2 = response.body.produtos[1]._id;
    Cypress.env("id1", id1);
    Cypress.env("id2", id2);
  });
});

Cypress.Commands.add('dadosLogin', () => {
  cy.request({
      method: 'GET',
      url: 'usuarios',
  }).then((response) => {
      const firstAdmin = response.body.usuarios.find(usuario => usuario.administrador === 'true');
      Cypress.env('email', firstAdmin.email);
      Cypress.env('password', firstAdmin.password);
      Cypress.env('id', firstAdmin.idUsuario);
  });
});

Cypress.Commands.add('userToken', () => {
  cy.dadosLogin().then(() => {
      cy.request({
          method: 'POST',
          url: 'login',
          body: {
            "email": Cypress.env('email'),
            "password": Cypress.env('password')
          }
          }).then((response) => {
              Cypress.env('authorization', response.body.authorization);
              })
  })
});