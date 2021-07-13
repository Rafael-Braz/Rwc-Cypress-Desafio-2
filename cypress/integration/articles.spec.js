/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'
context('Publicação', () => {
    // Preparação
    beforeEach(() => {
        cy.backgroundLogin();
        articles.acessarFormularioDeNovaPublicacao()
        
    })
    it('Criar uma nova publicação', () => {
        //Ação
        articles.preencherFormulario()
        articles.submeterPublicacao()
        //Validação
        articles.VerificarSeAPublicacaoFoiCriadaComSucesso()
    });
});