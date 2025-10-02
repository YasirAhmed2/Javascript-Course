function frequencyCount(str,letter){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===letter){
            count++;
            
        }
    }
    return count;
}
let myString="Hello I'm learning Java";
let letterCount=frequencyCount(myString,'a');
console.log(letterCount);