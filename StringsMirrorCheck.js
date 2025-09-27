// Problem # 1: Check if two strings are mirrors of each other (case insensitive)
// Example: "abc" and "CBA" are mirrors of each other
// Example: "abc" and "def" are not mirrors of each other
function isMirror(str1,str2){
    // 1. Making sure that both values are strings
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
       return false;
    }

    
    // 2. Checking length of both strings
    if (str1.length!==str2.length){
        return false;

    }

    // 3. Converting strings to lowercase for case insencitivity comparison
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();

    // 4. Reversing the second string
    const str2Reversed=str2.split('').reverse().join('');

    // comparsing both strings
    if(str1===str2Reversed){
        return true;
    }else{
        return false;
    }
  
}
const prompt=require('prompt-sync')();
let string1=prompt("Enter a string: ");
let string2=prompt("Enter another string: ");
let checkMirror=isMirror(string1,string2);
if(checkMirror){
    console.log(`${string1} and ${string2} are mirrors of each other.`);
}else{
    console.log(`${string1} and ${string2} are not mirrors of each other.`);
}
