const dogs = ['German Shepherd', 'Bulldog', 'Poodle'];
const moreDogs = ['Labrador', 'Golden Retriever', 'Great Dane'];

// dogs is the array to append to
// apply takes the second array moreDogs and pulls each item and puts it into the first array
//dogs.push.apply(dogs, moreDogs);


// this is clearn and does the same thing as dogs.push.apply();
dogs.push(...moreDogs);

const greeting = (first, last) => console.log(`Hello ${first} ${last}`);


const name = ['John', 'Doe'];

// calling the greeting function the first index is the first name and the second index is the last name
greeting(...name);

// greeting(name[0], name[1]);

//console.log(dogs);
