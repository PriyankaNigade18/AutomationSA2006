/*
Find() : finds decendent node from DOM for the element
find() use always with get()
get(parent).find(decendentnode)

Get the descendent DOM elements of a specific selector.
*/

describe("Test for find()",()=>{

it("Test for Decendent node using find()",()=>{
    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

    // cy.get("aside[id='column-right'] a").each(($link)=>{

    //     cy.log("Text is: "+$link.text());
    // })

     cy.get("aside[id='column-right']>div").find('a').each(($link)=>{

        cy.log("Text is: "+$link.text());
    })
})

})