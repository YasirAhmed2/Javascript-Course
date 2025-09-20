// for loop syntax in javaScript
// for(exp1;exp2;exp3){
//     //code block to be executed
// }
// exp1 sets a variable before the loop starts (let i = 0).
// exp2 defines the condition for the loop to run (for example i must be less than 5).
// exp3 increases a value (i++) each time the code block has been executed.

// Trying with an example
for(let i=0;i<=100;i++){
    console.log(i);
}

// Another example
let cars=["BMW","Volvo","Saab","Ford"];
let text="";
for(i=0;i<cars.length;i++){
    text+=cars[i]+"\n";
}
console.log(text);

// loop scope
let x=5;
for(let x=0;x<10;x++){
    console.log(x);
    // inside loop x is 0 to 9
}
console.log(x);  // here x is 5