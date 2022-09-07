// JavaScript .rest parameter in a function and destructuring

// spread operator unpacks things that are in an itterable like an array it unpacks that.

// ...rest operator does the opposite and actually packs the rest of the things in an itterable like an array.

// const currencryConverter = (rate, tax, val, ...amounts) => console.log(rate, tax, val, amounts);

// currencyConverter(1.25, 5, 10, 23, 44, 87);

const currencryConverter = (rate, ...amounts) => amounts.map((amount) => rate * amount);

const converted currencyConverter(1.25, 5, 10, 23, 44, 87);
console.log(converted);

// this is the ...rest parameter it will take the rest of the array or itterable and package them into a new array.

const teams = ['You', 'They', 'Jason', 'Nathan', 'Jared'];

const [capt, coCapt, ...team] = teams;

console.log(capt, coCapt, team);

// this is how to use the ...rest parameter in a function and use destructuring
