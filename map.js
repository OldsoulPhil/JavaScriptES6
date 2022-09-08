// JavaScript map()
// sets deal with arrays
// maps deal with objects
// map has a key value pair

// same way to create set except you use map keyword

const people = new Map();

// first argument is the key. The second argument is the value
// the values added have to be unique. Each item has to be unique
people.set('Jason', 1):
people.set('Nathan', 1):
people.set('Jared', 1):

// .has method returns a boolean
// .get will get the value that is in the .get()
console.log(people.has('Jason')); // returns a boolean

// console.log(people.get('Jared'));

**********************************************************************
// delete items individually
const people = new Map();  
people.set('Jason', 1):
people.set('Nathan', 1):
people.set('Jared', 1):
  
people.delete('Jared');
// people.clear();
console.log(people);

********************************************************************
// two ways to loop over a map
// first way we can use a for each loop
// 
  
const people = new Map();  
people.set('Jason', 1):
people.set('Nathan', 1):
people.set('Jared', 1):

// console.log(people);
  
// people.forEach((item) => console.log(item));

for(const [key, value] of people) {
  console.log(key, value);
};
  
  
