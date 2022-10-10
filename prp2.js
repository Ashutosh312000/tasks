//Currying using bind
let multiply=function(x,y){
    console.log(x*y); 
}
let multiplybytwo=multiply.bind(this,2);
multiplybytwo(3); //output is 6

let multiplybythree=multiply.bind(this,2,3);
multiplybythree(); //output is 6

//Currying using closures
let multiply2=function(x){
    return function(y){
        console.log(x*y);
    }
}
var multiplybyfour=multiply2(4);
multiplybyfour(3); //output  is 12
