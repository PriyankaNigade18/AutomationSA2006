/*
Encapsulation:
-----------------------
Encapsulation is wrapping of data and function together in a single unit


purpose
------------
-data hiding
-data security


real time example
-----------------
--capsule
--password(app/atm)

how to implement in Js
---------------------------
we can declare variables as private and provide access of 
private data using setters() and getters()

getters(): get the data
setters(): set the data


*/






class EMP
{
    //public data
    id;
    name;
    //private # 
    #salary=40000;//private data

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

//Business logic
    display()
    {
        console.log("Employee details");
        console.log("Name  is: "+this.name+" : salary is "+this.#salary );
        
        
    }

    //setter
    setSalary(salary)
    {
        this.#salary=salary;
    }

    //getter
    getSalary()
    {
        return this.#salary;
    }

}

//object

let e1=new EMP(101,"Neha");
e1.display();
//e1.salary=60000;
e1.display();

//using setters and getters
e1.setSalary(60000);
console.log(e1.getSalary());
e1.display();









