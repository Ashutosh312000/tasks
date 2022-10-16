// FAT ARROW FUNCTIONS

// Ans1-:

'use strict';

var getA=function(a){

    return a;

};



var get=a=>a;

var square=(a)=>{return a*a};

var a=5;

var sqaure2=()=>{return a*a};

console.log(getA(2));//2

console.log(get(3));//3

console.log( square(4));//16

console.log(sqaure2());//25



var outerfunction=()=>{

    this.a=20;

    var innerfunction=()=>{

        console.log(this.a);// you get 20 as output

    }

    innerfunction();

}

outerfunction();



var x=function(){

    console.log(arguments[1]); //you get 2 as output

}

x(1,2,3);

var y=(...n)=>{

    console.log(n[2]);// you get 3 as output

}

y(1,2,3);