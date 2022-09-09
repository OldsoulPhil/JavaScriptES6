// JavaScript working with multiple promises

// const youTubePost = {id: 1, comment: 'You Rock!'};
// const hobbies = ['Skateborarding', 'Coding'];

// const post = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(youTubePost);
//   ), 4000);
// })
  
// const post = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(hobbies);
//   ), 1000);
// })
  
// Promise
//   .all([post, hobby])
//   .then((daa) => console.log(data));
  
***********************************************************
    
// const youTubePost = {id: 1, comment: 'You Rock!'};
// const hobbies = ['Skateborarding', 'Coding'];

// const post = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(youTubePost);
//   ), 4000);
// })
  
// const post = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(hobbies);
//   ), 1000);
// })
  
// Promise
//   .all([post, hobby])
//   .then((data) => {
//     const [ytPost, myHobbies] = data;
//     console.log(ytPost, myHobbies);
// });
  
***************************************************************  
// You need to run on a server of some type wether that be the server service on VS code has.

const pokemon = fetch('http://pokeapi.co/api/v2/pokemon/pikachu);  
const chuckNorris = fetch('https://api.chucknorris.io/jokes/random);  
  
Promise
  .all([pokemon, chucknorris])
  .then((response) => {
    return Promise.all(response.map((res) => res.json()));
  })
  .then((data) => {
    const [poke, joke] = data;
    console.log(poke.name, joke.value);
    console.log(`
      ${poke.name}
      
      ${joke.value}
      `)
  });

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
