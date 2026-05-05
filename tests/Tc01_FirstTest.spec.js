
//Playwright has inbuilt test runner""@playwright/test"
import {test} from "@playwright/test"

test("Launch google application",async({page})=>{

   await page.goto("https://www.google.com");
    

})

