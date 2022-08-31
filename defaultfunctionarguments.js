// JavaScript 
// default functions arguments

// this allows you to leave a default value as a default parameter
// defualt values = tax = 0.0825 and tip = 0.18
const calcBill = (total, tax = 0.0825, tip = 0.18) => {
  /*if (tax === undefined) {
    tax = 0.0825;
  }*/
  //tax = tax || 0.0825;
  //tax = tax || 0.0825;
  return console.log(total + (total * tax) + (total * tip));
  
}

//calcBill(165);
//calcBill(165, undefined, 0.25);
calcBill(165, 0.0825, 0.25);
