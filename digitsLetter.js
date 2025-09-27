function digitsLetter(number, string){
   if(number<string.length){
    return "Letter";
   }else if (number>string.length){
    return "Number";
   }else if(number===string.length){
    return "Equal";
   }

   
}
const prompt=require('prompt-sync')();
let num= parseInt(prompt("Enter a number: "));
let str=prompt("Enter a string: ");

let result=digitsLetter(num, str);
if(result === "Letter"){
    console.log("Entered number is less than length of string.");
}else if(result === "Number"){
    console.log("Entered number is greater than length of the string.");
}else if(result === "Equal"){
    console.log("Entered number is equal to length of the string.");
}
