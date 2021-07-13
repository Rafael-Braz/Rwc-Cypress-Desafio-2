const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Login{

    acessarPaginaDeLogin()
    {
        cy.visit('/login');  
    }
    PreencherFormulário()
    {
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }
    submeterFormulario()
    {
        cy.get(el.buttonSub).click();
    }
    validarLogin(){
        
            cy.wait(`@${Routes.as.PostUserLongin}`).then((PostUserLongin) => {expect(PostUserLongin.response.statusCode).to.eq(200)})
            cy.get('a[ng-class*="feed"]').should('contain', 'Your Feed')
           
    
    }

} export default new Login()