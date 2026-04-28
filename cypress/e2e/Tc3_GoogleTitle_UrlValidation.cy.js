/*
Assertion
----------------
Assertions will help to validate current state of an application

Cypress support two types assertions
-----------------------------------
1.Implicit Assertion
--------------------------
1.should()
2.and()

2.Explicit Assertion
-------------------------
assert(): TDD
expect(): BDD

Note: To use explicit assertions we need cypress variable
*/


describe("Validation of title and url of google application",()=>{

it("Test title of google",()=>{

//open google application
cy.visit("https://www.google.com/");

//to get the title: title()
//exact match: equality 
cy.title().should("eq","Google");//Asserts that the target is strictly (===) equal to the given val

//invalid assertion
cy.title().should("eq","GoogleApp");//you will get assertion error after 4sec

cy.log('Title validation is done!');
})

it("Test for Google Url",()=>{
    //open application
    cy.visit("https://www.google.com/");

    //get the url: url()
    cy.url().should("eq","https://www.google.com/");//exact match

    //partial match: include
    cy.url().should("include","google.com");


})




})