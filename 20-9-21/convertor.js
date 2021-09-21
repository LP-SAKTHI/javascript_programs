// let kilometer=3;
// let conValue=0.621371;

// let miles=kilometer * conValue;
// console.log(miles);

const readline=require('readline')

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


r1.question("enter a value:",function(value,value1)
{
    const km=parseInt(value);
    const mul=0.621371;
    const mile=km * mul;
    console.log(mile);

    r1.close();
})

r1.on("close",function()
{
    process.exit()
})