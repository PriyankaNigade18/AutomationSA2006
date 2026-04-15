/*
Type Casting
---------------
converting one type of data into other type
-type should be compatible

In Js two types of casting is avialable
------------------------------------
1.Type Coercion(Implicit casting)
-------------------------------
Data type will convert automatically and conversion is taken care by Js itself

2.Explicit Casting
---------------------------
It is manual conversion
-It is forefull conversion
    String()
    Number()
    Boolean()


    Boolean Conversion
    ====================
    Truthy vs falsy values

    Truthy
    -------------
    any true value in boolean context refer as truthy value
    Eg: any non zero number and not empty string

    Falsy
    ---------------
    Any false value in boolean context refer as falsy value
    5 falsy values are there in Js

    Eg:0,"",NaN,undefined,null 

Rule: It is applicable for
==========================
String
Number
Boolean


*/
console.log("------Type Coercion (Implicit)------");


console.log("-----String conversion-----");
/*
Number type/Boolean type convert into String
------------------------------------------
whenever we use number type or boolean type data with string and if + 
operator used then number/boolean will convert into string
*/



let a="100"+200;//here 200 which is number will coerced into String
console.log(a);//100200
console.log(typeof a);//string


let b=90+100+"90";//here 90+100=190 number type then it will coerced into string 
console.log(b);//19090
console.log(typeof b);//string


let c=true+"Hello";
console.log(c);//trueHello
console.log(typeof c);//string

console.log("----Number type----");
/*
String----number
-----------------------
whenever we user any string with arithmetic operators
like -,*,/ then string will coerced into number

*/


//string to number
let i="Hello"*100;
console.log(i);//NaN

let j="10"*10;//"10" will coerced into number 10*10=100
console.log(j);//100
console.log(typeof j);//number

let r="100"-67//here "100" will coerced into number 100-67=33
console.log(r);//33
console.log(typeof r);//number

let p="100"-67+"10"//"100" will coerced into number 100-67=33 then
//33 will coerced into string "3310"
console.log(p);//3310
console.log(typeof p);//string

let q=100-true;//true will coerced into number
console.log(q);//99
console.log(typeof q);//number

console.log(true+90);//91

console.log("-----Explicit casting-----");

let a1="100";
console.log(typeof a);//string
console.log(a1+100);//100100

//string to number
let stringToNum=Number(a1);
console.log(stringToNum);//100
console.log(typeof stringToNum);//number
console.log(stringToNum+100);//200

/*
Scenario: We are testing amount from bill
test amount should be less than 10000
*/

let bill="Your total amount is 5000";

//extract number from string
let data=bill.split(" ")[4];
console.log(typeof data);//string 

//then "5000"===>5000
let amount=Number(data);
console.log(typeof amount);
//check condition

if(amount < 10000)
{
    console.log("Amount match...Test Pass");
    
}else{
    console.log("Amount not matched...Test Fail");
    
}

console.log("-----------------");
//number---->String

let marks=90;
console.log(typeof marks);//number
//number to string: String()
let numTostring=String(marks);
console.log(numTostring);//"90"
console.log(typeof numTostring);//string

/*boolean conversion
====================
    Truthy vs falsy values

    Truthy
    -------------
    any true value in boolean context refer as truthy value
    Eg: any non zero number and not empty string

    Falsy
    ---------------
    Any false value in boolean context refer as falsy value
    5 falsy values are there in Js

    Eg:0,"",NaN,undefined,null 

*/

console.log(Boolean(-190));//true
console.log(Boolean("Poonam"));//true
console.log(Boolean(90));//true
console.log(Boolean(89.67));//true
console.log(Boolean('p'));//true
console.log(Boolean(" "));//true


console.log('----------------');
console.log(Boolean(0));
console.log(Boolean(""));//empty string-false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));














