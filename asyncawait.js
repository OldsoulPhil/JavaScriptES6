// JavaScript Async Await

// In synchronous operations tasks are performed one at a time and only when
// one is completed the following is unblocked. In other words, you need to wait for a task
// to finish to move to the next one.

// In asynchronous operations, you can move to another task before the previous one finishes.
// With asynchronous programming you're able to deal with multiple requests simultaneously,
// thus completing more tasks in a much shorter period of time

const value = fetch('https://api.github.com/user/jradness");
console.log(value);

// Blocking: Refers to the blocking of further operations until
// the current operation finishes. Blocking methods are executed synchronously.

// Non-Blocking: refers to the program that does not block the execution of further operations. 
//Non-Blocking methods are executed asynchronously

*****************************************************************

//JavaScript Blocking
console.log("#1");
console.log("#2");
alert("You blocked bro?");
console.log("#3");
console.log("#4");
console.log("#5");
alert("I could do this all day...");
console.log("#6");

*********************************************************************
  
// Async/Await
const holdTheFrontDoor = (time) => {
  return new Promise((resolve, reject) => {
    if (time > 4999 {
      reject("Sorry, I got tired"):
    }
    setTimeout(() => resolve (`Take your time... (${time}ms)`), time);
  })
};

const iGotYou = async () => {
  //console.log("start");
  try {
    const res = await holdTheFrontDoor(400);
    console.log(res);
    const res1 = await holdTheFrontDoor(1500);
    console.log(res1);
    const res2 = await holdTheFrontDoor(800);
    console.log(res2);
    const res3 = await holdTheFrontDoor(1500);
    console.log(res3);
    const res4 = await holdTheFrontDoor(300);
    console.log(res4);
    const res5 = await holdTheFrontDoor(2000);
    console.log(res5);
  } catch(err) {
    console.log(err); 
  }
  //console.log("end");
};


iGotYou();
// async function someName() {
//}

  
  
  
  
  
  
  
  
  
  
