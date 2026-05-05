
import {test,expect} from "@playwright/test"


test("Test for launch swaglab application",async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    let appTitle=await page.title();
    console.log("Application title is: "+appTitle);

    await page.waitForTimeout(3000);
    
})