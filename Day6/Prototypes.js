/*
Prototype is an object that is associated with every function and object by default in javascript
Prototype is used to add new properties and methods to every function or object which is shared across all the instances.

*/

function Employee(id,name)
{ 
    this.id=id;
    this.name=name;

}
//common property: prototype
Employee.prototype.language="Javascript";

//Object
let e1=new Employee(101,"Sarang");
//e1.language="Javascript";
console.log("Employee id is: "+e1.id+" Employee name is: "+e1.name+" Language is: "+e1.language);


let e2=new Employee(102,"Poonam");
console.log("Employee id is: "+e2.id+" Employee name is: "+e2.name+" Language is: "+e2.language);



let e3=new Employee(103,"Kiran");
console.log("Employee id is: "+e3.id+" Employee name is: "+e3.name+" Language is: "+e3.language);


console.log("------------------");


let fname="     Amit    ";
console.log(fname.trim().length);

String.prototype.trueLength=function ()
                    {
                        return this.trim().length;
                    }

console.log("TrueLength: "+fname.trueLength());

let toolName=" Playwright EndToEnd Framework ";

console.log(toolName.trueLength());









