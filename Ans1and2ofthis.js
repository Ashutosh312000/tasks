// Ans1 and 2

// 1)this inside global scope

'use strict'

this.table='window table';

console.log(this.table);// print window table





// 2)this inside an object in global scope

this.garage={

    table:'garage table'

}

console.log(this.garage.table);// print abc table



// 3)this inside a private object(made using let)

let obj={

    table:'private obj table'

}

console.log(obj.table);// print obj table with object name 



// 4)this inside a method(function inside an object)



let johnroom={

    table:'johns room',

    cleantable(){

        console.log(this.table);// it will print johns room 

    }

}

johnroom.cleantable();





// 5)this inside a global function

this.man='ashu';

const mainfunction=function(){

     console.log(this.man);// it will give ashu because here this will point to window obj when we use bind(as we are using strick iut will give type error without binding)

}

mainfunction.bind(this)();



// 6)this inside inner function

// you need to bind both the inner and outer functions

this.man='ashu';

const outerfunction1=function(){

    const innerfunction=function(){

        console.log(this.man); // this will print ashu

    }

    innerfunction.bind(this)();

}

outerfunction1.bind(this)();



// we can also use arrow function in both inner and outer function, in arrow function it will try to take this.man in parent functuon not in window object

this.man='ashu';

const outerfunction=()=>{

    const innerfunction=()=>{

        console.log(this.man); // this will print ashu

    }

    innerfunction();

}

outerfunction();



// 7)this inside constructor

let createtheroom=function(name){

    this.names=`${name}s table`;

}

const cleanthetable=function(){

    console.log(this.names);// this will print jills table

}

const jillsroom=new createtheroom('jills');

cleanthetable.bind(jillsroom)();



// 8)this inside classes

class createroom2{

    constructor(name){

        this.names2=`${name}s room 2`;

    }

    cleanthetable=function(){

        console.log(this.names2);//this will print jillsroom2

    }

}



const jillsroom2=new createroom2('jills');

jillsroom2.cleanthetable();



// Ans 3,4,5,6
