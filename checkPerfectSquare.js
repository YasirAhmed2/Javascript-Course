/*
    ********** Problem Statement **********
Given an integer, determine if it is a perfect square. A number is a perfect square if you can 
multiple an integer by itself to achieve the numbers.
function isPerfectSquare(n){
return boolean
}

*/

function isPerfectSquare(n){

    // For negative numbers returning false
    if(n<0){
        return false;
    }


    // for 0 and 1 returning true
    if(n==0||n==1){
return true;
    }

    for(let i=2;i<=Math.floor(n/2);i++){
        if(i*i==n){
            return true;
        }
        if(i*i>n){
            return false;
        }

    }
}

console.log(isPerfectSquare(16)); // output: true
console.log(isPerfectSquare(14)); // output: false