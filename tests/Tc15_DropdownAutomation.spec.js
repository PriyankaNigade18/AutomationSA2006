
import {test,expect} from "@playwright/test"

test("Test for <Select> based dropdown",async({page})=>{

    //open application
    await page.goto("https://www.amazon.in/");

    //visible text
    await page.getByTitle("Search in").selectOption("Apps & Games");
     await page.waitForTimeout(1500);

    //select by label:visible text
    await page.getByTitle("Search in").selectOption({label:"Kindle Store"});
    await page.waitForTimeout(1500);

    //select by index
     await page.getByTitle("Search in").selectOption({index:3});
await page.waitForTimeout(1500);
     //selectby value
     await page.getByTitle("Search in").selectOption({value:"search-alias=videogames"});

    await page.waitForTimeout(3000);

})



test.only("Test for Bootstrap Dropdown",async({page})=>{

    //open application
    await page.goto("https://www.redbus.in/");

    await page.screenshot({path:"tests/Screenshots/redbus.png"});
    //from ele
    await page.locator("#srcinput").fill("Pune");

    //static wait
    await page.waitForTimeout(1000);
       //list
       let allOptions=await page.locator("div[class*='searchCategory'] div[class*='listHeader']").all(); 
        console.log("Total options are: "+allOptions.length);

        for(let option of allOptions)
        {
            console.log(await option.innerText());
            if((await option.innerText()).includes("Swargate"))
            {
                //click
                await option.click();
                break;
            }
            
        }
        




    await page.waitForTimeout(2000);







})