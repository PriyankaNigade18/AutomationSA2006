
import {test,expect, chromium} from "@playwright/test"


test("Test for browser,context and page fixture",async({})=>{

    //launch microsoft edge browser
    //channel:Returns the browser instance.
    let browser=await chromium.launch({headless:false,channel:"msedge"});

    //browser--->open context 
    //newContext():Creates a new browser context and it is independent
    let context1=await browser.newContext();
    let context2=await browser.newContext();

    //conext --->page
    //newPage():Creates a new page in the browser context.
    let page1=await context1.newPage();

    await page1.goto("https://www.google.com");

    let page2=await context2.newPage();
    await page2.goto("https://www.facebook.com");

    let page3=await context2.newPage();
    page3.goto("https://www.amazon.in");

    await page1.waitForTimeout(4000);


})