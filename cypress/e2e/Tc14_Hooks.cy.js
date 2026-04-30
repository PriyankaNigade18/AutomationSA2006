/*
Hooks
==============
Cypress Hooks will help to attached some precodition and postcondition to test case

1.before: execute one time before all the test cases
2.after: execute one time after all the test cases
3.beforeEach: execute before every test case
3.afterEach: execute after every test case
*/



describe("Test For Hooks",()=>{

    //hooks

    before(()=>{
        cy.log("Before hook executes only once before all test cases");
    })
    after(()=>{
        cy.log("after hook executes only once after all test cases");
    })

     beforeEach(()=>{
        cy.log("BeforeEach hook executes before every test cases");
        cy.visit("https://automationplayground.com/crm/");

    cy.contains("Sign In").should("be.visible").click();
    })

       afterEach(()=>{
        cy.log("AfterEach hook executes after every test cases");
            //get the title and print it

            cy.title().then((appTitle)=>{
                    cy.log("Title: "+appTitle)
            })

    })




//test cases
it("Test for SignIn link",()=>{
//open application
// cy.visit("https://automationplayground.com/crm/");

// cy.contains("Sign In").should("be.visible").click();

//url validation
cy.url().should("include","login");
cy.log("User is navigated to login page!");


})

it("Test for Login scenario",()=>{
    
    // cy.visit("https://automationplayground.com/crm/");
    // cy.contains("Sign In").click();
    //email
    cy.get("#email-id").type("test@gmail.com");

    //password
    cy.get("#password").type("test123");

    //submit
    cy.get("#submit-id").click();

    //url assertion
    cy.url().should("include","customers");
    cy.log("User completed Login!");

})

it("Test for Sign Out link",()=>{
    
    // cy.visit("https://automationplayground.com/crm/");
    // cy.contains("Sign In").click();
    //email
    cy.get("#email-id").type("test@gmail.com");

    //password
    cy.get("#password").type("test123");

    //submit
    cy.get("#submit-id").click();

    //signOut validation
    cy.contains("Sign Out").should("be.visible").click();

    cy.get("p").should("have.text","Thank you for using the CRM. See you next time!");
    cy.log("User sign Out process completed!");
})


})