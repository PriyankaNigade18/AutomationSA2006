/*Locator
=============
Address of the webelement

Playwright support 3 locators Strategies
---------------------------------------
1.BuiltIn Locator(7methods)
2.CssSelector
3.Xpath

xpath
==============
-path of webelement from html/xml document
-xpath identify element from DOM
-xpath support multiple methods
-xpath can travel in both direction(parent to child node and child to parent node)

Types
=========
1.Absolute
----------------
- starts with root node
- starts with '/'

2.Relative
-----------------
- Idnetify element based on relative property
-starts with '//'

SyntaX:
============
//tagname[@attribute='value']

Xpath with indexing/position()
------------------------------------

xpath methods
----------------
1.text()
2.normalizespace()
3.contains()
4.startsWith()


Xpath Axies
===================
following
preceding




*/
import {test,expect} from "@playwright/test"

test("Test for Basic syntax of xpath",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email
    await page.locator("//input[@name='email']").fill("test2525@gmail.com");

    //password
    await page.locator("//input[@type='password']").fill("test123");

    //login
    await page.locator("//input[@value='Login']").click();

    let headingText=await page.locator("//h2[text()='My Account']").innerText();
    console.log("Heading text is: "+headingText);
    

    await page.waitForTimeout(2000);



})
