// Objects
//1st:
// Creating an object using object literal notation
const person = {
  name: "Ali Alizadah",
  age: 30,
  city: "Kabul",
  occupation: "Software Engineer",
  isMale: true,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
//2nd:
// another way to create an object
const person2 = new Object();
person2.name = "Ali Alizadah";

//3rd:
// another way to create an object
const person3 = Object.create(person);
person3.name = "Jamil Jamili";

console.log(person);
// Accessing object properties
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("City: " + person.city);
console.log("Occupation: " + person.occupation);
console.log("Is Male: " + person.isMale);
greet: person.greet();

// Adding a new property
person.country = "Afghanistan";
console.log("Country: " + person.country);

// Modifying a  property
person.age = 31;
console.log("Current Age: " + person.age);

// Deleting a property
delete person.isMale;
console.log(person);
