const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


r1.question("enter a number:",function(value)
{
    const a=parseInt(value);
    if(a>0)
{
    console.log(a+ " is positive");
}
else if(a===0)
{
    console.log(a+ " is zero");
}
else{
    console.log(`${a} is negative`);
}

r1.close();
})

r1.on("close",function(){
    process.exit();
})
