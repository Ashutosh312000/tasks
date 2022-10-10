//object1
obj1={
   num1:2,
   num2:5,
}
//function addnumbers
function addnumbers(a){
    return this.num1 + this.num2 + a;
}
// using call
console.log(addnumbers.call(obj1,3));//output 10

//function addnumbers2
function addnumbers2(a,b,c,d){
    return this.num1 + this.num2 + a +b +c+d;
}


//creating array for arguments 
var arr=[3,9,2,5];
// using apply
console.log(addnumbers2.apply(obj1,arr));//output 26


//using bind
var bound=addnumbers2.bind(obj1);

console.log(bound(1,2,3,4));//output 17






//student objct
student={
    age:20,
}

//function printage
function printage(){
    console.log(this.age);
}
//using bind
var bound=printage.bind(student);//output 20

bound();