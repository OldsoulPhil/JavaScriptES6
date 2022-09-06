// Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable

// const names = ['John', 'Jacob', 'Jingleheimer'];

// const [name1, name2, name3] = names;

// console.log(name1 + ' ' + name2);

// Exercise 2: Destructure the first two items returned from the function and store them in a variable

// const foo = () => [1, 2, 3];

// const [num1, num2, num3] = foo();

// console.log(num1 + ' ' + num2)

// Exercise 3: Without creating a temporary variable, use destructuring to swap the value of the following variables

let a = 'Jack';
let b = 'Jill';
// your code
console.log('a:', a, 'b:', b);

[a, b] = [b, a];

console.log('--switch--');

console.log('a:', a, 'b:', b);
