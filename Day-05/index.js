//Loops
//for loop
for (let i = 0; i < 10; i++) {
  console.log("For Loop: " + i);
}
console.log("\n");
//while loop
let i = 0;
while (i < 5) {
  console.log("while loop " + i);
  i++;
}
console.log("\n");
//do-while loop
let j = 0;
do {
  console.log("do-while loop " + j);
  j++;
} while (j < 5);
console.log("\n");

//for...of loop
let nums = [1, 2, 3, 4, 5];
for (let num of nums) {
  console.log(num + "\n");
}

//for...in loop
let person = { name: "Khodam", age: 22, city: "Herat" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
console.log("\n");

//forEach loop
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
