
/*
Xpath
============
- Xpath is path of element from html or xml page
- Xpath  identify elements directly form DOM(document object model)
- Xpath can travel in both direction(parent to child and child to parent)
- Xpath support multiple menthods: text() normalizespace() contains() startswith() 

Types:
============
1.Absolute xpath
-------------------
- Absolute xpath identify element from root node
- Absolute xpath starts with '/'

/html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input


2.Relative xpath
-----------------------
- Relative xpath identify element from elements relative property
- Relative xpath starts with //

//*[@id="input-firstname"]

Syntax
==============
//tagname[@attribute='value']

*/




describe("This is for xpath",()=>{

it("Test login functionality using xpath locator",()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email
    cy.xpath("//input[@name='email']").type("test2525@gmail.com");

    //password
    cy.xpath("//input[@type='password']").type("test123");

    //login button
    cy.xpath("//input[@value='Login']").click();




})



})