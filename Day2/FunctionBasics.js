/*
In javascript two types of functions at high level
--------------------------------------------------
1.Function Declaration
2.Function Expression
    2.1. Anonymous function(function without name)
    2.2. Arrow function (short hand function)


*/

console.log("---1.Function delcaration---");

function test1()
{
    console.log("This is function declaration call....");
    
}

//call
test1();

console.log("---2. Anonymous Function---");

let test2=function()
            {
                console.log("This is Anonymous function call....");
                
            }

//call
test2();

console.log("---3. Arrow Function---");

let test3=()=>{console.log("This is Arrow function call");}
    


//call
test3();






