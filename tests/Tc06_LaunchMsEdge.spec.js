import {test,expect,chromium} from "@playwright/test"


test("Launch google chrome ",async({})=>{

//open browser
let browser=await chromium.launch({headless:false,channel:"msedge"});


//browser--->newpage
let page=await browser.newPage();

await page.goto("https://playwright.dev/docs/writing-tests");

await page.waitForTimeout(5000);

})