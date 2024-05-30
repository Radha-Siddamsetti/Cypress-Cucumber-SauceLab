import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../PageObjects/HomePage.cy.js";

Given('A user opens the login page', () =>
{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    HomePage.inputUsername().type('standard_user');
    HomePage.inputPassword().type('secret_sauce');
    HomePage.loginButton().click();
    cy.wait(500)
 })

 And('click on the About section information', () =>
{
     HomePage.aboutPage();
     cy.screenshot()
    //cy.xpath("//span[contains(text(),'Pricing')]").should('be.visible')
 })

 