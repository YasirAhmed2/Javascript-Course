// ********* Conditionals in JavaScript *********
// 1. if in JavaScript
// 1.2 syntax of if
// if(condition){
//     // body
// }

// 1.3 Example of if
let age=18;
if(age>=18){
    console.log("You are eligible to vote."); // Output: You are eligible to vote.
}
// 2. if-else in JavaScript
// 2.1 syntax of if-else
// syntax for conditionals
// if(condition1){
//     // body
// }else if(condition2){
// // body
// }else{
//     // body
// }

// 2.2 Example of if-else
let score=6;
if(score>=5){
    console.log("You passed!"); 
}else if (score===4){
    console.log("You are on the border.");  
}else if(score<4){
    console.log("too much less score.");
}else{
    console.log("You failed.");
}
// output: You passed!

// 3. Ternary operator in JavaScript
// 3.1 syntax
// condition ? expr1 : expr2
// if condition is true, eval expr1 (and return its value)
// if condition is false, eval expr2 (and return its value)

// 3.2 Example of ternary operator
let marks=90;
let result=(marks>=40) ? "Pass" : "Fail";
console.log(result); // Output: Pass

// 3. switch-case  
// 3.1 syntax of switch-case
/*
switch(expression){
    case x:
        // body
        break;
        case y:
            // body  
            break;
            default:
                // body
}
                */

// 3.2 Example of switch-case
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
        case 4:
            console.log("Thursday");
            break;
            case 5:
                console.log("Friday");
                case 6:
                    console.log("Saturday");
                    break;
                    case 7:
                        console.log("Sunday");
                        break;
                        default:
                            console.log("invalid");
}
// Output: Wednesday

// 4. Nested if in JavaScript
// 4.1 syntax of nested if
/*
if(condition1){      
    if(condition2){
        // body
    }
}  
*/  

// 4.2 Example of nested if
let num=10; 
if(num>=0){
    if(num===0){
        console.log("Number is zero.");
    }else{
        console.log("Number is positive.");
    }   
}else{
    console.log("Number is negative.");
}   
//  output: Number is positive.
