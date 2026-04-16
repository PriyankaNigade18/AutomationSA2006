/*
break
-------------
-break is used to exit from switch case and loop body

continue
------------
-continue statement will skip certain part of the code and continue execution for remaining iteration

*/


for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;//exit from loop
    }else
    {
        console.log(i);
        
    }
}

console.log("------------");
for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;//exit from loop
    }else
    {
        console.log(i);
        
    }
}
console.log("------------");
//continue statement will skip certain part of the code and continue execution for remaining iteration


for(let i=1;i<=10;i++)
{
    if(i===5)
    {
        continue;

    }else{
        console.log(i);
        
    }
}