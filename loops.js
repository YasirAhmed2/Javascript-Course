// ********* Loops in JavaScript *********

// 1. For loop in JavaScript
// 1.1 Syntax of for loop
// for(exp1;exp2;exp3){
//     //code block to be executed
// }
// exp1 sets a variable before the loop starts (let i = 0).
// exp2 defines the condition for the loop to run (for example i must be less than 5).
// exp3 increases a value (i++) each time the code block has been executed.

// 1.2 Example 1 of for loop
for(let i=0;i<=100;i++){
    console.log(i);
    // Output: 0,1,2,3,....100
}

// 1.3 Example 2 of for loop
let cars=["BMW","Volvo","Saab","Ford"];
let text="";
for(i=0;i<cars.length;i++){
    text+=cars[i]+"\n";
}
console.log(text);
// Output: BMW
//         Volvo
//         Saab
//         Ford

// 1.4 scope of variable in for loop
let x=5;
for(let x=0;x<10;x++){
    console.log(x); // Output: 0,1,2,3,4,5,6,7,8,9
    // inside loop x is 0 to 9
}
console.log(x);  // here x is 5 // Output: 5

// 1.5 Nested for loop (loop inside another loop)
// Outer loop used for rows and inner for columns
for(let i=1;i<=20;i++)
{
    console.log("Rows:",i)
    for(j=1;j<=10;j++){
        console.log("Columns:",j);
    }
    // Output: Rows: 1
    //         Columns: 1
    //         Columns: 2
    //         ...
    //         Columns: 10
    //         Rows: 2
    //         Columns: 1
    //         ...
    //         Rows: 20
    //         Columns: 10
}      
// 1.6 Example of nested for loop with 2D array
let arr=[
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30]
]
for(let i=0;i<5;i++){
    for(let j=0;j<6;j++){
        console.log(arr[i][j]);
    }
}
// Output: 1,2,3,...30

// 2. While loop in JavaScript
// 2.1 Syntax of while loop
// while(condition){
//     //code block to be executed
// }
// The code block inside the loop will be executed as long as the condition is true.

// 2.2 Example of while loop
let z=80;
while(z<200){
    console.log(z);
    z+=15;
    // Output: 80,95,110,125,140,155,170,185
}

// 2.3 infinite loop
// while(true){
//     console.log("Hello World");
//    // to stop infinite loop we use break statement
// }

// 3. Do while loop in javascript
// 3.1 Syntax of do while loop
// do{
//     //code block to be executed
// }while(condition);
// The code block inside the loop will be executed once before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// 3.2 Example of do while loop
let f=4;
do{
    console.log(f); // Output: 4
    f++;
}while(f<4);
// The loop will execute once and print 4, then check the condition (f<4) which is false, so it stops.


// 4. for-in loop in Javascript
// 4.1 for-in loop syntax
// for(variable in object){
//     // code block to be executed
// }
// for-in loop is used to iterate over the properties of an object 

// 4.2 Example of for-in loop with object
let person={fname:"Yasir",lname:"Ahmed",age:17};
for(let key in person){
    console.log(key + ": " + person[key]);
}

// 5. for-of loop in javascript
// 5,1 for-of loop syntax
// for(variable of iterable){
//     // code block to be executed
// }
// for-of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

// 5.2 Example of for-of loop with array
let fruits=["Apple","Banana","Mango","Orange"];     
for(let fruit of fruits){
    console.log(fruit);
    // Output: Apple
    //         Banana
    //         Mango
    //         Orange
}   
