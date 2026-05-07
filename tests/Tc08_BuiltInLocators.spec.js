/*

Locator
=============
Address of the webelement

Playwright support 3 locators Strategies
---------------------------------------
1.BuiltIn Locator
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

*/

import {test,expect}from "@playwright/test"


test("Test for BuiltIn Locators",async({page})=>{


//open application
await page.goto("https://automationplayground.com/crm/");

//Sign In link: getByRole()
//await page.getByRole("link",{name:"Sign In"}).click();

//Sign In link: getByText()
await page.getByText("Sign In").click();


//email id: getByPlaceholder()
await page.getByPlaceholder("Enter email").fill("test@gmail.com");

//password: getByPlaceholder()
await page.getByPlaceholder("Password").fill("test123");

//checkbox: getByLabel()
/*
Checkbox/Radio button automation
check()
uncheck()
click()
*/
await page.getByLabel("Remember me").check();
await page.waitForTimeout(1000);
await page.getByLabel("Remember me").uncheck();

//submit button: getByRole()
await page.getByRole("button",{name:"Submit"}).click();

//on navigation add assertion
await expect(page).toHaveURL(/customers/);
console.log("User Navigated to customers page!");

//get the text of element and print in console
//To get the text of any element 1.textContent()  2.innerText()
let headingText=await page.getByText("Our Happy Customers").textContent();
console.log("Text is: "+headingText);

//recommended: innerText()
let headingText2=await page.getByText("Our Happy Customers").innerText();
console.log("Text of Element is: "+headingText2);





await page.waitForTimeout(2000);





})




test("Test for getByAltText() locator",async({page})=>{

//open application
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//Highlight the corresponding element(s) on the screen. 
//image: alt="company-branding":getByAltText()
await page.getByAltText("company-branding").highlight();


await page.waitForTimeout(3000);
})


test("Test for getByTilte()",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    //search box : title="Search" : getByTitle()
    await page.getByTitle("Search").fill("Jenkins");

    await page.waitForTimeout(2000);
})

test.only("Test for getByTestId()",async({page})=>{

    //open application
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //data-testid="nav-home": getByTestId()
    await page.getByTestId("nav-home").click();

    await page.waitForTimeout(2000);
})

