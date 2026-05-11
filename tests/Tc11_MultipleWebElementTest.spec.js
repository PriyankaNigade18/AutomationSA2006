
/*
For Multiple Webelements use all():array[Locator]
*/
import {test,expect} from "@playwright/test"

test("Test for Footer List",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //Footer list
    let allFooters=await page.locator("(//div[@class='row'])[4]//div//ul//li//a").all();
    console.log("Total Footer links are: "+allFooters.length);//15

    //get the text of every link and print it
    for(let link of allFooters)
    {
        console.log(await link.innerText());

        //click on Gift Certificates link
        if((await link.innerText()).includes("Gift Certificates"))
        {
            //click
            await link.click();
            break;
        }

        
    }

    
    await page.waitForTimeout(2000);






})


test.only("Test for Google Search",async({page})=>{

//open application
await page.goto("https://www.google.com/");

//search
await page.locator("#APjFqb").fill("Javascript");

await page.waitForTimeout(1500);
//list
let allOptions=await page.locator("(//ul[@role='listbox'])[1]//li").all();
console.log("Total Search Options are: "+allOptions.length);

for(let option of allOptions)
{
    console.log(await option.innerText());
    
}


await page.waitForTimeout(3000);








})