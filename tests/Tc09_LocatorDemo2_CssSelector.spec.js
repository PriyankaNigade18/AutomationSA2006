/*

Locator
=============
Address of the webelement

Playwright support 3 locators Strategies
---------------------------------------
1.BuiltIn Locator(7methods)
2.CssSelector
3.Xpath

Built In Locators
=======================
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


Note:
========
At the time of cssSelector/xpath use locator()
page.locator(cssSelector/xpath).click()/.fill()




2.cssSelector
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


*/
import {test,expect} from "@playwright/test"

test("Test for cssSelector locator",async({page})=>{

    //open application
    await page.goto("https://www.saucedemo.com/");

    //username: cssSelector with id
    
    // let userNameEle=page.locator("#user-name");
    // await userNameEle.fill("standard_user");

    await page.locator("#user-name").fill("standard_user");

    //password: cssSelector with attribute
    await page.locator("input[type='password']").fill("secret_sauce");

    //login: cssSelector with className
    await page.locator("input.submit-button").click();

    //assertion

    await expect(page).toHaveURL(/inventory/);
    console.log("User navigated to Inventory page!");
    
    //menu
    await page.locator("#react-burger-menu-btn").click();

    //logout
    await page.locator("#logout_sidebar_link").click();

await page.waitForTimeout(2000);
})