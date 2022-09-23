// JavaScript Spread Operator

// [...array]; ... is the spread operator
// allows us to spread out the items in an itterable arrays, strings, objects, dom nodes, map sets

// 1.
// plugged out each item in the skatePants
//console.log(...skatePants);

// 2.
// let combinedIsh = skatePants.concat(skateShoes);
// console.log(combinedIsh);

// 3.
// let combinedIsh = [];
// combinedIsh = combinedIsh.concat(skatePants);
// combinedIsh.push('Santa Cruz');
// combinedIsh = combinedIsh.concat(skateShoes);
// console.log(combinedIsh);

// 4.
const skatePants = ['Volcom', 'Matix', 'RVCA'];
const skateShoes = ['Emerica', 'Nike SB', 'Vans'];

const combinedIsh = [...skatePants, 'Santa Cruz', ...skateShoes];
// console.log(combinedIsh);

// 5.
const skaterDude = {
  name: 'nah',
  shoes: ['DC', 'Supra'],
};

skaterDude.shoes = [...skaterDude.shoes, ...skateShoes];

const comments = [
  { id: 1, comment: 'You keep shreddin dude, you rock!'},
  { id: 2, comment: 'You\'re my hero! I live vicariously through you!'},
  { id: 3, comment: 'A giraffe skates better than you.... and you look like one too...'},
  { id: 4, comment: 'I love you long time'},
];

const id = 3;
const commentIndex = comments.findIndex((comment) => comment.id === id);

const niceComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

console.log(niceComments)

// console.log(commentIndex);

// 6.
// console.log(skaterDude.shoes);
//console.log(...skaterDude.shoes[2]);
// console.log([...skaterDude.shoes[2]]);

