const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("enter v1 value:",function(value1){
    r1.question("enter v2 value:",function(value2){
        r1.question("enter v3 value:",function(value3){
            const v1=parseInt(value1);
            const v2=parseInt(value2);
            const v3=parseInt(value3);
            if((v1>v2)||(v1<v3))
    {
        console.log(`${v1} is greatest`);
    }
    else if((v2>v3)||(v2<v3))
    {
        console.log(`${v2} is greatest`);
    }
    else if((v3>v1)||(v3<v1))
    {
        console.log(`${v3} is greatest`);
    }
    else if((v1==v2)&&(v1==v3))
    {
        console.log(`${v3} is equal to each other`);
    }

    r1.close();
        })
    })
})

r1.on("close",function(){
    process.exit();
})
/*function greatest(v1,v2,v3)
{
    if(v1>v2)
    {
        console.log(`${v1} is greatest`);
    }
    else if(v2>v3)
    {
        console.log(`${v2} is greatest`);
    }
    else if(v3>v1)
    {
        console.log(`${v3} is greatest`);
    }
    else if((v1==v2)&&(v1==v3))
    {
        console.log(`${v3} is equal to each other`);
    }
    
}*/


