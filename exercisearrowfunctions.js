/*Exercise 1: Write an arrow function that returns the string "Hello Radness".
💡 Tips:
1). Arrow functions may implicitly return values by simply omitting the curly braces that traditionally wrap a function's body if their body only contains a single expression.
const foo = x => x + 1;
foo(1); // -> 2
2). When using implicit returns, object literals must be wrapped in parenthesis so that the curly braces are not mistaken for the opening of the function's body.
const foo = () => { bar: 1 } // foo() returns undefined
const foo = () => ({ bar: 1 }) // foo() returns {bar: 1}*/

const helloText = (a) => a;
console.log(helloText('Hello Radness!'));

**********************************************************************************
  
/*Exercise 2: Write an arrow function that expects an array of integers, and returns the sum of the elements of the array. Use the built-in method reduce() on the array argument.
Given this array: [3, 234, 7, 23, 76] // output -> 343*/

const arraynums = [1, 2, 3, 4];
const sumnumbs = arraynums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumnumbs);

**********************************************************************************
  
/*Exercise 3: Run the following code with Node to see the result. Then refactor any of the capable function(s) with arrow functions. The code should still work 😉
const Animal = function(animal, sound, delay) {
  this.animal = animal;
  this.sound = sound;
  this.delay = delay;
}
Animal.prototype.greet = function() {
  setTimeout(function() {
    console.log(`Hi, I am a ${this.animal}...${this.sound}`);
  }.bind(this), this.delay);
};
const dog = new Animal('Dog', 'Bark', 3000);
const cat = new Animal('Cat', 'Meow', 200);
dog.greet();
cat.greet();*/


                          // Example 1

// class Animal {
//   constructor(animal, sound, delay) {
//     this.animal = animal;
//     this.sound = sound;
//     this.delay = delay;
//   }
//   greet() {
//     setTimeout(function () {
//       console.log(`Hi, I am a ${this.animal}...${this.sound}`);
//     }.bind(this), this.delay);
//   }
// }


// const dog = new Animal('Dog', 'Bark', 3000);
// const cat = new Animal('Cat', 'Meow', 200);
// dog.greet();
// cat.greet();
  
                        //Example 2

const Animal = function (animal, sound, delay) {
  this.animal = animal;
  this.sound = sound;
  this.delay = delay;
}

Animal.prototype.greet = function () {
  setTimeout(() => {
    console.log(`Hi, I am a ${this.animal}...${this.sound}`);
  }, this.delay);
};

const dog = new Animal('Dog', 'Bark', 3000);
const cat = new Animal('Cat', 'Meow', 200);
dog.greet();
cat.greet();
