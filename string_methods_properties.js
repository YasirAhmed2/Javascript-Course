// ********** String Methods and Properties in JavaScript **********
// 1. Declaring string in javaScript
let string1="Hello I'm learning JavaScript";
let string2="Hello I'm learning Python";
let string3= new String ("Hello I'm learning C++");  // Using String constructor
console.log(string1); // Output: Hello I'm learning JavaScript
console.log(string2); // Output: Hello I'm learning Python
console.log(string3); // Output: Hello I'm learning C++

// 2. String methods 
// 2.1 using charat() method
console.log(string1.charAt(4)); // Output: o
console.log(string2.charAt(7)); // Output: I
console.log(string3.charAt(10)); // Output: l

// 2.2. using charCodeAt() method
console.log(string1.charCodeAt(4)); // Output: 111
console.log(string2.charCodeAt(7)); // Output: 39
console.log(string3.charCodeAt(10)); // Output: 108

// 2.3 concat() method
console.log(string1.concat( " and JavaScript is fun!")); // Output: Hello I'm learning JavaScript and JavaScript is fun!
console.log(string2.concat( " and Python is great!")); // Output: Hello I'm learning Python and Python is great!
console.log(string3.concat( " and C++ is powerful!")); // Output: Hello I'm learning C++ and C++ is powerful!


// 2.4 endsWith() method
console.log(string1.endsWith("JavaScript")); // Output: true
console.log(string2.endsWith("great!")); // Output: false
console.log(string3.endsWith("C++")); // Output: true

// 2.5 toLowerCase() method
console.log(string1.toLowerCase()); // Output: hello i'm learning javascript
console.log(string2.toLowerCase()); // Output: hello i'm learning python
console.log(string3.toLowerCase()); // Output: hello i'm learning c++

// 2.6 toUpperCase() method
console.log(string1.toUpperCase()); // Output: HELLO I'M LEARNING JAVASCRIPT
console.log(string2.toUpperCase()); // Output: HELLO I'M LEARNING PYTHON
console.log(string3.toUpperCase()); // Output: HELLO I'M LEARNING C++