// Arrow Functions

//1. makes functions more concise(which means it is clear)
//2. allows us to do implicit returns allows us to write one liners
//3. doesnt rebind the value of this when using arrow functions inside another function

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 5));

// to create a arrow function create a variable and store it in there
// the => is an implicit return and only returning a single value. 
// you can get rid of the return keyword.

/*const sumBodyOnceToldMe = (a, b) => {
  return a + b;
}

// allows not to use function anymore
console.log(sumBodyOnceToldMe(12,8));*/

//const sumBodyOnceToldMe = (a, b) => a + b;

function eatPie(r) {
  const PI = 3.14;
  return PI * r * r;
}

const pieEater = r => Math.PI * r * r;
/*{
  const PI = 3.14;
  return PI * r * r;
}*/

console.log(eatPie(12));

**********************************************************************************

function randomNum() {
  return Math.random();
}

const randomNumber = () => Math.random();

console.log(randomNumber());

// can use these when you are using .map, .filter, and last .reduce.
// can use arrow functions in objects.
