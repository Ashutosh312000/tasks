console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		resolve('popcorn');
  });
  
  const addbutter =  new Promise((resolve, reject) => {
		resolve('butter');
  });

  const getcolddrink =  new Promise((resolve, reject) =>  resolve('colddrink'));

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  
  
  let [popcorn,butter,colddrink] = await Promise.all([getPopcorn,addbutter,getcolddrink]);
 
  console.log(`${popcorn}, ${butter}, ${colddrink}`)
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');