// JavaScript building your own Promises

// promis constructor
// variable called promise = new Promise
// new Promise () is going to take an argument and it is going to be a function which will take resolve and reject
// this will resolve or reject the data we are getting
const promise = new Promise((resolve, reject) => {
  resolve('Heck Yes!!');
});

promise
.then((data) => console.log(data));

*************************************************************
  
const promise = new Promise((resolve, reject) => {
  reject('Dang it!');
});

promise
.then((data) => console.log(data))
.catch((err) => console.log(err));

*************************************************************
  
const promise = new Promise((resolve, reject) => {
  reject({});
});

promise
.then((data) => console.log(data))
.catch((err) => console.log(err, 'No data'));

*************************************************************
  
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
   reject({});
  }, 3000);
});

promise
.then((data) => console.log(data))
.catch((err) => console.log(err, 'No data'));
  
  
  
