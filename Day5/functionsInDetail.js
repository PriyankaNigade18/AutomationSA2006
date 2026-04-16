/*
In javascript two types of functions at high level
--------------------------------------------------
1.Function Declaration
2.Function Expression
    2.1. Anonymous function(function without name)
    2.2. Arrow function (short hand function)


*/

console.log("----function Declaration without parameter-----");
function test1()
{
    console.log("Function declaration is calling....");
    
}


//call
test1();

console.log("----function Declaration with parameter-----");

function add(a,b)
{
console.log("Addition is: "+(a+b));

}

//call
add(100,200);

console.log("----function Declaration with parameter & return keyword-----");
/*
return 
------------
whenver we wanted to return any result/output from function then 
we use retun keyword
- return statment is always last line of that function
-return statment return the result to calling function
either you can use extra variable to store it or print the result
*/

function test2(fname)
{
    return "Hello "+fname;
}

//call
let result=test2("Kiran");
console.log(result);

console.log(test2("Neha"));

console.log("----Anonymous function without parameter-----");

let test3=function()
    {
    console.log("Anonymous function is calling...");
    
    }

    //call
    test3();


console.log("----Anonymous function with parameter-----");


let sub=function(a,b)
    {
    console.log("Subtraction is: "+(a-b));
    
    }

    //call
    sub(100,56);

console.log("----Anonymous function with parameter & return ----");

    let test4=function()
        {
        return "Hello Everyone";
        }

        //call
       console.log( test4());


console.log("----Arrow function without parameter----");

let test5=()=>{console.log("Arrow function is calling....");}


//call
test5();

console.log("----Arrow function with parameter----");

//single parameter
        let test6=(msg)=>{console.log(msg);}

        //call
        test6("Cypress is webapplication testing tool");

        let test7=msg=>{console.log(msg);}

        //call
        test6("Playwright is webapplication testing tool");

//multiple parameter
let test8=(a,b)=>{console.log("Multiplication is: "+(a*b));}

//call
test8(10,5);

console.log("----Arrow function with parameter & return----");

let test9=(fname)=>{

    return "Hi "+fname;
    }

    //call

    console.log(test9("Sarang"));
    