/*
To open application
--------------------------
goto("url")

To get the title
----------------------
title()

To get the currentUrl
---------------------------
url()

//Playwright inbuilt assertion
----------------------------------
expect()
this is by default hard assertion

*/

import {test,expect} from "@playwright/test"


test("Test for Google title and url",async({page})=>{

//open application:goto()

await page.goto("https://www.google.com/");

//get the title
let appTitle=await page.title();
console.log("Application title is: "+appTitle);

//get the current url
let appUrl=page.url();
console.log("Application url is: "+appUrl);


//validate title and url : playwright support inbuilt assertion at page level

await expect(page).toHaveTitle("Google");//full match
console.log("Title matched!");

await expect(page).toHaveURL("https://www.google.com/");//full match
console.log("Url Matched!");

//partial match for google.com: regular expression for partial  match /partial value/
await expect(page).toHaveURL(/google.com/);
console.log("Url is valid");

//static wait for 2sec
await page.waitForTimeout(2000);





})
