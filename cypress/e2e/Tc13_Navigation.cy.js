

describe("Test for Navigation in cypress",()=>{

    it("Test for Amazon Navigation",()=>{

        cy.visit("https://www.amazon.in/");
        //home page

        cy.wait(1000);

        cy.contains("Mobiles").click();
        //mobile page
        cy.wait(1000);

        //back()
        cy.go("back");

        cy.wait(1000);

        //forward()
        cy.go("forward");

        cy.wait(1000);
        //refresh

        cy.reload();


    })
})