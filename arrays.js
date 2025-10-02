// ********* Functions in JavaScript *********

// 1. Arryays in JavaScript

// 1.1 Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 1.2 Accessing Array Elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry
console.log(fruits[3]); // Output: undefined (out of bounds)

// 1.3 Modifying Array Elements
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
fruits[3] = "Date"; // Adding a new element
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// 1.4 Array Methods
fruits.push("Elderberry"); // Add to end
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]
fruits.pop(); // Remove from end
console.log(fruits);
// Output: ["Apple", "Blueberry", "Cherry", "Date"]
fruits.shift(); // Remove from start
console.log(fruits); // Output: ["Blueberry", "Cherry", "Date"]
fruits.unshift("Apricot"); // Add to start
console.log(fruits); // Output: ["Apricot", "Blueberry", "Cherry", "Date"]

// 1.5 Array Length
console.log(fruits.length); // Output: 4

// 1.6 Iterating Over an Array
fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
});


// 1.7 Array Map
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ["APRICOT", "BLUEBERRY", "CHERRY", "DATE"]
// 1.8 Array Filter
let filteredFruits = fruits.filter(fruit => fruit.startsWith("B"));
console.log(filteredFruits); // Output: ["Blueberry"]
// 1.9 Array Reduce
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // Output: Total length of all fruit names
// 1.10 Multidimensional Arrays
let matrix = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6
// 1.11 Array Destructuring
let [firstFruit, secondFruit] = fruits;

console.log(firstFruit); // Output: Apricot
console.log(secondFruit); // Output: Blueberry

