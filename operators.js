// ********* Operators in JavaScript *********
// 1. Types of operators in JavaScript
// 1.1 Arithmetic operators
// 1.2 Comparison operators
// 1.3 Logical operators
// 1.4 Assignment operators

// 1.1 Arithmetic operators
let a=10;
let b=3;
console.log(a+b);  // Output: 13
console.log(a-b); // Output: 7
console.log(a*b); // Output: 30
console.log(a/b); // Output: 3.3333333333333335
console.log(a%b); // Output: 1

// 1.2 Comparison operators
console.log(5=="5"); // loose equality // output: true
console.log(5==="5"); // strict equality // output: false
let x=10,y=20;
console.log(x===y);  // strict equality // output: false
console.log(x>y); // output: false
console.log(x<y); // output: true
console.log(x>=y); // output: false
console.log(x<=y); // output: true
console.log(x!=y); // output: true
console.log(x!==y); // strict not equal // output: true

// 1.3 Logical operators
console.log(true && false); // output: false
console.log(true || false); // output: true
console.log(!true); // output: false
console.log(!false); // output: true

// 1.4 Assignment operators
let z=10;
z+=5;
console.log(z); // output: 15
z-=3;
console.log(z); // output: 12