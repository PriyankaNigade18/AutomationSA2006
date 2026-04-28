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

How to automate multiple webelements
---------------------------------------------
In cypress we use each()

cy.get("locator").each(($variableName)=>{

    //get the text
    cy.log($variableName.text())

    cy.wrap($variable).action()
    })




*/


describe("Test for Multiple Elements",()=>{

it("Test for Opencart list",()=>{
    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

    //this locator identify 13 elements
    cy.get("div.list-group>a").each(($link)=>{

        cy.log("Text is: "+$link.text());

        if($link.text().includes("Forgotten Password"))
        {
            //click on that ele
            cy.wrap($link).click();
        }

    })

})


it("Test for GoogleSearch",()=>{

    //open application
    cy.visit("https://www.google.com/");

    cy.get("#APjFqb").type("Jenkins");

    cy.get("ul[role='listbox']>li").each(($option)=>{

        cy.log("Text is: "+$option.text());
    })


})

it.only('Test footers form Opencart',()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

    cy.get("footer div.col-sm-3 ul>li>a").each(($link)=>{

        cy.log("FooterLink Text is: "+$link.text());
    })
})

})
