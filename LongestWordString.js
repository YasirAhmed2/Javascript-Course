/*
    ********** Problem Statement **********
Given a string return the longest word. if multiple words tie return the first
function getLongestWord(sentence){
return word
}

*/

function getLongestWord(str){
let splittedString =str.split(" ");
console.log(splittedString);
let longestWord=splittedString[0];
for(let i=1;i<splittedString.length;i++){
    if(splittedString[i].length>longestWord.length){
        longestWord=splittedString[i];
    }
}
return longestWord;
}
let prompt=require("prompt-sync")();
let sentence=prompt("Enter a sentence: ");
console.log(getLongestWord(sentence)); // should return the longest word in the sentence
