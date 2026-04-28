/*
Cypress doesn’t support true minimize/maximize like a real browser window (because it runs inside a browser controlled by Electron or Chrome).
 But you can simulate this behavior using cy.viewport()

*/

describe("Test for Viewport",()=>{

    it("Test for Swaglab viewport",()=>{

        cy.visit("https://www.saucedemo.com/");

        //maximum size 1920*1080 (W*H)
        cy.viewport(1920,1080);

        cy.wait(1000);

        cy.viewport(100,100);

     cy.wait(1000);


        //iphone
        cy.viewport("iphone-8");
    })
})