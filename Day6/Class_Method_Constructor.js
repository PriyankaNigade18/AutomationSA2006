/*
Class:
------------
Class is template or blueprint which describe details about object

Object is any real time entity which has certain state and behavior

Constructor:
---------------
To initialize object we use constructor
In Js only one constrcutor allowed

Methods
-----------
Methods belongs to classes and functions can be method but methods can not be function

This keyword refers current class properties
*/

class StudentData{

//global data(public)
 id;
 name;

 //constructor to initialize object
 constructor(id,name)
 {
     this.id=id;
     this.name=name;
 }

//SyntaxError: A class may only have one constructor
//  constructor(id)
//  {
//     this.id=id;
//  }
//Method
show()
{
    console.log("Student id is: "+this.id);
    console.log("Student name is: "+this.name);
    
    
}


}

//Object: to create object for class we use new keyword

const s1=new StudentData(101,"Gunjan");
s1.show();

const s2=new StudentData(201,"Sarang");
s2.show();


const s3=new StudentData(301);
s3.show();





