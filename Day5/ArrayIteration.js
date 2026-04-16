/*
Array
==========
In Javascript Array is Dynamic data structure
Array implemented as Object and so it is non primitive data type

collection of homogenious and hetrogenious data/object
Array store values as per index

to get the length of array we use length property(variable)
In Javascript array support multiple methods

In Javascript we use Array literal
Types
=======
1.single Dimentional(1D)
2.Multi Dimentional(2D)

Iteration
-----------------
1.using simple for loop
2.using for...of loop
3.using for...in loop
*/



let id=[10,20,30,40,50];

console.log("----simple for loop-----");

for(let i=0;i<id.length;i++)
{
    console.log(id[i]);
    
}

console.log("----for...of loop-----");
/*
for...of loop is applicable for array and string
It iterates over values

for...in loop is applicable for Object
it iterated over keys or index

*/



for(let i of id)
{
    console.log(i);
    
}

console.log("----for...in loop-----");

for(let i in id)
{
console.log(i);

}
console.log('--------------');

for(let i in id)
{
    console.log("at index: "+i+" value is: "+id[i]);
    
}






