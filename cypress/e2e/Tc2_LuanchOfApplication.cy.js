/*
To open any application
-------------------------
cy.visit(url)

To get the title of current page
-------------------------------
cy.title()

To get current url application
------------------------------------
cy.url
*/

describe("This is for launch pf applications",()=>{


    it("This is google launch",()=>{

        cy.visit("https://www.google.com");
        cy.log("Google Page launch...");
        let appTitle=cy.title();
        cy.log("Title is: "+appTitle);//[object Object]

         let appUrl=cy.url();
        cy.log("Application url: "+appUrl);//[object Object]

    })


    it("This is amazon launch",()=>{
        cy.visit("https://www.amazon.in");
        cy.log("Amazon page launch...");
        let appTitle=cy.title();
        cy.log("Title is: "+appTitle);//[object Object]

        let appUrl=cy.url();
        cy.log("Application url: "+appUrl);//[object Object]
    })




})