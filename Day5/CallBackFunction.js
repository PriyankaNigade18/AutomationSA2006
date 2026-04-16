/*

CallBack function/ Higher order function
--------------------------------------------
Whenever we pass function itself as a parameter to other function then
that function called call back function
*/

function intro(sname)
{
console.log("Hello "+sname);

}


//business logic
function greet(username,callbackfun)
{
callbackfun(username);
}


//call
greet("Parag",intro);


console.log("------------------------------");

function add(a,b)
{
    console.log("Addition is: "+(a+b));
    
}



function sub(a,b)
{
    console.log("Subtarction is: "+(a-b));
    
}



function mul(a,b)
{
    console.log("Multiplication is: "+(a*b));
    
}

//buisness logic
function calculator(a,b,callbackfun)
{
callbackfun(a,b);
}


//call

calculator(100,200,add);
calculator(1000,300,sub);
calculator(100,56,mul);

