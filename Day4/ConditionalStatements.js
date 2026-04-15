
console.log("----1.Simple If----");
//Simple If : validate single true condition
//+ve scenario
console.log("Program started....");

let cyear=2026;
if(cyear===2026)
{
    console.log("Current year matched.....");
    
}


console.log("Program ends....");
console.log("-------------------");

console.log("Program started....");
//-ve scenario
let year=2027;

if(year===2026)
{
    console.log("2026 year matched...");
    
}
console.log("Program ends....");

console.log("------2.If-else statement-----");
//validate true and false conditions

let age=25;
if(age>=18)
{
console.log("Valid age!");

}
else
{
    console.log("Invalid age");
    
}
console.log("-----------------");

//check number is even or odd
let num=84;

if(num%2===0)
{
    console.log(num+" is even number");
    
}else{
    console.log(num+" is odd number");
    
}
//ladderIf/nestedif and switch case used for multiple conditions testing
console.log("------3.LadderIf------");
/*
Define two numbers and test greater/equal
*/

let num1=1000,num2=1000;

if(num1>num2)
{
    console.log(num1+" is greater than "+num2);
    
}else if(num1===num2)
{
    console.log(num1+" is equal to "+num2);
    
}else
{
    console.log(num2+" is greater than "+num1);
    
}

console.log("----------------");
//Browser validation

let bname="FIREFOX".toLowerCase();

if(bname==="chrome")
{
    console.log("Test case executing on Chrome!");
    
}else if(bname==="msedge")
{
        console.log("Test case executing on MSEdge!");

}else if(bname==="firefox")
{
        console.log("Test case executing on Firefox!");

}else{
    console.log("Wrong Browser!");
    
}

console.log("-----4.Nested If----");
/*
Scenario:
=========
passing criteria for student is 40
40-60---->C
61-80--->B
8-100--->A
other wise student fail

*/

let marks=37;

if(marks>=40)
{
    console.log("Pass!");

    if(marks>=81)
    {
        console.log("Grade A");
        
    }else if(marks>=61 && marks<=80)
    {
        console.log("Grade B");
        
    }else if(marks>=40 && marks<=60)
    {
        console.log("Grade C");

    }
    
}else{
    console.log("Fail!");
    
}

console.log("---5.Switchcase----");

//Key and value
//traffic light
let color="red";

switch (color) {
    case "red":
        console.log("STOP");
                break;
    case "green":
        console.log("GO");
                break;
    case "yellow":
        console.log("READY");
                break;

    default:
        console.log("Wait...");
              
}




























