const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("enter a number to check whether it is odd or even:",function(value){
    const values=parseInt(value);


    if(values % 2==0)
{
    console.log(`${values} is even`);
}
else{
    console.log(`${values} is odd`);
}

r1.close();

})

r1.on("close",function()
{
    process.exit();
})


