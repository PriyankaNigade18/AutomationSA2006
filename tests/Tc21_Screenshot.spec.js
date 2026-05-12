
import {test,expect} from "@playwright/test"

test("Test for full page screenshot",async({page})=>{

await page.goto("https://www.freshworks.com/");

await page.screenshot({path:"tests/Screenshots/freshWorkhomepage.png",fullPage:true});



})