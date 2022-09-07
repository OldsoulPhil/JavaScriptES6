// JavaScript Exercise 1 and 2: Spread

// Exercise 1: Write a function called combineArrays that takes in two arrays as arguments, 
// and returns a single array that combines both (using the spread operator).

// const array1 = [1, 2, 3, 4, 5];

// const array2 = ['chicken', 'dog', 'cat', 'cow'];

// combineArrays = (arr) => arr;

// console.log(combineArrays([...array1, ...array2]));

// Exercise 2: Write a function called addEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

function addEveryOther(...combo) {
  return combo.filter((numb, index) => index % 2 === 0)
    .reduce((result, currV) => result + currV)
};

console.log(addEveryOther(6, 9, 78, 354, 89, 678));
console.log(addEveryOther(8, 90, 43, 76, 1, 3));
