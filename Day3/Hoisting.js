/*

Hoisting is the behavior where you can able to access variable/function before even declaring it.
Hoisting is applicable for var and function declaration

For Modern Js ifyou try to access/call variable/function before declaration you will error
let/const/anonymous function/arrow function


*/

test3();//ReferenceError: Cannot access 'test3' before initialization
test1();
//test2();//ReferenceError: Cannot access 'test2' before initialization
console.log(toolName);//undefined

var toolName="Selenium";
console.log(toolName);//Selenium


//console.log(testApi);//ReferenceError: Cannot access 'testApi' before initialization
let testApi="https://www.google.com";
console.log(testApi);

//console.log(orgName);//ReferenceError: Cannot access 'orgName' before initialization
const orgName="HSBC";
console.log(orgName);

console.log("----function Hoisting------");

//function declaration
function test1()
{
    console.log("Function declaration call....");
    
}

//anonymous function
let test2=function()
        {
            console.log("Anonymous function call.....");
            
        }

//arrow function

let test3=()=>{
    console.log("This is arrow function");
    
}