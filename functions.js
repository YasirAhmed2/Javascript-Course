// ********* Functions in JavaScript *********

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

// 6. Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

// 7. Function Scope
function outerFunction(){
    let outerVar = "I'm outside!";  
    function innerFunction(){
        let innerVar = "I'm inside!";
        console.log(outerVar); // Accessing outer function variable
        console.log(innerVar); // Accessing inner function variable
    }   
    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined
}
outerFunction();
// Output: I'm outside!
//         I'm inside!

// 8. Callback Function
function fetchData(callback){
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

fetchData(function(data){
    console.log("Received:", data);
}); // Output (after 1 second): Received: Sample Data

// 9. Higher-Order Function
function operate(a, b, operation){
    return operation(a, b);
}   
console.log(operate(5, 3, add)); // Output: 8
console.log(operate(4, 2, multiply)); // Output: 8

// 10. Function Returning Another Function      
function makeMultiplier(factor){
    return function(x){
        return x * factor;
    }   
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
console.log(makeMultiplier(4)(5)); // Output: 20
// 11. Recursion
function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}       
console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)
console.log(fibonacci(10)); // Output: 55   
console.log(fibonacci(15)); // Output: 610
// 12. Function Hoisting
console.log(subtract(10, 4)); // Output: 6

function subtract(a, b){
    return a - b;
}   
// 13. Anonymous Function
setTimeout(function(){
    console.log("This is an anonymous function!");
}, 2000); // Output (after 2 seconds): This is an anonymous function!
// 14. Named Function Expression
const divide = function division(a, b){
    return a / b;
}
console.log(divide(20, 4)); // Output: 5
// console.log(division(20, 4)); // Error: division is not defined
// 15. Function Properties  and Methods
function sampleFunction(a, b){
    return a + b;
}
console.log(sampleFunction.length); // Output: 2 (number of parameters)
console.log(sampleFunction.name); // Output: sampleFunction 
console.log(sampleFunction.toString()); // Output: function sampleFunction(a, b){ return a + b; }
// 16. Using call, apply, and bind
const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;

    }   
}
const person1 = {
    firstName: "Yasir",
    lastName: "Ahmed"   
}
const person2 = {
    firstName: "Ahmed",
    lastName: "Yasir"
}   
console.log(person.fullName.call(person1, "Lahore", "Pakistan")); // Output: Yasir Ahmed, Lahore, Pakistan
console.log(person.fullName.apply(person2, ["Karachi", "Pakistan"])); // Output: Ahmed Yasir, Karachi, Pakistan 
const boundFunction = person.fullName.bind(person1, "Islamabad", "Pakistan");
console.log(boundFunction()); // Output: Yasir Ahmed, Islamabad, Pakistan
// 17. Arrow Function and 'this' Keyword   
const obj = {
    value: 42,
    regularFunction: function(){    
        console.log(this.value); // 'this' refers to obj
    },
    arrowFunction: () => {
        console.log(this.value); // 'this' does not refer to obj
    }
}
obj.regularFunction(); // Output: 42
obj.arrowFunction(); // Output: undefined (or error in strict mode)
// 18. Function Currying
function curry(func){
    return function curried(...args){
        if(args.length >= func.length){ 
            return func.apply(this, args);
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2));
            }

        }
    }
}
function sumThree(a, b, c){
    return a + b + c;
}
const curriedSum = curry(sumThree);
console.log(curriedSum(1)(2)(3));
// Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6
