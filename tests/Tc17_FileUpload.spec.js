
import {test,expect} from "@playwright/test"

test("Test for File upload",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload");

await page.locator("#file-upload").setInputFiles("tests/Files/Appiumsetup.txt");

//upload
await page.locator("#file-submit").click();

await page.waitForTimeout(2000);
})