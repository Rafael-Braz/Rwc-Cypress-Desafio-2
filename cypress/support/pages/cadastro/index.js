const el = require('./elements').ELEMENTS
const faker = require('faker')
import Routes from '../../routes'
let name = faker.name.firstName() + faker.name.lastName();

class Cadastro{
    acessarPaginaCadastro(){
        cy.visit('register');
    }
    preencherFormulario(){
        cy.get(el.inputName).type(name);
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(faker.internet.password());
    }
    submeterCadastro(){
        cy.get(el.buttonSubmit).click();
    }
    validarNewUser(){
        cy.log(name);
        cy.wait(`@${Routes.as.PostNewUser}`).then((PostNewUser) => {expect(PostNewUser.response.statusCode).to.eq(200)})
        cy.get('div[ng-show= "!$ctrl.loading && !$ctrl.list.length"').should('contain', 'No articles are here... yet.')
        cy.get(':nth-child(4) > .nav-link').should('contain', name)
       
      

    }
    


        
} export default new Cadastro()