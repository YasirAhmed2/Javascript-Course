/*
    // ********* Problem Statement # 01: Phone Number formatter *********
Given a string of 11 digits, return the string as a phone number is this format.
"+D (DDD) DDD-DDDD"
Example: "92123748521"
return "+9 (212) 374 8521"
function formatNumber(number){
return number;
}
*/
function formatNumber(number){
// regular expression to check if the input is valid 
number = number.replace(/\D/g, ""); // Remove all non-digit characters

    let phoneNumber="+";
    if(number.length<11 || number.length>11){
        return "Invalid input";
    }
  
    if(number.length===11){
        phoneNumber+=number[0]+" (";
        phoneNumber+=number.slice(1,4)+") ";
        phoneNumber+=number.slice(4,7)+" ";
        phoneNumber+=number.slice(7,11);
        return phoneNumber;
    }
      
    }
const prompt = require("prompt-sync")();
let phoneNumber=prompt("Enter a 11 digit number: ")
console.log(formatNumber(phoneNumber));
