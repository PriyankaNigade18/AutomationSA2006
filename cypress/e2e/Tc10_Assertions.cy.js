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

describe("Test Assertion in Cypress",()=>{

it("Test for Implicit Assertion",()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    cy.get("h2").eq(1).should("have.text","Returning Customer");

    //title 
    cy.title().should("eq","Account Login");//full match

    cy.title().should("include","Login");//partial match

    //emailid
    cy.get("#input-email").should("be.visible");

    cy.get("#input-email").should("be.enabled");

    //type
    cy.get("#input-email").type("test@gmail.com");

    cy.get("#input-email").should("have.value","test@gmail.com");

    cy.get("footer a").should("have.length",16);


    //and() +should()=one line logic
    cy.get("#input-email").should("be.visible").and("be.enabled").and("have.value","test@gmail.com");




})

it.only("Test for Explicit assertion",()=>{

     cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

     cy.get("#input-email").type("test@gmail.com");

     //explicit :expect() or assert()

     cy.get("#input-email").then(($ele)=>{

        //get the value of that element: val()
        let value=$ele.val();

        //expect():BDD
        expect(value).eql("test@gmail.com");

        //assert:TDD
        assert.equal(value,"test@gmail.com");
     })

})



})

