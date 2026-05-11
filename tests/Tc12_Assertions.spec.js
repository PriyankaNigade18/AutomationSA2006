
/*
Assertion
---------------
To validate current application status we use assertion

Playwright support two types of assertion
---------------------------------------------
1.Hard Assertion
-------------------
When we apply assertion on elemement and if assertion fail playwright will
auto wait for 5sec and after 5sec you will get Error and test will stop execution
on failure line

expect()


2.Soft Assertion
-------------------
When we apply assertion on elemement and if assertion fail playwright will
auto wait for 5sec and after 5sec you will get Error and in soft assertion test will continue execution

expect.soft()

expect()


*/

import {test,expect} from "@playwright/test"
import { emit } from "node:cluster";

test("Test for Hard assertion",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

//title 
await expect(page).toHaveTitle("Account Login");//full match

await expect(page).toHaveTitle(/Login/);//partial match

console.log("Application title is: "+await page.title());

//url 
await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
await expect(page).toHaveURL(/login/);

console.log("Application url: "+page.url());


//webelement
let emailEle=page.locator("#input-email");

await expect(emailEle).toBeEditable();

await expect(emailEle).toBeVisible();

await expect(emailEle).toBeEnabled();

//action
await emailEle.fill("test@gmail.com");

await page.waitForTimeout(2000);

await emailEle.clear();

//or
if(await emailEle.isEnabled() && await emailEle.isEditable() && await emailEle.isVisible())
{
    await emailEle.fill("test2525@gmailc.com");

}


//assert the value entered into email id filed

await expect(emailEle).toHaveValue("test2525@gmailc.com");

//test for text
await expect(page.locator("(//h2)[2]")).toHaveText("Returning Customer");


await page.waitForTimeout(2000);



})

test.only("Test for Soft assertion",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

//title 
await expect.soft(page).toHaveTitle("Account Login");//full match

await expect.soft(page).toHaveTitle(/Loginapp/);//partial match

console.log("Application title is: "+await page.title());

//url 
await expect.soft(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
await expect.soft(page).toHaveURL(/login/);

console.log("Application url: "+page.url());


//webelement
let emailEle=page.locator("#input-email");

await expect.soft(emailEle).toBeEditable();

await expect.soft(emailEle).toBeVisible();

await expect.soft(emailEle).toBeEnabled();

//action
await emailEle.fill("test@gmail.com");

await page.waitForTimeout(2000);

await emailEle.clear();

//or
if(await emailEle.isEnabled() && await emailEle.isEditable() && await emailEle.isVisible())
{
    await emailEle.fill("test2525@gmailc.com");

}


//assert the value entered into email id filed

await expect.soft(emailEle).toHaveValue("test2525@gmailc.com");

//test for text
await expect.soft(page.locator("(//h2)[2]")).toHaveText("Returning Customer");


await page.waitForTimeout(2000);












})








