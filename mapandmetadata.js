// JavaScript map() and Metadata

//maps and different ways to use them
// takes a key and a value.
// key can be anything

//object
//to creat key value pairs
// keys in an object have to be a string
//this is valid but using this object like this, these key value pairs in an actual object are limited, it has to be a string
const person = {
  'name': 'Jason',
}
**************************************************************************
const person = {
  // what if we wanted the key to actually be an object
  // then we wanted to store a value about it
  // this is handy because we might have an object and it has metadata but we dont wanna store this on that object
  {...}: 'Jason',
}

****************************************************************************
// add just an index html file with 5 h5 tags with something in them
  
 
const totalClicks = new Map();
// get h5 tags from the index.html file
const headers = document.querySelectorAll('h5');
console.log(headers);
// initiated the map here. Next we need to go collect the h5 tags and put them in a node list
// we need to loop over the node list and we need to set a key value pair for everything in the map 
// and we want the key to be the DOM node (element) and value to be how many clicks on that element

//while we loop we build the key value pairs for each item in the node list
// to do that we need to set each value pair
//
headers.forEach((h5) => {
  //console.log(h5);
  // map and the 0 is the count
  totalClick.set(h5, 0);
  h5.addEventListener('click', function() {
    const count = totalClicks.get(this);
    totalCLicks.set(this, conut+ 1);
    console.log(totalClicks);
  })
});

// log out the map which is totalClicks
console.log(totalClicks);





















