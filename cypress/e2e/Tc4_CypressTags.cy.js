/*
Tags will help you to control test case execution
1 .only:  it.only() or describe.only()
2.skip:   it.skip()  or describe.skip()
*/

describe.skip("Test Suite1",()=>{
    it.only("Test CRM app",()=>{
        cy.visit("https://automationplayground.com/crm/");

        //title validation
        cy.title().should("include","Service");
        cy.log("Title validation is completed!");
    })

    it.only("Test opencart app",()=>{
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

        //title validation
        cy.title().should("include","Login");
        cy.log("Title validation is completed!");
    })

    it.only("Test SwagLab app",()=>{
        cy.visit("https://www.saucedemo.com/");

        //title validation
        cy.title().should("include","Labs");
        cy.log("Title validation is completed!");
    })
})

//testSuite2
describe.only("Validation of title and url of google application",()=>{

it("Test for Google Url",()=>{
    //open application
    cy.visit("https://www.google.com/");

    //get the url: url()
    cy.url().should("eq","https://www.google.com/");//exact match

    //partial match: include
    cy.url().should("include","google.com");


})




})