// JavaScript ES6 Prototypal Inheritance Review

// object constructor
function Person(name, hobby) {
  this.name = name;
  this.hobby = hobby;
};

Person.prototype.greeting = function() {
  console.log(`Hello my name is ${this.name}`);
};

const person1 = new Person('Jack', 'Coding');
const person2 = new Person('Jill', 'Skydiving');

Person.prototype.myHobby = function() {
  console.log(`My fav hobby is ${this.hobby}`);
};
