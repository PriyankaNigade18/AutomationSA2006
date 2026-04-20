/*
Js object----->JSON(String) Object
JSON----->Js
*/

//js Object
let user={
    id:101,
    name:"Jay"
}

console.log(user);
console.log(typeof user);//object
//js object to JSON string
//stringify():Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let jsTojson=JSON.stringify(user);
console.log(jsTojson);
console.log(typeof jsTojson);






let requestPayload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`;

console.log(typeof requestPayload);//string

//Json --->Js object
let jsonToJs=JSON.parse(requestPayload);
console.log(jsonToJs);
console.log(typeof jsonToJs);//Object

