class Routes{

    as = {
        POSTArticles: 'POSTArticles',
        GETArticlesTitle: 'GETArticlesTitle',
        GETArticlesTitleCommeents: 'GETArticlesTitleCommeents',
        PostNewUser: 'PostNewUser',
        PostUserLongin: 'PostUserLongin'

    }

    init(){

        cy.intercept({method: 'POST', path:'**/api/articles'}).as(this.as.POSTArticles)
        cy.intercept({method: 'GET',  path:'**/api/articles/**'}).as(this.as.GETArticlesTitle)
        cy.intercept({method: 'GET',  path:'**/api/articles/**/comments'}).as(this.as.GETArticlesTitleCommeents) 
        cy.intercept({method: 'POST', path: '**/api/users'}).as(this.as.PostNewUser)
        cy.intercept({method: 'POST', path: '**/api/users/login'}).as(this.as.PostUserLongin)
        
        
    }

}export default new Routes();
