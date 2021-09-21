function greatest(v1,v2,v3)
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
    
}

greatest(60,60,80);


// let v1,v2,v3;
// const readline=require('readline');

// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const r2=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const r3=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// r1.question("enter 1st value:",function(value1){ v1=parseInt(value1);})
//     r2.question("enter 2nd value:",function(value2){ v2=parseInt(value2); })
//         r3.question("enter 3rd value:",function(value3){
            
            
//                 v3=parseInt(value3);
//             const result=v1+v2+v3;
//             console.log(result);

//             r1.close();
//             r2.close();
//             r3.close();


//         })
    


// r1.on("close",function(){
//     process.exit();
// })

// r2.on("close",function(){
//     process.exit();
// })

// r3.on("close",function(){
//     process.exit();
// })