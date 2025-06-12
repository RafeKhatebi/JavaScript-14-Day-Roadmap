// Global Scope Ex:
let carName = "BMW";
function name(carName) {
  return carName;
}
console.log(name(carName));
carName = "VOlvo";

console.log(carName);
//Local Scope Ex:
function myFunction() {
  let carNamels = "Pride";
  return carNamels;
}
console.log(myFunction());
carNamels = "BMW";
console.log(carNamels); // ReferenceError: carNamels is not defined

///Block Scope Ex:
if (true) {
  let carName = "Pride-2022";
}
console.log(carName); // ReferenceError: carName is not defined

//Automatic Global Scope Ex:
function myFunction() {
  let carName01 = "Pride=2023"; // This will create a global variable
  return carName01;
}
var carName01 = "Pride=2024";
console.log(myFunction()); // Output: Pride=2023
console.log(carName01); // Output: Pride=2024

//Hoisting Ex:
console.log(carName02); // Output: undefined
var carName02 = "Pride-2025"; // This will be hoisted
console.log(carName02); // Output: Pride-2025

//Hoisting with Function Declaration Ex:
console.log(myFunction02()); // Output: Pride-2026
function myFunction02() {
  return "Pride-2026"; // This will be hoisted
}

//Hoisting with Function Expression Ex:
console.log(myFunction03()); // Output: TypeError: myFunction03 is not a function
var myFunction03 = function () {
  return "Pride-2027"; // This will not be hoisted
};
//Hoisting with Arrow Function Ex:
console.log(myFunction04()); // Output: TypeError: myFunction04 is not a function
var myFunction04 = () => {
  return "Pride-2028"; // This will not be hoisted
};

//Hoisting with let and const Ex:
console.log(carName05); // Output: ReferenceError: Cannot access 'carName05' before initialization
console.log(carName03); // Output: ReferenceError: Cannot access 'carName03' before initialization
let carName05 = "Pride-2029"; // This will not be hoisted
const carName03 = "Pride-2030"; // This will not be hoisted
