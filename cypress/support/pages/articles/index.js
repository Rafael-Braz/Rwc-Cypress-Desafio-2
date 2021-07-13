/// <reference types="cypress" />
const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'


class Articles {

    
    acessarFormularioDeNovaPublicacao(){
        cy.get('a[href*=editor').click();
    }

    preencherFormulario(){
        cy.get(el.inputTitle).type(faker.lorem.word());
        cy.get(el.inputDescription).type(faker.lorem.words());
        cy.get(el.textAreaContext).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('Cypress');
    }
    submeterPublicacao(){

    

    cy.get(el.buttonSubmit).click();  

    

    }

    VerificarSeAPublicacaoFoiCriadaComSucesso(){

        cy.wait(`@${Routes.as.POSTArticles}`).then((postArticlesResponse) => {expect(postArticlesResponse.response.statusCode).to.eq(200)})
        cy.wait(`@${Routes.as.GETArticlesTitle}`).then((getArticlesTitles) => {expect(getArticlesTitles.response.statusCode).to.eq(200)})
        cy.wait(`@${Routes.as.GETArticlesTitleCommeents}`).then((getArticlesTitleComments) => {expect(getArticlesTitleComments.response.statusCode).to.eq(200)})
    
    }
} export default new Articles();
