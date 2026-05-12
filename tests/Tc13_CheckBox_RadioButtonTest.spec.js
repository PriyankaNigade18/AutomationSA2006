/*
Checkbox/Radio button
------------------------
check()
uncheck()
click()

first()
last()
nth(index)
*/

import {test,expect} from "@playwright/test"


test("Test for Checkbox automation",async({page})=>{

//open application
await page.goto("https://formy-project.herokuapp.com/form");

//first()
await page.locator("//input[@type='checkbox']").first().check();

//last()
await page.locator("//input[@type='checkbox']").last().check();

//middle:nth(index)
await page.locator("//input[@type='checkbox']").nth(1).check();



await page.waitForTimeout(2000);
})

test.only("Test for Radiobutton",async({page})=>{

//open application
await page.goto("https://formy-project.herokuapp.com/form");

//radio button
await page.locator("//input[@type='radio']").first().check();

await page.locator("//input[@type='radio']").last().click();

//nth(index)
await page.locator("//input[@type='radio']").nth(1).click();

await page.waitForTimeout(2000);


})