// JavaScript using Async/Await with multiple promises

const gitData = async () => {
  const p1 = /*await*/ fetch("https://api.github.com/users/jradness");
  const p2 = /*await*/ fetch("https://api.github.com/users/jradness");
  const res = await Promise.all([p1, p2]);
  const gitPromises = res.map(r => r.json());
  const [jrad, devslopes] = await Promise.all(gitPromises);
  console.log(jrad, devslopes);
};

//gitData();

**********************************************************************
const getData = async (names) => {
  const promises = names
    .map(name => fetch(`https://api.github.com/users/jradness/${name}`)
    .then(r => r.json()));
  const accounts = await Promise.all(promises);
  console.log(accounts);
}  

getData(["jradness", "devslopes", "blockstart"]);
  
  
  
  
  
  
  
  
  
  
  
  
