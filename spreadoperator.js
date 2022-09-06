// JavaScript Spread Operator

// [...array]; ... is the spread operator
// allows us to spread out the items in an itterable arrays, strings, objects, dom nodes, map sets


// 4.
const skatePants = ['Volcom', 'Matix', 'RVCA'];
const skateShoes = ['Emerica', 'Nike SB', 'Vans'];

const combinedIsh = [...skatePants, 'Santa Cruz', ...skateShoes];

console.log(combinedIsh);


// 3.
// let combinedIsh = [];
// combinedIsh = combinedIsh.concat(skatePants);
// combinedIsh.push('Santa Cruz');
// combinedIsh = combinedIsh.concat(skateShoes);
// console.log(combinedIsh);


// 2.
// let combinedIsh = skatePants.concat(skateShoes);
// console.log(combinedIsh);

// 1.
// plugged out each item in the skatePants
//console.log(...skatePants);
