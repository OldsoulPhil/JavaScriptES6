// JavaScript 

// const competitors = new Set();

// //add first skater
// competitors.add('Eric Koston');
// competitors.add('Andrew Reynolds');
// competitors.add('Chris Cole');

// const competed = competitors.values();

// console.log(competed);

// competed.next();
// competed.next();
// competed.next();

// console.log(competitors);

****************************************************
  
const competitors = new Set();

//add first skater
competitors.add('Eric Koston');
competitors.add('Andrew Reynolds');
competitors.add('Chris Cole');

const competed = competitors.values();

console.log(competed);

competed.next(); // called Eric up
competed.next(); // called Andrew up
competitors.add('Paul Rodriguez');
//competed.next();

console.log(competitors);
