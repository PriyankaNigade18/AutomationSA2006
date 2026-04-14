
console.log("-----Arithmetic operator-----");
let a=10,b=5;
console.log(a+b);
//console.log("Addition is: "+a+b);//Addition is: 105
console.log("Addition is: "+(a+b));
console.log("Subtraction is: "+(a-b));
console.log("Division is: "+(a/b));
console.log("Multiplication is : "+(a*b));
console.log("Modulus is : "+(a%b));

//Interview Questions
console.log(90/0);//Infinity
console.log(-90/0);//-Infinity
console.log("Hello"/5);//NaN (Not a number)
console.log(undefined/0);//NaN
console.log(0/0);//NaN


console.log("----Unary Operators--------");
/*
1.Increment   (++)
----------------------
1.1 post Increment
a++
a++ a=a+1

1.2 pre Increment
++a a=a+1

2.Decrement (--)
----------------------
2.1 post Decrement
a--
a=a-1

2.2 Pre Decrement
--a
a=a-1

*/

console.log("---Increment-----");

//post operator: operation will not perform immediate and next iteration it will update value

let c=90;
console.log(c);//90
console.log(c++);//90
console.log(c);//91


//pre increment
let d=78;
console.log(d);//78
console.log(++d);//79


let r=167;
let s=r++;//here value will assign first & then increment
console.log(r);//168
console.log(s);//167

let p=56;
let q=p++;
console.log(p);//57
console.log(q);//56


let i=100;
let j=++i;//here value will increment first and then assigned
console.log(i);//101
console.log(j);//101

let u=89;
let v=++u;
console.log(u);//90
console.log(v);//90


console.log("----Decrement----");

let y=35;
console.log(y);//35
console.log(y--);//35
console.log(y);//34

let e=90;
console.log(e);//90
console.log(--e);//89

let l=690;
let n=l--;
console.log(l);//689
console.log(n);//690

let f=90;
let g=--f;
console.log(f);//89
console.log(g);//89

console.log("----Relational Operators----");
/*
<,<=,>,>=,!=

equality
--------------
1. loose equality ==
--------------------------
In loose equality value will coerced first and then compare
Type Coercion is Implicit type casting

2. Strict Equality (===)
-------------------------------
-In Strict equality values as it compared without coercion.

Test Data:
============
p=57 q=56 f=g=89 u=v=90 i=j=101
*/
console.log("Less than < : "+(p<i));//true
console.log("less than qual to <=: "+(f<=g));//true
console.log(j<u);//false
console.log("greater than >: "+(i>v));//true
console.log("greater than equal to>=: "+(i>=j));//true
console.log(q>u);//false
console.log("Not equal to !="+(i!=p));true
console.log(i!=j);//false
console.log("---equality---");


/*
1. loose equality ==
--------------------------
In loose equality value will coerced first and then compare
Type Coercion is Implicit type casting

*/

console.log("10"==10);//true
console.log(null==undefined);//true

/*
2. Strict Equality (===)
-------------------------------
-In Strict equality values as it compared without coercion.

*/

console.log("10"===10);//false
console.log(null===undefined);//flase

console.log("----Logical Operators-----");

/*
a       b       a&&b(AND)       a||b(OR)        !a(NOT)
true    true    true            true            false
true    false   false           true            false
false   true    false           true            true
false   false   false           false           true

Test Data
============
p=57 q=56 f=g=89 u=v=90 i=j=101
*/

console.log("----&&----");
console.log(p<f && i===j);//true
console.log(i===j && i<v);//false
console.log(p>u && f===g);//false
console.log(i<v && p>u);//false

console.log("----||----");
console.log(p<f || i===j);//true
console.log(i===j || i<v);//true
console.log(p>u || f===g);//true
console.log(i<v || p>u);//false

console.log("---!Not---");

//!Not
console.log(i>p);//true
console.log(!(i>p));//false



















































