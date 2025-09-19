// if-else
let score=6;
// syntax for conditionals
// if(condition1){
//     // body
// }else if(condition2){
// // body
// }else{
//     // body
// }
if(score>=5){
    console.log("You passed!");
}else if (score===4){
    console.log("You are on the border.");
}else if(score<4){
    console.log("too much less score.");
}else{
    console.log("You failed.");
}

// short hand if-else
let marks=90;
let result=(marks>=40) ? "Pass" : "Fail";
console.log(result);

// switch-case  
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