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
=========================================
(*)contains (^)startswith  ($)endswith
----------------------------------------
1. *(partial match):contains() from string in Java/includes() in Js
-----------------------------------------------------------------------
Syntax:
------------
tagname[attribute*='value']

2. ^(Startswith:prefix value)
--------------------------
Syntax:
------------
tagname[attribute^='prefixvalue']


3. $(endswith:suffix value)
--------------------------
Syntax:
------------
tagname[attribute$='Suffixvalue']


Parent to child navigation
----------------------------
1. Parenttag childtag (space):all direct+indirect child
aside a....13 elements
2. parenttag>childtag (>):all direct child
div.list-group>a ...13 elements

Index in CssSelector
-------------------------
Syntax:
---------------
parenttag>childtag:nth-child(index)
div.list-group>a:nth-child(4)

4.using xpath(no more support from cypress)





*/



describe("Test for Locators",()=>
{

it.skip("Test CRM application for Login",()=>{

//open application
cy.visit("https://automationplayground.com/crm/");

//sign in with contains():visible text
//cy.contains("Sign In").click();

cy.screenshot("HomePage");
//signi using id id="SignIn": cssSelector with id
cy.get("#SignIn").click();

//assertion title
cy.title().should("include","Login");
cy.log("User navigated to login page");
cy.screenshot("LoginPage")

//email : cssselector with id
cy.get("#email-id").type("test@gmail.com");

//password:cssSelector with attribute
cy.get("input[placeholder='Password']").type("test123");

/*checkbox:cssSelector with id
For checkbox automation cypress have two methods
1.check()
2.uncheck()
*/
cy.get("#remember").click();

//static wait : like Thread.sleep() from java
cy.wait(2000);//2sec

//uncheck
cy.get("#remember").uncheck();

cy.screenshot("FillForm");
//submit button:cssSelector with classname
cy.get("button.btn.btn-default.btn-primary").click();

cy.screenshot("processCompleted");

})


it.only("Test Cypress Signature/symbols",()=>{

      cy.visit("https://www.amazon.in/");
      cy.wait(3000);

      cy.screenshot("AmazonhomePage");

      //cy.get("#twotabsearchtextbox").type("watch");

      //locator using *(partial match)
      cy.get("input[id*='searchtext']").type("watch");

      //locator using ^ (Startwith:prefix)
      cy.get("input[id^='twotab']").clear();

      //locator using $ (endswith:suffix)
      cy.get("input[id$='box']").type("laptop");


})






})






