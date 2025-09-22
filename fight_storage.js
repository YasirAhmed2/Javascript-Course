/*
write a functionn to which we given a file size, a unit for file size and hard drive
size in GB, return number number of files hard drive can store. 
Constraints:
unit for file size can be byte(B), kilobyte(KB), megabyte(MB).
return the number of whole size files drive can put.
*/


// function fightStorage(fileSize,fileUnit ,driveSize){
//     if (fileUnit=='B'){
//         driveSize=1000000000;

//     return (fileSize/driveSize)*10000000000;
//     }else if(fileUnit=='KB'){
//         driveSize=10485786;
//         return (fileSize/driveSize)*driveSize;
//     }else if (fileUnit=='MB') {
//         // fileSize= fileSize;
//         let FileSizeGb= fileSize/1000000;;

//         // driveSize=1000;
//         console.log(FileSizeGb);
//         console.log(FileSizeGb/driveSize);    
//         return (fileSize/driveSize)*10000;
//     }
// }

// let's try another approach
// 1. check file unit and convert it to bytes 
// 2. convert drive size to bytes
// 3. dividing drive size by file size
function fileCaclculation(fileSize,FileUnit, driveSize){
    let FileSizeB=0;
if(FileUnit=='B'){
    FileSizeB=fileSize;
    // console.log(FileSizeB); 
}else if(FileUnit=='KB'){
    FileSizeB=fileSize*1000;
    // console.log(FileSizeB);
}else if(FileUnit=='MB'){
    FileSizeB=fileSize*1000*1000;
    console.log(FileSizeB);
}
let DriveSizeB=driveSize*1000*1000*1000;
console.log(DriveSizeB);

return DriveSizeB/FileSizeB;

}


let fileSize=10;
let FileUnit='KB';
let driveSize=1;

// let total_files=fightStorage(fileSize,FileUnit, driveSize);
let total_files=fileCaclculation(fileSize,FileUnit, driveSize);
console.log("Total files ", total_files, "of file size: ", fileSize, FileUnit, "can be stored in hard drive of size", driveSize, "GB");






// when a car fuel storage capacity current level of fuel and price per litre .
// return how many rupees it would take to fill the tank completely.