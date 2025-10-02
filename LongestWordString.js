/*
    ********** Problem Statement **********
Given a string return the longest word. if multiple words tie return the first
function getLongestWord(sentence){
return word
}

*/

function getLongestWord(str){
let splittedString =str.split(" ");
let longestWord=splittedString[0];
for(let i=1;i<splittedString;i++){
    if(splittedString[i].length>longestWord.longestWord){
        LongestWord=splittedString[i];
    }
}
return LongestWord;
}
