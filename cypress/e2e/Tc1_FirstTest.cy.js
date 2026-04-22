
/*
First create spec file===>create Suite describe()===>Create Testcase it()

To open application
=========================
cy.visit("url");

/// <reference types="Cypress" />
*/


describe("This is suite1",()=>{

//testcase
it("This is testcase1",()=>{

cy.visit("https://www.google.com");
cy.log("Google page open!")


})




})