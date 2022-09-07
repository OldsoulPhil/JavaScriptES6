// JavaScript for of loop and is new
// used to loop over any data that is an itterable. Itterable is anything that can be looped over.
// for example arrays, strings, map sets, and generators.

// Looking at different loops and look at the problems they have and how for of loop stands above them.

const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];
//this is creating a custom function and adding it to array prototype at a global level
// shoes calls the myUcase method added it to the array prototype
// gives every item in the array and says a function was added on to the prototype
// loops through the array and calls all the items and uppercases all of them.
Array.prototype.myUcase = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
// this does not get listed
//shoes.size= '10';


// didnt call this function the array was still messed with so it will iterate.
// takes the array with changes and iterates that.
// shoes.myUcase();

// This list every item in the above array
// problem it is not easy to read. You are creating variables on the fly, inside the for loop and using semi colons.
// for(let i = 0, i < shoes.length; i += 1) {
//   console.log(shoes[i]);
// } 


// cleaner than for loop and easier to read.
// problem of what if you wanted to break out of this loop.
// shoes.forEach((shoe) => {
//   if (shoe === 'Supra') {
//     break; // or continue; this will give you a syntax error.
//   }
//   console.log(shoe);
// })


// for in loop gives back an index and is easier to read.
// shoe is an index
// now we get our items in an array
// can use the if (shoe === 'Supra') breaking out of the loop but have to use the weird syntax shoes[index]
// if anyone messes with the array prototype which we can build our own functions in an array.
// for (const index/*(shoe)*/ in shoes) {
//   console.log(shoes[index]/*shoe*/);
// }


// then you can use the above break points of the modified array prototype
for ( const shoe of shoes) {
  if (shoe === 'Supra') {
    // this should itterate through the above array and once Supra is hit it should break. should only get the first two items.
    break; // continue; this will itterate through and once Supra is hit it will skip it and continue with the rest.
  }
  console.log(shoe);
}




