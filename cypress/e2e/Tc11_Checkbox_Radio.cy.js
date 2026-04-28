/*

first()
last()
eq(index)
*/

describe("Test for Radio buttons & checkbox",()=>{

    it("Test for Radio buttons",()=>{

        cy.visit("https://formy-project.herokuapp.com/form");

    cy.get("input[type='radio']").first().click();

    cy.wait(2000);

    cy.get("input[type='radio']").last().click();

    cy.wait(2000);

    cy.get("input[type='radio']").eq(1).click();
    })
    
    //test for checkbox :Assignment

})

