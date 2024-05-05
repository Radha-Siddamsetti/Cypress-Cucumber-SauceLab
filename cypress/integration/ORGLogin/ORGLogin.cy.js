import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
Given('A user opens the login page', () =>
{
    cy.visit('/')
    // "baseUrl": "https://opensource-demo.orangehrmlive.com/",
 })
When('A user enter the username "Admin"', () =>
{
    cy.wait(5000)
    cy.get("[name='username']").type('Admin')  
})

And('A user enter the password admin123', () =>
{
    cy.wait(5000)
    cy.get("[name='password']").type('admin123')
 })

And('A user clicks on the login button', () =>
{
    cy.get("[type='submit']").click()
 })

Then('A user will be success logged in', () =>
{
    cy.url().should('contains', '/dashboard/index')
    cy.wait(500)
 })

And('User logout', () =>
{
    cy.get(".oxd-userdropdown i").click()
    cy.get('.oxd-dropdown-menu').contains('Logout').click()
     })
 
Then('User logout sucessfully', () =>
{
    cy.url().should('contains', '/index.php/auth/login')
    cy.wait(500)
 })

And('A user enter the wrong password 123', () =>
{
    cy.wait(5000)
    cy.get("[name='password']").type('123') 
})

Then('A user will be get failed message', () =>
{
   cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
})

