
import {test,expect} from "@playwright/test"

test.describe.serial("Test for Hooks",()=>{
    
    test.beforeAll(()=>{
        console.log("Before All executes only once before all test cases");
        
    })

    
    test.afterAll(()=>{
        console.log("after All executes only once after all test cases");
        
    })

    
    test.beforeEach(()=>{
        console.log("Before Each executes before every test cases");
        
    })

     test.afterEach(()=>{
        console.log("After Each executes after every test cases");
        
    })

test("Test Case1",async({page})=>{
console.log("This is test case1...");


})

test("Test Case2",async({page})=>{
console.log("This is test case2...");

})

test("Test Case3",async({page})=>{
console.log("This is test case3...");

})




})