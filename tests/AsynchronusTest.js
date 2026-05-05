

//Async task required some time to process

//synchronous
/*
console.log("Program started....");

for(let i=1;i<=10;i++)
{
    console.log(i);

}

console.log("Program ends....");
*/

//Asynchronous
/*
console.log("Program started.....");

setTimeout(() => {
    console.log("This is task need 4sec to complete");
    
},4000);

console.log("Program ends......");
*/



// let response=fetch("https://restful-booker.herokuapp.com/booking");
// console.log(response);//Promise { <pending> }

/*
promise we need to handle using async method and awiat keyword
*/

async function apiTest()
{
let response=await fetch("https://restful-booker.herokuapp.com/booking");
console.log(response);
}

apiTest();









