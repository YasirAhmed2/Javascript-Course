// Task # 01: Generating random numbers in JavaScript in specified range

const number=Math.random(1,100);
let result=Math.floor(number*100)+1;
console.log(result); // Output: random number between 1 to 100

// Task # 02: Finding sum of digits of a number
const prompt = require("prompt-sync")();
let num=prompt("Enter a number:");
let sum =0;
for(let i=0;i<num.length;i++){
   let res=parseInt(num[i]);
    sum+=res;
}
console.log("Sum of digits of",num,"is",sum); // Output: Sum of digits of 1234 is 10


// Task # 03: Finding factorial of a number
let number1=parseInt(prompt("Enter a number to find its factorial:"));
let factorial=1;
for(let i=1;i<=number1;i++){
    factorial*=i;
}
console.log("Factorial of ",number1,"is",factorial); // Output: Factorial of 5 is 120


// Task # 04: Counting number of vowels in a string
let str="Hello I'm learning JavaScript";
let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]=='a'||
        str[i]=='e'||
        str[i]=='i'||
        str[i]=='o'||
        str[i]=='u'||
        str[i]=='A'||
        str[i]=='E'||
        str[i]=='I'||
        str[i]=='O'||
        str[i]=='U'){
            count++;
        } 
}
console.log("Number of vowels in the string is:",count); // Output: Number of vowels in the string is: 10