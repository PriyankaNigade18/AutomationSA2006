/*
1.for loop
=============
If Number of iterations are fixed/known then use for loop
ExampleS:
dates from calendar(30/31/28/29)
dropdown (45)


2.while loop
==============
-entry controlled loop
-If number of iterations are not fixed/not known then we use while loop
examples:
pagination for webtable
pageloadtimeout 




3.do-while loop
======================
-Exit controlled loop
-for one time iteration without matter what condition it is we use do-while loop
*/


console.log("-----for loop-----");
//print hello 5 times

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("----");
//print 1 to 10

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}
console.log("----");
//print 10 to 1

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}
console.log("----");
//find factorial of 5!=5*4*3*2*1=120

let fact=1;
for(let i=5;i>=1;i--)
{
    fact=fact*i;

}

console.log(fact);

console.log("--------------");
//interview question
//by default for loop condition is true
// for(;;)
// {
//     console.log("hi");
    
// }

console.log("------while loop-------");


//print welcome message 5 times

let i=1;

while (i<=5) 
{
    console.log("Welcome");
    i++;
}

console.log("--------");
//sum of 100 natural numbers=5050

let j=1;
let sum=0;
while(j<=100)
{
sum=sum+j;
j++;
}

console.log(sum);

console.log("-----do-while-----");
//one time excution

let k=1;
do{
    
    console.log("Hi");
    k++;
}while(k<=10);

console.log("------------");


let x=1;
do{
    
    console.log("Bye");
    x++;
    
}while(x>=10);




























