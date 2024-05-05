import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../PageObjects/HomePage.cy.js";
Given('A user opens the login page', () =>
{
    cy.visit('https://www.saucedemo.com/v1/index.html')
   // HomePage.openURL("/");
    // "baseUrl": "https://www.saucedemo.com/v1/index.html",
 })
When('A user enter the username "standard_user"', () =>
{
    cy.wait(5000)
    //cy.get("#user-name").type('standard_user')
    HomePage.inputUsername().type('standard_user');
})

And('A user enter the password secret_sauce', () =>
{
    cy.wait(5000)
    //cy.get("#password").type('secret_sauce')
    HomePage.inputPassword().type('secret_sauce');
 })

And('A user clicks on the login button', () =>
{
    //cy.get("#login-button").click()
    HomePage.loginButton().click();
 })

Then('A user will be success logged in', () =>
{
    //cy.url().should('contains', '/dashboard/index')
    cy.get(".product_label").should('contain','Products')
    cy.wait(500)
    cy.screenshot()
    //cy.get(".product_sort_container").select('Name (Z to A)')
    cy.get("select").select(2)
   // cy.get("select").select(1).invoke("val").should("eq", "lowestprice")
   cy.screenshot()
   cy.wait(500)
 })

And('User logout', () =>
{
    //cy.get(".bm-burger-button").click()
    //cy.get('#logout_sidebar_link').click()
    HomePage.logout();
     })
 
Then('User logout sucessfully', () =>
{
    cy.url().should('contains', 'https://www.saucedemo.com/v1/index.html')
    cy.wait(500)
 })

 When('A user enter the username "locked_out_user"', () =>
{
    cy.wait(5000)
    //cy.get("#user-name").type('locked_out_user')  
    HomePage.inputUsername().type('locked_out_user');
})
 Then('A user will be get failed message', () =>
 {
    cy.wait(500)
    cy.get('[data-test="error"]').should("contain", "Sorry, this user has been locked out.")
    cy.screenshot()
  })

