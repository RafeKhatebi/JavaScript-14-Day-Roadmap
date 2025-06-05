//Array in JavaScript

// 1. Simple  Array declaration
let nums1 = [5, 4, 3, 2, 1];
console.log(nums1);
console.log(nums1[0]); // Accessing first element
console.log("Added an elemnt at end of the array" + nums1.push[6]);
console.log("Removing element from the end of the array" + nums1.pop(1));
console.log("Removing element from the beginning of the array" + nums1.shift());
console.log("Adding element at the beginning of the array" + nums1.unshift(0));
console.log("Length of the array" + nums1.length);
console.log("Finding the index of an element" + nums1.indexOf(3));
console.log("Checking if an element exists in the array" + nums1.includes(2));
console.log("Reversing the array" + nums1.reverse());
console.log("Sorting the array" + nums1.sort());
console.log("Slicing the array" + nums1.slice(1, 3));
console.log(
  "Iterating over array elements" + nums1.forEach((num) => console.log(num))
); //
// Mapping array elements to a new array
console.log(nums1.map((num) => num * 2));
// Filtering array elements
console.log(nums1.filter((num) => num > 2));

// 2. an other way to declare an array
let nums2 = new Array(5, 4, 3, 2, 1);
console.log(nums2);

// 3. Array with mixed data types
let mixedArray = [1, "Hello", true, null, [1, 2, 3], z];
console.log(mixedArray);
