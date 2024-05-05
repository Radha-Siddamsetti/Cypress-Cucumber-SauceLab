import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../PageObjects/HomePage.cy.js";
import { ProductsPage } from "../PageObjects/ProductsPage.cy.js";
import { PerInfoPage } from "../PageObjects/PerInfoPage.cy.js";
Given('A user opens the login page', () =>
{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    HomePage.inputUsername().type('standard_user');
    HomePage.inputPassword().type('secret_sauce');
    HomePage.loginButton().click();
 })
/*And('Add the products into the cart"', () =>
{
    cy.wait(5000)
   ProductsPage.addBackpack().click();
   //ProductsPage.addBikeLight().click();
   //ProductsPage.addBolttShirt().click();
   //cy.get("#inventory_container.inventory_tem:contains(Sauce Fleece Jacket)".find(".btn_primary btn_inventory")).click();
   //cy.get("a:inventory-item.html?id=1").click();
   //cy.get(".inventory_item_name").first().click();
   cy.get("#item_2_img_link > .inventory_item_img").click();
   cy.screenshot()
})
*/
And('click on the cart', () =>
{
      cy.wait(500)
      ProductsPage.ckShopCart().click()
      //cy.get(".fa-shopping-cart").click()
      cy.wait(1000)
      cy.screenshot()
      ProductsPage.btnCheckOut().click()
      //cy.get(".checkout_button").click()
     
 
 })

 And('Fill the information', () =>
{
    cy.wait(500)
    PerInfoPage.input_FirstName().type("Abc");
    //cy.get("#first-name").type("Abc")
    PerInfoPage.input_LastName().type("Abc");
    //cy.get("#last-name").type("Abc")
    PerInfoPage.input_Zip().type("Abc");
    //cy.get("#postal-code").type("Abc")
    cy.screenshot()
    PerInfoPage.btn_Continue().click();
    //cy.get(".cart_button").click()
    cy.screenshot()
 })

 Then('Finsh the order', () =>
{
    PerInfoPage.btn_Continue().click();
    //cy.get(".cart_button").click()
    cy.get(".subheader").should('contain', 'Finish');
    cy.screenshot()
 })