// Simple] Function

function square(number) {
  return number * number;
}
console.log(square(5)); // 25

// Function with parameters
function add(a, b, c, d) {
  return a + b + c + d;
}
console.log(add(1, 2, 3, 4)); // 10

// Function with default parameters
function greet(name = "Guest") {
  return `Hello ${name} welcome!`;
}
console.log(greet("Ali")); // Hello Ali welcome!
// if you don't pass a name
console.log(greet()); // Hello Guest welcome!

// Arrow function
let square = (number) => {
  return number * number;
};
console.log(square(5)); // 25

const square1 = (number) => number * number;
console.log(square1(4));

//Anounymous function
let square2 = function (num) {
  return num * num;
};
console.log(square2(6)); // 36
