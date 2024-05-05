export class HomePage {

    static openURL(){ return cy.visit("/")}
    static inputUsername() {return cy.get("#user-name")}
    static inputPassword() {return cy.get("#password")}
    static loginButton() {return cy.get("#login-button")}
    
    static logout() 
    {
        cy.get(".bm-burger-button").click()
        cy.get('#logout_sidebar_link').click()
    }

    static aboutPage() 
    {
        cy.get(".bm-burger-button").click()
        
        cy.get('#about_sidebar_link').click()
    }
}