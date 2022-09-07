// JavaScript how to use the for of loop with objects


// object with its properties
const skater = {
  name: 'JRAD',
  stance: 'regular',
  fractures: 5,
  bonesBroken: 0,
  ankleInjuries: 57,
};

//we get a type error because skater is not iterable
// for(const prop of skater) {
//   console.log(prop);
// }

//try this
// an object is not an array like and this is not a function
// for(const prop of skater.enteries()) {
//   console.log(prop);
// };

// we got the keys in the object
// for(const prop of Object.keys(skater)) {
//   console.log(prop);
// };

// to get the values you
// sketchy because of the for of loop that is reaching the skater object outside
// for(const prop of Object.keys(skater)) {
//   console.log(prop, skater[prop]);
// };

// ES2017 two methods released for object constructor
// this lays out the values alone
// for(const prop of Object.values(skater)) {
//   console.log(prop);
// };

// 2nd method
// entries is being called on object constructor entries is not going to be a 
// method on the prototype of the object have to call it from the object constructor method
// for(const prop of Object.enteries(skater)) {
//   console.log(prop);
// };

// we can destructor
// then makes the object have the ability of being iterable
for(const [prop, value] of Object.enteries(skater)) {
  console.log(prop, value);
};



