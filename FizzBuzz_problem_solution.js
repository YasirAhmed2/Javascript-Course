/* FizzBuzz problem: print numbers 1–50, 
but multiples of 3 print "Fizz", multiples of 5 print "Buzz", 
multiples of both print "FizzBuzz"
*/
for(let i=1;i<=50;i++){
    if(i%3==0&& i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}