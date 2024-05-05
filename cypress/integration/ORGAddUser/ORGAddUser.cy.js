

import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../PageObjects/ORGHome_Page.cy";

Given('User login to the Portal', () =>
{
   HomePage.openURL();
   HomePage.inputUsername().type('Admin');
   HomePage.inputPassword().type('admin123');
   HomePage.loginButton().click();
})

And('Click on the Admin Menu', () =>
{  
    cy.xpath('//span[.="Admin"]').click()
})

And('Click on the Add button to add user', () =>
{  
    cy.get("[type='button']").contains('Add').click()
})

And('Fill in all the details', () =>
{      cy.get(".oxd-select-wrapper").last().click()
    //cy.get(".oxd-select-text oxd-select-text--active").first().click()
    //cy.get(".oxd-select-text-input").contains('Admin').eq(1).click()
    cy.get('.oxd-select-text--arrow').first().click()
    //cy.get(".oxd-select-wrapper").last().click()
      //cy.get(".oxd-select-wrapper").last().type('Enabled')
   // cy.get("[type='password']").first().type('admin123')
    //cy.get("[type='password']").last().type('admin123')
    //cy.get('[placeholder='Type for hints...']').type('ABCDEF')
})