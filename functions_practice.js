// ******* JavaScript Functions Practice Problems *******
// Description: This file contains practice problems related to functions in JavaScript.
// 1. A Function to calculate sum of two numbers
function calculateSum(a,b){
    return a+b;
}
calculateSum(10,20);
console.log(calculateSum(10,20)); // Output: 30

// 2. A function to calculate factorial of a number
function calculateFactorial(n){
    if (n==1 || n==0){
        return 1;
    }else{
        return n*calculateFactorial(n-1);
    }
}
console.log("Factorial of 6 is: ", calculateFactorial(6)); // Output: 720

// 3. A function to display table of a number
function 