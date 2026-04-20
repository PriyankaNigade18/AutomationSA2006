/*
Polymorphism
---------------
One thing in many for we can reuse

Purpose
------------
Reusability of methods

Real time example
----------------------
-communication
-Payment gateway
-Ola/uber

Types
=============
1.Compile time poly(Method Overloading)
2.Run time poly(Method Overriding)


Method Overloading
=============
same name method with different syntax/signature
Different signature
--------------------
 - number of parameter
 - different type of parameter
 - change the order

  As js take decisions at runtime and no compilation phase so 
  method overloading is not supported in Js

  Method Overriding
  =======================
  - Two classes must have Is-A relation(Inheritance)
  - When same name method with same syntax declare in parent
  and child class then child override parent class method 
  
  


*/

console.log("--------compile time poly-----------");




class Data
{

    login()
    {
        console.log("Login with based details");
        
    }

    login(un,psw)
    {
        console.log("Login with username and password");
        
    }

    login(un,psw,otp)
    {
        console.log("Login with username and password and otp");
        
    }



}

//Object
let d1=new Data();
d1.login("admin",'admin123');


console.log("--------Run time poly-----------");


class Parent
{
    color()
    {
        console.log("Red");
        
    }
}

class Child extends Parent
{
    color()
    {
        console.log("Yellow");
        
    }
}

//Object
//parent
let p1=new Parent();
p1.color();//red


let c1=new Child();
c1.color();//yellow




