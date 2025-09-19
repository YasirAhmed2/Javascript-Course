var name="yasir";
var name="Ahmed";
console.log(name);

// using let but can't be re declared in same scope
let age=20;


function getAge(){  
  let  age=60; // can be re declared in different scope
  console.log(age);
}
getAge();
// let age=40;  // cannot be re declared
// age=50; // can be re assigned
console.log(age);

// Data types in Javascript
let price=99.99; // float
let discount=true; // boolean
let firstName="yasir"; // string
let lastName='Ahmed';
console.log(price);
console.log(discount);
console.log(firstName);
console.log(lastName);