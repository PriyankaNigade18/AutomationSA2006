/*
How to automate WebElement?
-------------------------------
WebElement is UI Elements(textbox,link,button,dropdown...etc)

1.We identify WebElement using Address of that webelement(Locator)
2.Once element identified we perform action on that element

What is Locator?
=====================
Locator is address of an element from html/xml page

Cypress Locators
=======================
1.contains()
------------------
contains() will identify element based on its visible text
example:
----------------
<a>Support</a>

cy.contains("Support")


2.using tagname
-------------------
From webapplication multiple webelement may have same tagname
ScenarioS:
---------
Number of links?
Number of images?
Number of input boxes?

<a>,<img>,<input>
Syntax:
-----------------
cy.get(tagname);

3.cssSelector(default locator in cypress)
------------------------------------
-CssSelector is locator to identify webelement based css properties
-CssSelector is faster than xpath as CssSelector can travel in one direction(parent tag to child tag)

1.tagname with id(#)
-----------------
Syntax:
--------------
tagname#id OR #id

Cypress
--------------
cy.get(locator)


2.tagname with attribute
----------------------------
Syntax:
----------------
tagname[attribute='value']

3.tagname with className
----------------------------
Syntax:
------------
tagname.className

class=btn btn-default btn-primary
      c1     c2          c3

(*)contains (^)startswith  ($)endswith
----------------------------------------


Parent to child navigation
----------------------------

Index in CssSelector
-------------------------






4.using xpath(no more support from cypress)





*/



describe("Test for Locators",()=>
{

it("Test CRM application for Login",()=>{

//open application
cy.visit("https://automationplayground.com/crm/");

//sign in with contains():visible text
//cy.contains("Sign In").click();

//signi using id id="SignIn": cssSelector with id
cy.get("#SignIn").click();

//assertion title
cy.title().should("include","Login");
cy.log("User navigated to login page");



})




})






