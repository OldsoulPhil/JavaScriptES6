// JavaScript Generators ES6

// normally when you envoke a function it will read from top to bottom and then the function is done
function* listOfHumans() {
  let num = 0;
  yield 'Jason';
  yield 'Nathan';
  yield 'Jared';
//   console.log('Jason');
//   console.log('Nathan');
//   console.log('Jared');
}
const humans = listOfHumans();
console.log(humans);
// you will get a list of names back.

// in a generator function that can be paused anytime you want and any number of times and can pass info to it later at any time.
