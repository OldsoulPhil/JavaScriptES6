// JavaScript Arrow Functions with 'this'
// this keyword works with arrow functions

const skaterDude = {
  name: 'Jason',
  stance: 'regular',
  favTrick: '360 flips',
  // doTrick() {
  // better syntax ^^
  doTrick: function () {
    // This this keyword refers to the parent object which is skaterDude
    console.log('Droppin hammers with some ' + this.favTrick);
    //you would have to do something sketchy like this to make this work
    // const self = this;
    // const forDayzz = () => {
      //console.lof('I could do ' + this.favTrick + ' for dayzzz!');
       //}
       //forDayzz();
      //}
    //}
    // this keyword inside of a function will inhearit from the parent object on the top which in this case is skaterDude 
    const forDayzz = function() {
      // this this is in a different scope and is looking at the doTrick function object
      // can now turn the this to self.favTrick
      // the reference will be available in the next block below
      console.log('I could do ' + this.favTrick + ' for dayzzz!');
                  
    }
    forDayzz();
  }
}

skaterDude.doTrick();
