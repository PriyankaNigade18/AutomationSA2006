/*
String is immutable object and primitive data type
String support methods
*/

//length property
let s1="Hello All";
console.log('Total characters are: '+s1.length);//9

//toLowerCase() toUpperCase()
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

//trim():ignore white space from string

let s2="    Welcome All      ";
console.log(s2);
console.log(s2.trim());

//chatAt(index):return character from that index
let s3="Playwright is WebUi Automation framework";
console.log(s3.charAt(5));//r


//includes(): check for partial string
console.log("Is string contains WebUi?: "+s3.includes("WebUi"));//true
console.log("Is string contains TestNG?: "+s3.includes("TestNG"));//false

//stratswith(prefix)
console.log("Is string started with Playwright?: "+s3.startsWith("Playwright"));//true

//concat()
let s4="Hello All";
let s5=" Welcome to learn Strings";
console.log(s4+s5);
console.log(s4.concat(s5));

//replace()
let data="Automation Testing has huge demang and specially now for Playwright even Selenium for WebApp Testing"
console.log(data);
console.log(data.replace("Testing","*******"));

console.log(data.replaceAll("Testing","#####"));

//split()
let tools="Selenium,Appium,Cypress,PostMan,Playwright,UFT";
// index:   0         1     2        3       4         5
console.log(tools);

let arr=tools.split(",");

for(let i of arr)
{
    console.log(i);
    
}
console.log("-------------");
//playwright
let pw=tools.split(",")[4];
console.log(pw);
