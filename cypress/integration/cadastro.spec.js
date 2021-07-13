/// <reference types="cypress" />
import cadastro from '../support/pages/cadastro'


context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        //Preparação
    cadastro.acessarPaginaCadastro()
        //Ação
    cadastro.preencherFormulario()
    cadastro.submeterCadastro()
        //Validação
    cadastro.validarNewUser()        
    });
});