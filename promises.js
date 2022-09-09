//JavaScript ES6 Promises

// promises are used to fetch JSON from an API and doing some ajax work
// use fetch to fetch JSON
// built right in the browser
// promises is something that can happen now and sometime in the future at some point
//Example:

// console.log('start');

// const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto);

// console.log('finish');
// console.log(pokemon);

*******************************************************************************

  
const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto);

//
pokemon
.then((data) => data.json())
.then((data) => console.log(data);
.catch((err) => console.log(err));




