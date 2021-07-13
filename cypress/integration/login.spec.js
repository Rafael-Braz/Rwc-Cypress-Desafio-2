/// <reference types="cypress" />

import login from '../support/pages/login'



context('Login', () => {
    it('Realizar o acesso ao site', () => {
       // Preparação
        login.acessarPaginaDeLogin()
       // Ação
        login.PreencherFormulário()
        login.submeterFormulario();
       // verificação
       login.validarLogin()
        

       
    });
});