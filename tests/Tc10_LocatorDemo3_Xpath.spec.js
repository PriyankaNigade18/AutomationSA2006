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
=======================================
Xpath with indexing/position()
------------------------------------
Syntax:
==============
(xpath)[index]
OR
(xpath)[position()=index]

==================================
xpath methods
----------------
1.text()
------------
Syntax:
-------------
//tagname[text()='visible text']

2.normalizespace(): like trim() from String class
-------------------
syntax:
----------
//tagname[normalize-space()='visibletext']

3.contains()
-----------------
Syntax:
-----------
//tagname[contains(@attributename,'partial value')]

OR

//tagname[contains(text(),'partial text')]


4.startsWith():prefix value
-----------------
Syntax:
-----------
//tagname[starts-with(@attributename,'prefix value')]

OR

//tagname[starts-with(text(),'prefix text')]

Xpath Axies
===================
following
------------
Syntax:
---------
//tagname[@attribute1='value']//following::tagname

preceding
-------------
Syntax:
---------
//tagname[@attribute1='value']//preceding::tagname
//td[text()='John']//preceding::tr



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

test("Test for indexing and position() from xpath",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //fname with xpath indexing
    await page.locator("(//input[@class='form-control'])[1]").fill("Sarang");

    //lname with xpath indexing
    await page.locator("(//input[@class='form-control'])[2]").fill("Wakodikar");

    //email with xpath position()
    await page.locator("(//input[@class='form-control'])[position()=3]").fill("sarangWakodikar2026@gmail.com");

    //telephone
    await page.locator("(//input[@class='form-control'])[4]").fill("76897870");

    //password
    await page.locator("(//input[@class='form-control'])[5]").fill("test123");

    //confirm password
    await page.locator("(//input[@class='form-control'])[6]").fill("test123");


    //yes radio button
    await page.locator("(//input[@name='newsletter'])[1]").click();

    //checkbox
    await page.locator("//input[@name='agree']").check();

    //continue
    await page.locator("//input[@value='Continue']").click();

    //assertion on url
    await expect(page).toHaveURL(/success/);
    console.log("User registration is completed!");
    

    //success message
     await expect(page.locator("(//h1)[2]")).toHaveText("Your Account Has Been Created!");
     let text1=await page.locator("(//h1)[2]").innerText();
    console.log("Success message is: "+text1);

await page.waitForTimeout(3000);



})


test("Test for Xpath Methods",async({page})=>{

//open application
await page.goto("https://www.amazon.in/");

//Mobiles link:text()
await page.locator("//a[text()='Mobiles']").click();

//assertion on url
await expect(page).toHaveURL(/mobile/);
console.log("User navigated to mobile page");

//click on Cart: normalize-space()
await page.locator("(//span[normalize-space()='Cart'])[2]").click();

let text1=await page.locator("//h3[normalize-space()='Your Amazon Cart is empty']").innerText();
console.log("Cart Text is: "+text1);

//search: contains()
let searchBox1=page.locator("//input[contains(@id,'searchtext')]");
await searchBox1.fill("watch");
//keywboard action:press Enter key
await searchBox1.press('Enter');
await page.waitForTimeout(1500);

//search:starts-with()
let serachBox2=page.locator("//input[starts-with(@id,'two')]");
await serachBox2.clear();
await serachBox2.fill("Bags");
await serachBox2.press("Enter");




await page.waitForTimeout(3000);







})


test.only("Test for xpath axies",async({page})=>{

await page.goto("https://automationplayground.com/crm/login.html");

await page.locator("//input[@id='email-id']").fill("test@gmail.com");

await page.locator("//input[@id='password']").fill("test123");

await page.locator("//button[@id='submit-id']").click();


//preceding:Before John element number of rows
let totalBeforeRows=await page.locator("//td[text()='John']//preceding::tr").count();
console.log("Preceding result: "+totalBeforeRows);


//following : After John element numbe of rows
let totalAfterRows=await page.locator("//td[text()='John']//following::tr").count();
console.log("Following result: "+totalAfterRows);

await page.waitForTimeout(3000);

})