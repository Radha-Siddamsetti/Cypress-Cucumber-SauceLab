import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user is on the article page', () =>
  {
  // clear cookies
  cy.clearCookie('session_id')
  // Visit URL
  cy.visit('https://yrk.branch-master.axate.io/articles/1')
  cy.wait(5000).screenshot()
 })

 When('the user clicks on Get a day pass, yellow button, inside the article', () =>
 {
 // click 'Get a day pass'
 
 const iframe = cy.get("#axate-notice")
 .its('0.contentDocument.body').should('be.visible').then(cy.wrap)
 iframe.find('a').contains('Get a day pass').click()
 cy.screenshot()

  // Click continue button
  cy.xpath("//a[contains(text(),'Continue')]").click()
 })  

 And('the user fills in a random email address', () =>
 {    
  // enter email id
  cy.get("#email").type("itsme123@gmail.com")
 })  

 And('the user selects "UK" as the country and enters a valid UK postcode', () =>{
 // select UK and Postcode
   cy.get("#country").select("United Kingdom")
   cy.get("#postcode").type("HA3 7ST")
  
 }) 

 And('the user selects a random preference for marketing preferences', () =>{
    // select radio buttons
   cy.get("[name='publisher_marketing_news']").eq(1).click()
   cy.get("[name='publisher_marketing_offers']").eq(0).click()
   cy.get("[name='axate_marketing']").eq(1).click()
   cy.wait(1000).screenshot()
 }) 

 And('the user clicks "Continue"', () =>{
   // click continue button 
   cy.wait(5000)
   cy.get("[class='global-submitButton sign-up__button']").click()
  
 }) 

 And('the user selects any payment amount', () =>{
  // click continue button
  cy.wait(5000)
  cy.get("[class='global-submitButton sign-up__button']").click()
  
 }) 

 And('the user selects Voucher', () =>{
  // click voucher
  cy.wait(5000)
   cy.xpath("//span[contains(text(),'Voucher')]").eq(0).click()
      }) 

 And('the user fills in "QA2024"', () =>{
  // enter "QA2024"
   cy.get("[name='voucher']").type("QA2024")
   cy.wait(5000).screenshot()
 }) 

 And('the user clicks Redeem', () =>{
  // click on Redeem button
  cy.wait(5000)
  cy.get('[value="Redeem"]').click()
 }) 

 Then('the user should see confirmation "You are ready to read your first article"', () => {
  // verify success message
  cy.wait(7000)
  const iframe2 = cy.get("#iframe__popup_notices")
  .its('0.contentDocument.body').should('be.visible').then(cy.wrap)
  iframe2.find('h4').contains('You are ready to read your first article.')
  cy.screenshot()
})
