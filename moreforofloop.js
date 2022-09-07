const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

// console.log(shoes.entries());

// const shoe = shoes.entries();
// console.log(shoe);

// you get array itterater

// makes shoes with .entries() because we turned the array into an itterable with .entries() method
// for (const shoe of shoes.entries()) {
//   console.log(shoe);
// }

// access the index and the value but there is a better way
// for (const shoe of shoes.entries()) {
//   console.log(shoe[0], shoe[1]);
// }

// use destructuring for this
// for (const [i, shoe] of shoes.entries()) {
//   console.log(`${shoe} is the ${i} index`);
// }
// you have the Nike SB and the index that matches it.

for (const [i, shoe] of shoes.entries()) {
  console.log(`${shoe} is the ${i} index`);
}

// arguments keyword is not available in arrow functions and this is why arrow functions can not be used
// we want this to sum a series of random numbers of addTotal
function addTotal() {
  //console.log([1, 2, 3]);
  
  // arguments is a reserve word or keyword
  let total = 0;
  for(const num of arguments) {
    total += num;
  }
  console.log(total);
  return total
  //console.log(arguments);
}

// total of 279
// addTotal(12,23,45,56,78,65);

//logged out each letter in Jason Brewer
const name = 'Jason Brewer';
 
for(const char of name) {
  // console.log(char);
}

// this is DOM nodes and this will pull header tags in html specifically header 5
const header = document.querySelectorAll('h5');

// can add a click event
for(const h of header) {
  // h is the DOM nodes or actual elements
  // 'click' is click event
  h.addEventListener('click', function() {
    console.log(this.textContent);
  }
  //const.log(h);
}
//console.log(header);






