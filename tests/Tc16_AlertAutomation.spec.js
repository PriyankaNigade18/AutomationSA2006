

/*
For Alert in Playwright 4 methods supported
1.To get the type of alert: type()
2.To get the text of alert: message()
3.To simulate Ok button: accept()
4.To simulate cancel button: dismiss()
5.To automate Prompt alert: accept("prompt")

Any simple alert and confirmation alert will autodismissed by playwright

*/
import {test,expect} from "@playwright/test"


test("Test for Simple Alert",async({page})=>{

    //call event before alert appear
    page.on("dialog",async(alert)=>{

        console.log("Type of alert is: "+alert.type());
        console.log("Alert message is: "+alert.message());

        //click on Ok
        await alert.accept();
        
        
    })
    //open application
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.locator("//button").first().click();
//alert appear and handled by playwright

//assert
await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

await page.waitForTimeout(2000);


})

test("Test for Confirmation alert",async({page})=>{


//call page.on event to handle alert manually
page.on("dialog",async(alert)=>{

    console.log("Type of Alert is: "+alert.type());
    console.log("Alert text is: "+alert.message());

    //cancel
    await alert.dismiss();
    
    
})


 //open application
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.locator("//button").nth(1).click();
    //alert will appear and handled by playwright here PW click on Cancel button

    //assert
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");

    
    


    await page.waitForTimeout(2000);


})

test.only("Test for Prompt alert",async({page})=>{


    //call event to handle prompt alert
    page.on("dialog",async(prompt)=>{

        console.log("Type of alert is: "+prompt.type());
        console.log("Alert text is: "+prompt.message());

        //prompt
        await prompt.accept("Hello");
        
    })


     //open application
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.locator("//button").last().click();

    //assert
    await expect(page.locator("#result")).toHaveText("You entered: Hello");

    

})