console. log('person1: shows ticket');
console. log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn=promiseWifeBringingTicks.then((t) => {
    console. log(`wife: i have the tickets`);
    console. log(`Husband: we should go in`);
    console. log(`wife: no i am hungry`);
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
});

const getbutter=getPopcorn.then((t)=>{
    console. log(`Husband: i got some popcorn`);
    console. log(`Husband: we should go in`);
    console. log(`wife: i need butter on my popcorn`);
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
});

const getcolddrinks=getbutter.then((t)=>{
    console.log(`Husband: i got some buter on your popcorn`);
    console.log(`wife: i also need cold drink`);
    return new Promise((resolve,reject)=>resolve(`${t} colddrink`))
});
getcolddrinks.then((t)=>console.log(t));
console. log('person4: shows ticket');
