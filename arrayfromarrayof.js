// JavaScript array.from() and array.of()

// Array.from(): takes an iterable and transform it into array a true array
// link to a basic html file with header 5's

// New array methods added
// these methods are not on array prototype
// const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

// document.querySelectorAll comes from the javascript DOM
// shows node list
// const headers = document.querySelectorAll('h5');

// console.log(headers);




// console.log(shoes);


********************************************************************
// map can only be used on an array  
// const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

// const headers = document.querySelectorAll('h5');
// const headerArray = Array.from(headers, (node) => console.log(node.textContent));
// const headerArray = Array.from(headers); // this takes two arguments 1. is the iterable 2. map function
//headers.map((node) => console.log(node.textcontent));
//headersArray.map((node) => console.log(node.textcontent));
//console.log(headerArray);

*********************************************************************
// const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

// const headers = document.querySelectorAll('h5');
// //const headerArray = Array.from(headers, (node) => console.log(node.textContent));  
  
// function addTotal() {
//   const numbers = Array.from(arguments);
//   return numbers.reduce((prev, next) => prev + next, 0);
// }

// const total = addTotal(12,34,45,56,68);
// console.log(total);
// you get 215 back

***********************************************************************
                                //Array.of()
const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

const headers = document.querySelectorAll('h5');  
  
function addTotal() {
  const numbers = Array.from(arguments);
  return numbers.reduce((prev, next) => prev + next, 0);
}

const total = addTotal(12,34,45,56,68);  

const nums = Array.of(12,34,456,676,5669);
console.log(nums);
