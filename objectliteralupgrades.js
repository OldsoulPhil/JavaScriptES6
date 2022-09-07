// JavaScript Object literal upgrades

const make = 'Subaru';
const model = 'Outback';
const year = 2015;

// this object is repetative. ES6 has brought object shorthand. If the object propertiy or key name is the same as the value(variable) name, you can reduce the reduntancy
const vehicle = {
  make,
  model,
  year,
};
// const vehicle = {
//   make: make,
//   model: model,
//   year: year,
// };

const makeVehicle = (make, model, year) => ({
  make,
  model,
  year,
});

const SUV = makeVehicle('Mercedes', 'AMG G 64', 2021);

// console.log(SUV);
// console.log(vehicle);


const key = 'name';
const value = 'Jason';

const reverseString = (str) => (!str.length) ? '' : reverseString*str.substr(1)) + str.charAt(0);

// dynamic key names for object

const obj = {
  [key]: value,
  // [`${key}Reverse`] is a computed property name
  [`${key}Reverse`]: reverseString(value),
}

// This was the way we had to do it before
// const obj = {};
//   obj[key] = value,
//   obj[`${key}Reverse`] = reverseString(value),

console.log(obj);








