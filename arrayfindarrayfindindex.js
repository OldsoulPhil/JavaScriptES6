// JavaScipt array.find() and array.findIndex() methods

// const comments = [
//   {
//     id: 1,
//     comment: 'I love to code.',
//     likes: 102,
//     user: 'jradness'
//   },
//   {
//     id: 2,
//     comment: 'Skate or Die',
//     likes: 97,
//     user: 'skatemadness'
//   },
//   {
//     id: 3,
//     comment: 'Eat. Sleep. Code. Repeat.',
//     likes: 106,
//     user: 'coder45'
//   },
//   {
//     id: 4,
//     comment: 'Skating at Venice Beach rocks',
//     user: 'shredz'
//   }
// ];


// .find() is a callback that returns a boolean
// loop through the array then when it finds a match returns a true or false and stores a value which is object in the variable
// const id = 3;
// const comment = comments.find((item) => item.id === id);
// console.log(comment);
//comments[4].id
// should get object with id 3 in comments array
// will only try to look for the element until it finds it then stops looking.

***********************************************************************
const comments = [
  {
    id: 1,
    comment: 'I love to code.',
    likes: 102,
    user: 'jradness'
  },
  {
    id: 2,
    comment: 'Skate or Die',
    likes: 97,
    user: 'skatemadness'
  },
  {
    id: 3,
    comment: 'Eat. Sleep. Code. Repeat.',
    likes: 106,
    user: 'coder45'
  },
  {
    id: 4,
    comment: 'Skating at Venice Beach rocks',
    user: 'shredz'
  }
];  
  
const id = 3;
const comment = comments.find((item) => item.likes === 200);
// when you want to find and index and slice it out of an array
const commentIndex = comments.findIndex((item) => item.id === id);
console.log(commentIndex);  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
