// Set() in JavaScript

// sets are a unique array because items can only be added once
// each item will have a unique value
// has a really nice api for managing items inside
// cant access items individualy
// not index based

const people = ['Jason', 'Nathan', 'Jared'];

const names = new Set(people);

// add items
// names.add('Jason');
// names.add('Nathan');
// names.add('Jared');

// names.add('Bobby');

// when using a set key and values are the same thing
const humans = names.values();

// for(const name of humans) {
//   console.log(name);
// }

// delete item
//names.delete('Jason');

//console.log(names.size);

// logs out set clears it then sets a clear one
// console.log(names);
// names.clear();
// console.log(names);

console.log(names.has('Jason')); // jason vs Jason has to be an exact match
//console.log(names);
// in the teaching they use .values(), .keys(), .entries
