// Javascript classes ES6

// first way is a class declaration 
// Use this one more commonly
// Every Class must have a constructor
// class Person {
  
// }
class Person {
 constructor(name, hobby) {
  this.name = name;
  this.hobby = hobby;
 }
// this is a prototype (method)
 greeting() {
  console.log(`Hello my name is ${this.name}`);
 }
// this is a prototype (method)
 myHobby() {
  console.log(`My fav hobby is ${this.hobby}`);
 }
// static method and this live on the class Person so you have to use Person.saySomething()
// instead of using the prototypes
 static saySomething() {
   console.log('Coding is so cool!');
 }
};

const person1 = new Person('Jack', 'Coding');
const person2 = new Person('Jill', 'Skydiiving');



// second way is a class expression

// const Person = class {
  
// }
