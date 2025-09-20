// for loop syntax in javaScript
// for(exp1;exp2;exp3){
//     //code block to be executed
// }

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