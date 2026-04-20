/*
Object is Key:value pair information

1.Object Literals
2.Class level Object
3.Constructor function
4.Object.create(): prototype based object

*/
console.log("-----1.Object literals---- ");
let user={};
console.log(user);
console.log(typeof user);//object

let student={
    id:101,
    name:"Praneet",
    city:"Pune"
}

console.log(student);
//single property
console.log(student.name);

//add 
student.phno=78679879;
console.log(student);


console.log("-----2.Class level object---- ");

class Fruit
{
price;
name;
constructor(name,price)
{
    this.name=name;
    this.price=price;
}

print()
{
    console.log("Fruit name is: "+this.name);
    console.log("Fruit price is: "+this.price);
    
    
}

}
//object
let f1=new Fruit("Apple",350);
f1.print();

console.log("-----3.Constructor function---- ");
/*
Constructor function is used to create and initialize object
*/

function EmployeeData(id,name,city)
{

        //Global data
        this.empId=id;
        this.empName=name;
        this.empCity=city;

//method
        this.show=function()
        {
            console.log("Employee Details are:"+this.empId+" : "+this.empName+" : "+this.empCity);
            
        }
}

//Object
let e1=new EmployeeData(101,"Mukesh","Mumbai");
e1.show();

console.log("-----4.Prototype based Object---- ");

//prototype design
let testing={
    toolName:"Playwright",
    framework:"Mocha"
}

//Object.create()
//Creates an object that has the specified prototype or that has null prototype.
let obj=Object.create(testing);

console.log(obj.toolName);
console.log(obj.framework);
