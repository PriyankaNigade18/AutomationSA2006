
//inbuilt test runner

import {test,expect} from "@playwright/test"

test("Test for Navigation",async({page})=>{

//open application
await page.goto("https://www.google.com");

await page.waitForTimeout(1000);

//switch to facebook
await page.goto("https://www.facebook.com");

await page.waitForTimeout(1000);
//back()
await page.goBack();

await page.waitForTimeout(1000);

//forward()
await page.goForward();

await page.waitForTimeout(1000);

//refresh 
await page.reload();

await page.waitForTimeout(1000);

await page.close();
})