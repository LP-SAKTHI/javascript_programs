const array=["meenu",1,12.4,true,null,undefined,{name:"keeeke",age:17},[1,2,3,4,5]];

// const l=array.length;

// for(let i=0;i<l;i++)
// {
//     console.log(array[i]);
// }


for(let j of array){
    console.log(j); // the of in the array gives values
}
//console.log(array[6].name); 
for(let k in array){
    console.log(k); // the-in-in the array gives index
}

