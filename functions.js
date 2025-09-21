// ********* Functions in JavaScript *********

// Description: This file contains examples and explanations of functions in JavaScript.

// 1. Function Declaration
function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("Yasir")); // Output: Hello, Yasir!

// 2. Function Expression
const add = function(a, b){
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// 3. Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // Output: 24

// 4. Function with Default Parameters
function power(base, exponent = 2){
    return Math.pow(base, exponent);
}       
console.log(power(3)); // Output: 9
console.log(power(2, 3)); // Output: 8
console.log(power(5, 4)); // Output: 625

// 5. Function with Rest Parameters
function sumAll(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(10, 20, 30)); // Output: 60