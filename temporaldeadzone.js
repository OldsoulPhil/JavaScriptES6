var name = 'Jason';
console.log(name);
// this works

// lets try to access name before it is declared
console.log(name);
var name = 'Jason';
// here we get undefined

// when javascript runs it has two phases.
// first phase is going to be the creation phase goes through takes the variables and creates them.
// the initializer comes in during the first phase.
// second phase is the execution phase.

// when you have const you get a Reference Error

// in the temporal dead zone variables are there but has not been called yet.
