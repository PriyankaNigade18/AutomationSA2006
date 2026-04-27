/*
For any single webelement or multiple webelements interaction and 
to get the title/url  even for assertion use cypress variable

For Single weblement/title/url use then()
For Multiple webElements use each()


How to get the title and print it
----------------------------------------
cy.title().then((variableName)=>{
    
    cy.log("Application title is: "+variableName)
    
    })

How to get the url and print it 
-----------------------------------
cy.url().then((variableName)=>{
    cy.log("Application url is: "+variableName);
    })

    //for single WebElements
    ===============================
     -single webelemen we used to store into variable with $ sign
     $variableName
     -To perform action on webelement use wrap()

     When to use:
     ------------
     If you want element to identify and store it into variable then follow this

     Syntax:
     ===========
     cy.get("locator").then(($variableName)=>{

        //to get the text of element
        cy.log("Element text is: "+$variableName.text());

        //to perform click action

        cy.wrap($variableName).click();

        //to perform type action
        cy.wrap($variableName).type("hjhjg")
        })






*/


describe("Test for Cypress Variables",()=>{


it("Test for title and url",()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    //get the title store it into variable and print it
    cy.title().then((appTitle)=>{//here appTitle is variable name

        cy.log("Application title is: "+appTitle);

    })  

    //get the url and store it into variable and print it 
        cy.url().then((appUrl)=>{//here appUrl is variable name
            cy.log("Application url is: "+appUrl)

        })




})


it.only("Test for Element using Cypress Variable",()=>{

//open application
cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

//for visible text
cy.contains("Returning Customer").then(($ele)=>{

    let elementText=$ele.text();
    cy.log("Element text is: "+elementText)
})

//for email id
cy.get("#input-email").then(($emailId)=>{

    //to click on email
    cy.wrap($emailId).click();

    //to type on email
    cy.wrap($emailId).type("test@gmail.com");

})

})



})