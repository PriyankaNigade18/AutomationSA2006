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
*/

console.log("----1D Array-----");

let sid=[101,102,103,104];
console.log("Total Length of student id: "+sid.length);//4
console.log(sid);//[ 101, 102, 103, 104 ]
//read single entry from array
console.log(sid[1]);//102
//wrong index number: undefined
console.log(sid[9]);
console.log("----------------");

let empData=["Sarang","Pune",40,'M',798980,78.66,true];
console.log(empData);

console.log("-----2D array------");

let arr=[["Admin","admin123"],["Pooja","test123"],["Amit","amit123"]];
console.log(arr);

//single entry
console.log(arr[2]);//[ 'Amit', 'amit123' ]
console.log(arr[2][0]);//Amit


console.log("---------Methods--------");
//push():Appends new elements to the end of an array, and returns the new length of the array.

let colors=["red","green","blue","yellow"];
console.log(colors);//[ 'red', 'green', 'blue', 'yellow' ]

colors.push("white");

console.log(colors);//[ 'red', 'green', 'blue', 'yellow', 'white' ]

//unshift():Inserts new elements at the start of an array, and returns the new length of the a

colors.unshift("Pink");
console.log(colors);//[ 'Pink', 'red', 'green', 'blue', 'yellow', 'white' ]

//pop():Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
colors.pop();
console.log(colors);//[ 'Pink', 'red', 'green', 'blue', 'yellow' ]


//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

colors.shift();
console.log(colors);//[ 'red', 'green', 'blue', 'yellow' ]

console.log("-------------------------");

/*
splice: it will delete the elements and insert also from anyposition of array
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
Syntax
------------
splice(startindex,deletecount,insertelements)
*/


let fname=["Amit","Kiran","Ganga","Smita","Pooja","Sarang"];
//   index   0       1     2         3     4        5
console.log(fname);//[ 'Amit', 'Kiran', 'Ganga', 'Smita', 'Pooja', 'Sarang' ]
/*
//delete 3rd index entry
let deletedName1=fname.splice(3,1);
console.log(deletedName1);//[ 'Smita' ]

console.log(fname);//[ 'Amit', 'Kiran', 'Ganga', 'Pooja', 'Sarang' ]

/*
//start with index 1 and delete two names
fname.splice(1,2);
console.log(fname);//[ 'Amit', 'Smita', 'Pooja', 'Sarang' ]

*/

//from array delete 2nd entry and add "Anuj","Abhi"
fname.splice(2,1,"Anuj","Abhi");
console.log(fname);

console.log("----------------");


//map():Transform the array element

let links=["home","register","login","aboutAs","privacyPolicy"];
console.log(links);

//tranform these link : add prefix before every link as "amazon"

let footerLink=links.map((linkele)=>{
return "Amazon"+linkele;
})


console.log(footerLink);









 












