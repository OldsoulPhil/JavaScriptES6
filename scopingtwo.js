/*let width = 100;
const height = 150;
var cheese = 'Gouda';
console.log(cheese);

var cheese = 'Chedder';
console.log(cheese);*/

// this can cause problems because the var variable is already declared.
// var keyword has two different scopes
// global and local scopes.

let width = 100;
const height = 150;

function eatCheese() {
  var cheese = 'Gouda';
  console.log(cheese);
}

eatCheese();
console.log(cheese);

// everthing comes out fine.
// the variable is undefined because the cheese variable is in a block of code. It is not global scope.
// var is usually a global window variable. The window can access most gloabl var variables.

var age = 25;

if (age > 5) {
  var newAge = age + 1;
  console.log('Congrats on your BDAY! You are ' + newAge + ' years old!!');
  if (true) {
    console.log('nested block', newAge);
    let newBlock = 'of Cheese';
  }
  console.log('NewBlock', newBlock);
}

// this above will not work because of block scoping





