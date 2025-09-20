// ********* Variables and Data types in JavaScript *********
// 1. var, let and const keywords to declare variable
// 1.1 var keyword
// can be re declared and re assigned
var name="yasir";
var name="Ahmed";
console.log(name); // Output: Ahmed
name="Ali";
console.log(name); // Output: Ali

// 1.2 const keyword  
// cannot be re assigned and re declared
const pi=3.14;
console.log(pi); // Output: 3.14
// pi=3.15; // cannot be re assigned
// const pi=3.141; // cannot be re declared

// using let but can't be re declared in same scope
let age=20;


function getAge(){  
  let  age=60; // can be re declared in different scope
  console.log(age); // Output: 60
}
getAge();
// let age=40;  // cannot be re declared
// age=50; // can be re assigned
console.log(age); // Output: 20

// 2. Scope of variable in JavaScript
// 2.1 Global scope
var globalVar="I am global";
console.log(globalVar); // Output: I am global

function testGlobal(){
    console.log(globalVar); // Output: I am global
}
testGlobal();
// 2.2 Local scope
function testLocal(){
    var localVar="I am local";
    console.log(localVar); // Output: I am local
    sample =50; // Implicitly global (not recommended)
    console.log(sample); // Output: 50
}
testLocal();
// console.log(localVar); // Error: localVar is not defined
console.log(sample); // Output: 50


// 3. Data types in JavaScript
// 3.1 Primitive data types
let city="Karachi";
console.log(city); // Output: Karachi
console.log(typeof city); // Output: string
let price=99.99; // float
let discount=true; // boolean
let firstName="yasir"; // string
let lastName='Ahmed';
console.log(price); // Output: 99.99
console.log(typeof price); // Output: number
console.log(typeof discount); // Output: boolean
console.log(typeof firstName);  // Output: string
console.log(typeof lastName);  // Output: string
console.log(discount); // Output: true
console.log(firstName); // Output: yasir
console.log(lastName); // Output: Ahmed