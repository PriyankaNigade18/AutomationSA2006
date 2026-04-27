


describe("Test for Locators(CssSelector)",()=>{

it("Test for Orangehrm login and logout feature",()=>{

    //open application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //username
    cy.get("input[name='username']").type("Admin");

    //password
    cy.get("input[type='password']").type("admin123");

    //login
    cy.get("button.oxd-button").click();

    //assertion
    cy.url().should("include","dashboard");
    cy.log("User navigated todashboard page");
    
    //logout
    cy.get("i.oxd-userdropdown-icon").click();

    //list-->logout
    //contains
    //cy.contains("Logout").click();

    //list-->4th child
    cy.get("ul.oxd-dropdown-menu>li:nth-child(4)>a").click();

})



})