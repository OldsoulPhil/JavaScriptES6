// How to create Classes in ES6

// 1. we can create class declaration
// 2. class expression

// Class declaration
// takes number of methods but use constructor() method for every class
// Every Class must have a constructor, this is how you build the object properties
// the constructor every property that is going to be on an object you need to drop a pramater for it
// to create a method use the shorthand 
class Person {
  constructor(name, hobby) {
    this.name = name;
    this.hobby = hobby;
  }
  greeting() {
    console.log(`Hello my name is ${this.name}`);
  }
  myHobby() {
    console.log(`My fav hobby is ${this.hobby}`);
  }
  
  // static method and lives on actual person object itself
  // Person.saySomething() makes this work
  static saySomething() {
    console.log('Coding is so cool!');
  }
};

// Class Expression
// const Person = class {

// }

const person1 = new Person('Jack', 'Coding');
const person2 = new Person('Jill', 'Skydiving');
