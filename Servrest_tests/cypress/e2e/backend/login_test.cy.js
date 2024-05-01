/// <reference types="cypress" />

import * as UserLogin from './requests/POST_login.spec.js';

describe('POST Login', () => {
  it('Login', () => {
    UserLogin.userLogin();
  });
});