import {test,expect, chromium} from "@playwright/test"

test.describe.serial("Test for Hooks",()=>{
    
   
    let page;

    
    test.beforeEach(async()=>{
        console.log("Before Each executes before every test cases");
        let browser=await chromium.launch({channel:"chrome"});
        //browser-->new page
        page=await browser.newPage();
        await page.goto("https://www.google.com");
        
    })

    

test("Test Google title",async({})=>{
console.log("This is test case1...");
console.log("Title is: "+await page.title());



})

test("Test for Google Search",async({})=>{
console.log("This is test case2...");

await page.locator("#APjFqb").fill("Jenkins");
await page.waitForTimeout(2000);
})


})