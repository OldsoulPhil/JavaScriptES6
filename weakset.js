// JavaScript Weakset()

// const person1 = {id: 1, name: 'Jacob'};
// const person2 = {id: 2, name: 'Jason'};

// just like sets
// main difference a weakset can only ever contain objects
// you cannot loop
// does not have a clear method
// garbage collected
// const weakSauce = new WeakSet([person1, person2]);

// console.log(weakSauce):

********************************************************
// const cannot be reassigned  
let person1 = {id: 1, name: 'Jacob'};
let person2 = {id: 2, name: 'Jason'};

const weakSauce = new WeakSet([person1, person2]);

console.log(weakSauce);
person1 = null;
setTimeout(() => {
  person1 = null;
}, 2000);
console.log(weakSauce):
