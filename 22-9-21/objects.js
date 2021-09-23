    const student={
    fName:"kiruthika",
    lName:"sakthi",
    age:17,
    marks:{
        maths:100,
            english:100,
            social:100
        },
        result:function(){
            console.log(this.fName + this.lName);
    },
    array:[1,2,3,4,5]
    }

// // console.log(student.fName);
// // console.log(student.lName);
// // console.log(student.age);
// // console.log(student.marks);
// // console.log(student.marks.english);
// // console.log(student.result());
// console.log(typeof student);

//========================================================================================================
// constructor

function Person(){
    this.name="keeke";
    this.age=17;
    this.regno=20501693;
}

 //const person1=new Person();
// console.log(person1);

 const person2=new Person();
console.log(person2.name)

// let k=Object.keys(person1);
// let l=Object.values(person1);
// let m=Object.entries(person1)
// console.log(k);
// console.log(l);
// console.log(m);

// let z=Object.keys(student);
// console.log(z);
// /*
// let y=Object.values(student);
// console.log(y);*/
// let x=Object.entries(student.marks)
// console.log(x);

//console.log(student);
console.log(student.array);

for(let i of student.array){
    console.log(i); // to print object's array
}

student.gender="female";
console.log(student); // to add key:value to the object

// for(let in) is used both in array and constructor.. but for(let i of) is not used.. bcz both arent iterable..