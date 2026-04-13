/*
Variable:
----------------
Variable is name of storage where we can store the data

Keywords to declare variable
-----------------------------
1.var(older Js)
2.let(Mutable)
3.const(Immutable)

In Js (Modern Js ) we use 2 keywords to declare variable(let or const)

syntaX:
--------
let vraiableName=value;

DataTypes
--------------
Datatype help to decscribe what type of data we stire into variable
1.Primitive Data Types
    1.Number
    2.String
    3.Boolean
    4.undefined
    5.null

    6.BigInt(ES6)NA for Automation
    7.symbol(ES6)NA for Automation

2. Non primitive Data Types
    Object
    Array


    typeof Opertaor
    ------------------
    To identify datatype for any data/variable in Js we use one operator
    typeof opertor

*/

console.log("------Number Type----------------");
/*
Any positive/negative or decimal digit numbers are number type
*/

let num1=90;
console.log(num1);//90
console.log(typeof num1);//number


const pi=3.14;
console.log(pi);//3.14
console.log(typeof pi);//number


let num2=-78;
console.log(num2);//-78
console.log(typeof num2);//number


console.log("-------Boolean Type--------");

let isActive=true;
console.log(isActive);//true
console.log(typeof isActive);//boolean



let isEmployeed=false;
console.log(isEmployeed);//false
console.log(typeof isEmployeed);//boolean
console.log("Value is: "+isEmployeed+" & Type is:  "+typeof isEmployeed);

console.log("-------String Type--------");
/*
Collection of characters is string
In Js string is innutable object
It is primitive data type

Ways to declare string data
----------------------------
1.using single quoatation 'Hello'
2.using double quoatation "Hello"
3. template string (Back tick) `Hello`
*/

let sname="Madhavi";
console.log("Student name is: "+sname);
console.log("Type is: "+typeof sname);//string

let gender='F'
console.log("Gender is: "+gender);
console.log("Type is: "+typeof gender);//string

let orgName=`StarAgile`;
console.log("Organization name: "+orgName);
console.log("Type is: "+typeof orgName);//string


let profile=`My name is Priyanka,I have completed Masters in Computers,
                total work experience is over 15 years 
                        and completed ISTQB certification as well`;

                        console.log(profile);
                        console.log(typeof profile);
                        
                        

 let fname="Priyanka"

let requestPayload=`{
    "firstname" : ${fname},
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}`;

console.log(requestPayload);
console.log(typeof requestPayload);

console.log("-------Undefined Type--------");

/*
When variable is declared without any assignment then 
value of variable will be undefined and type of variable
will be undefined
*/
let studentid;
console.log("Student id is: "+studentid);//undefined
console.log("Type is: "+typeof studentid);//undefined

console.log("-------null Type--------");
/*
Any unknown data is null type
In javscript null values we can assign but type of those 
values will be Object type

This is official bug in Js
that null variable type is object
*/

let age=null;
console.log("Student age is: "+age);//null
console.log(typeof age);//Object



console.log("----Non primitive Data type----");
/*
Anything in Js which is Object 
And every object is nonprimitive data type
*/

//Object Literal

let person={};
console.log(person);
console.log(typeof person);

//In js Object holds key and value pair information


let user={
    id:101,
    name:"Jay",
    isActive:true
}

console.log(user);
console.log(typeof user);

//How to read value from User object
console.log("Name is: "+user.name);








//array
let arr=[10,20,30];
console.log(arr);
console.log(typeof arr);

















