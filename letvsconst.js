// JavaScript let keyword vs const keyword
// let keyword lets us create or declair and reassign a value later
// let provides block level scoping
// ability to reassign a value


const id = 'xyz123';
let highFives = 23;
let isCool = false;

// the let lives on different block scope

if (highFives > 5) {
  let isCool = true;
  console.log('Inside of the IF', isCool);
}

console.log(isCool);

// reassigned a new value to highFives
// block scoping
/*highFives= 25;

console.log(highFives);*/

// cant do this because the highFives have been declared at the same block level.
/*let highFives = 25;

console.log(highFives);*/

******************************************************************************************
// const can not be reassigned a new value

/*id = 'abc123';
console.log(id);*/
  
  
// while working with objects, we want to update object properties
// you cannot update person object but you can update the properties of the object
// the const variable can never be updated
  
const person = {
  name: 'Jason';
  age: 25;
}

person.age = 26;


  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
