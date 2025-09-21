// Description: This file contains practice problems related to functions in JavaScript.
function calculateSum(a,b){
    return a+b;
}
calculateSum(10,20);
console.log(calculateSum(10,20)); // Output: 30

function calculateFactorial(n){
    if (n==1 || n==0){
        return 1;
    }else{
        return n*calculateFactorial(n-1);
    }
}
console.log("Factorial of 6 is: ", calculateFactorial(6)); // Output: 720