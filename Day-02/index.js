// Age Checker :
let age = 19;
if (age >= 18 && age <= 100) {
  console.log("Successfully Logged in");
} else if (age > 100) {
  console.log("You can't log in to this site ");
} else if (age < 18 && age >= 1) {
  console.log("You're not allowed to log in");
} else {
  console.log("That's can't be an age ");
}

// operators in js
// Arithmetic Operators
let a = 10;
let b = 20;
console.log("The Plus =", a + b);
console.log("The min =", a - b);
console.log("Multiply=", a * b);
console.log("Division=", a / b);
console.log("Mod=", a % b);
console.log("Expo", a ** b);
console.log("Increment after", a++);
console.log("Increment Before", ++a);
console.log("Decrement after", a--);
console.log("Decrement before", --a);

// JavaScript Assignment Operators
let num1 = 10;
num1 += 40;
console.log(num1);

let text1 = "Ali ";
let text2 = "Alizadah";
let text3 = text1 + text2;
console.log(text3);

txt1 = "How is it ";
txt1 += "going";
console.log(txt1);

let x = "ali " + 29;
let y = "ali" + 32 + 29;

console.log(y);

// Conditions in js
// Checking the day
let day = 2;
if (day < 10) {
  console.log("good morning");
} else if (day < 20) {
  console.log("good day");
} else {
  console.log("good night");
}

// typeof day;
//Switch ex
let days = "monday";
switch (days) {
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "sunday":
    console.log("today is sunday");
    break;

  case "monday":
    console.log("today is monday");
    break;

  default:
    console.log("it is a usual day");
}

// Ternary Operators:
let number = 10;
console.log(number > 12 ? "Greater than 12" : "Less than 12");
let myName = "kamal";
console.log(myName == "rafe" ? "my name is rafe" : "my name is  ali");
