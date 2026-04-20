/*
Inheritance
================
When one class wanted to reuse properties of any other class then 
it is called Inheritance

Purpose
=============
- To avoid duplication
- For reusability of method 
- Run time polymorphism

Reat time example
======================
Parent and child relation

Types:
================
1.Single level
2.Multi levele
3.Heirarchical 

//Js will not implement Hybrid and Multiple inheritance
4.Multiple
5.Hybrid

How to achieve?
-----------------
we use extends keyword


*/


class Vehical
{
    breakFeature()
    {
        console.log("Vehical.....break()");
        
    }
}


class Car extends Vehical
{
    price()
    {
        console.log("Car....1L");
        
    }
    start()
    {
    console.log("Car....start()");
    
    }

    refule()
    {
    console.log("Car....refule()");
    
    }


    stop()
    {
    console.log("Car....stop()");
    
    }

}

class BMW extends Car //Single level
{
    price()
    {
        console.log("BMW....50L");
        
    }
    auEngine()
    {
        console.log("BMW....autoEngine()");
        
    }
}

class Audi extends Car //Heirarchical
{
    autoGear()
    {
        console.log("Audi....autoGear()");
        
    }
    price()
    {
        console.log("Audi....60L");
        
    }
}

//objects
//Parent class Object
let c1=new Car();
c1.start();//individual
c1.refule();////individual
c1.stop();//individual
c1.breakFeature();
c1.price();

console.log("-----------------");
console.log("-----child is BMW----");

//Child class Object
let b1=new BMW();
b1.start();//inherited 
b1.refule();//inherited 
b1.stop();//inherited 
b1.auEngine();////individual
b1.breakFeature();
b1.price();


console.log("-----------------");
console.log("-----child is Audi---");
let a1=new Audi();
a1.start();//inherited 
a1.refule();//inherited 
a1.stop();//inherited 
a1.autoGear();//individual
a1.breakFeature();
a1.price();





