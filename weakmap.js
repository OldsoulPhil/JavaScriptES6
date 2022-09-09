// JavaScript ES6 WeakMap()

let person1 = { name: 'Jack' };
let person2 = { name: 'Jill' };

const map = new Map();
const weak = new WeakMap();

map.set()person1, 'Hello Jack');
weak.set()person2, 'Hello Jill');

person1 = null;
person2 = null;

console.log(map);
console.log(weak);
