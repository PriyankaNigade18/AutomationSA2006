
/*
Creating suite of test cases with describe()


*/

import {test,expect} from "@playwright/test"

test.describe.serial("This is suite1",()=>{


test("Test Case1",async({page})=>{
console.log("This is test case1...");
await page.goto("https://www.google.com");

})

test("Test Case2",async({page})=>{
console.log("This is test case2...");
await page.goto("https://www.facebook.com");
})

test("Test Case3",async({page})=>{
console.log("This is test case3...");
await page.goto("https://www.freshworks.com");
})





})