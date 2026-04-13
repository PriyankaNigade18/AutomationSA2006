/*
Variable:
----------------
Variable is name of storage where we can store the data

Keywords to declare variable
-----------------------------
1.var(older Js)
-------------
1. Scope: Global + functional
2.Redeclaration is allowed
3.Reassignment is allowed

2.let(Mutable)
--------------
1. Scope: Global+ Block
2. let used for mutable data
3. Redeclaration not allowed
4. Reassignment is allowed

3.const(Immutable): act like final keyword in Java
----------------------
1. Scope: Global+ Block
2. const used for immutable data
3. Redeclaration/reassignment not allowed


In Js (Modern Js ) we use 2 keywords to declare variable(let or const)

syntaX:
--------
let vraiableName=value;

Scopes In Js
--------------------
1.Global scope:
any variable declare in file outside any function or any block is called global

2.Functional scope: (local data)
It is applicable for var type
Any data declared within function that you can access only through that function

3.Block scope:{}
Any data you declared in block(if block,for block,function in js)which you can access
within a block is called block scope variable






*/

console.log("-----Global scope----");

var fname="Himanshi";
let location="US";
const emailId="himanshi@gmail.com";


console.log("First name is: "+fname);
console.log("Location is: "+location);
console.log("Email id is: "+emailId);

console.log("----Within function Calling global data----");

function show()
{
    console.log("Calling global data from function");
    console.log("First name is: "+fname);
    console.log("Location is: "+location);
    console.log("Email id is: "+emailId);
}

//call
show();

console.log("-----Functional scope-----");
//var type

function add()
{
    var a=100,b=200;//local
    const orgname="HSBC";
    let empName="Sarang";
console.log("Value of a is: "+a);
console.log("Value of b is: "+b);
console.log("Addition is:"+(a+b));
console.log("Orgname: "+orgname);
console.log(empName);

}

//call
add();

console.log("------Outside of function-----");
//console.log("Value of a is: "+a);//ReferenceError: a is not defined
//console.log("Value of b is: "+b);//ReferenceError: b is not defined
//console.log("Orgname: "+orgname);//ReferenceError: orgname is not defined
console.log("-----Block scope(let/const)-----");

if(true)
{
    const toolName="Selenium";
    let version=148;
    console.log("Tool Name is : "+toolName);
    console.log("Version is: "+version);
    
    
}

console.log("Calling variable outside block");

//  console.log("Tool Name is : "+toolName);//ReferenceError: toolName is not defined
//     console.log("Version is: "+version);//ReferenceError: toolName is not defined

console.log("Redeclaration and Reassignment Rule");
/*
For var redeclaration and reassignment allowed
For let redelcaration not allowed but reassigment allowed
For const redeclaration and reassignment not allowed
*/

//redeclaration
var tool="Selenium";
var tool="Playwright";
var tool="Cypress";

console.log(tool);//cypress

//reassignment for var
tool="Appium";

console.log(tool);//appium

//Cannot redeclare block-scoped variable 'bookName'.
let bookName="Learn Java";
//let bookName="Learn Java";
bookName="Learn Javascript";//reassignment
console.log(bookName);

//Cannot redeclare block-scoped variable 'pi'
const pi=3.14;
//const pi=3.14;

//pi=6.45;//TypeError: Assignment to constant variable.


