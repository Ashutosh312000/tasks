"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = []; // 1) :numer[] yeh ek shortcut tha actuall m  Array ek generic type hai
//mtlb wo khud ek type hai LIST and uske ander aur types hai hence iska asli treeke yeh hai 
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
//2) promise is es6 so go to tscconfig and change it to  tagret="es6" 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
//3)if we make any class , we can use that class as a type
//smj jao yr class bhi ek trah ka data type he hota hai jo hm bnate hai
//to hm us type     temestamp :classname khud ka define kia hua classname use kr skte hai 
