// Palindrome Check problem solution in JavaScript
const prompt= require("prompt-sync")();
let string=prompt("Enter a string:");

function isPalindrome(str){
    let stringReverse=str.split("").reverse().join("");
    if(str===stringReverse){
        return true
    }else{
        return false;
    }
}
let checkPalindrome=isPalindrome(string);
if(checkPalindrome){
    console.log(`${string} is a palindrome`);
}else{
    console.log(`${string} is not a palindrome`);
}