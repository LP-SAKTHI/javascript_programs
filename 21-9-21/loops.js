//for
//while
//do while

//while

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

    // for(let k=1;k<=10;k++){
    //     s=k*5;
    //     console.log(s);
    // }

    
    // let z=1;
    // let w;
    // do{
    //     console.log(w);
    //     w=z*4;
    //     z++;
    // }
    // while(z<10);


    const { stdin } = require("process");
const readline=require("readline");
    const r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    r1.question("enter a day:",function(value){
        const days=value;
        switch(days.toLowerCase()){
            case "sunday":
            console.log("happy day");
            break;
            case "monday":
            console.log("busiest monday");
            break;
            case "tuesday":
            console.log("boring tuesday");
            break;
            case "wednesday":
                console.log("waste wednesday");
                break;
            case "thrusday":
                console.log("thirsty thursday");
                break;
            case "friday":
                console.log("frying friday");
                break;
            case "saturday":
                console.log("sad saturday");
                break;
            default:
                console.log("not valid");
                break;
        }
        r1.close();
    })

    r1.on("close",function(){
        process.exit();
    })