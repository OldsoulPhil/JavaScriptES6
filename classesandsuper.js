// JavaScript Extending Classes and using super()

// Every Class needs a constructor
class User {
  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
    this.hobbies = [];
  };
  greeting() {
    console.log(`Welcome ${this.userName}, today is your day!`);
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
    return this.hobbies;
  }
};

// instead of copying all of the code to make a super user or admin user extend the code instead
class Admin extends User {
  // This makes a copy of the User class
  // zone is a new parameter that we are taking into the constructor
  constructor (userName, age, zone) {
    // calling the User(userName, age);
    super(userName, age);
    this.zone = zone;
  };
  creatUser(name) {
    console.log(`Create new user: ${name}.`);
  }
}

const user1 = new User('jradness', 25);
const admin1 = new Admin('superAdmin', 57, 4);
