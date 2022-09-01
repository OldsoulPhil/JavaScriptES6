const names = ['Jared', 'Jason', 'Nathan'];


/* const fullNames = name.map(function(name) {
  return name + ' Brewer";
}); */

const fullNames = name.map((name) => name + ' Brewer');

// console.log(fullNames);

const contest = 'THE RELAY';

const skaters = ['Eric Koston', 'Shane ONeil', 'Kevin Bradley'];

                 
// object arrow function                 
const champions = skaters.map((skater, i) => ({ name: skater, contest: contest, rank: i + 1 }));

console.table(champions);
                 
// const champions = skaters.map(function(skater, i) {
//   return {
//     name: skater,
//     contest: contest,
//     rank: i + 1,
//   }
// });

//console.log(champions);

*************************************************************************************************
const trophies = [12, 33, 22, 13, 4, 17];

const champs = trophies.filter((num) => num > 20);

/*const champs = trophies.filter(function(num) {
   if ( num > 20) {
    return num;
   }
})*/
  
console.log(champs);
  
  
  
