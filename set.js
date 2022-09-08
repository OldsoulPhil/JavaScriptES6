// Set() in JavaScript

// sets are a unique array because items can only be added once
// each item will have a unique value
// has a really nice api for managing items inside
// cant access items individualy
// not index based

const names = new Set();

// add items
names.add('Jason');
names.add('Nathan');
names.add('Jared');

// delete item
//names.delete('Jason');
console.log(names);
names.clear();
console.log(names);
//console.log(names.size);
