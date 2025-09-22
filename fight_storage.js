/*
write a functionn to which we given a file size, a unit for file size and hard drive
size in GB, return number number of files hard drive can store. 
Constraints:
unit for file size can be byte(B), kilobyte(KB), megabyte(MB).
return the number of whole size files drive can put.
*/


function fightStorage(fileSize,fileUnit ,driveSize){
    // let fileSizeGB;
    let fileSizeBytes;
    if (fileUnit=='B'){
        // fileSizeGB=fileSize/(1000^3);
        fileSizeBytes=fileSize;

    }else if(fileUnit=='KB'){
        fileSizeBytes=fileSize*1000;
        // fileSizeGB=fileSize/(1000^2);
      
    }else if (fileUnit=='MB') {
        
        // fileSizeGB= fileSize/1000;
fileSizeBytes=fileSize*1000*1000;
        // driveSize=1000;
        // console.log(fileSizeGB);
        // console.log(fileSizeGb/driveSize);    
        //  return fileSizeBytes/driveSize;

    }
let driveSizeBytes=driveSize*1000*1000*1000;
return driveSizeBytes/fileSizeBytes;

    // console.log(driveSize/fileSizeGB);
    // console.log(driveSize);
   
}


let fileSize=100;
let FileUnit='B';
let driveSize=4;
console.log(fightStorage(fileSize,FileUnit,driveSize));


