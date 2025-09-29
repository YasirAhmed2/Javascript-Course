/*
given an array of number representing cars speed at traffics camera and a 
second number representing speed limit.
return an array of speed that crossed limit. if none were speeding return [0,0]
arr=[50,10,90, 90, 30, 20,45] limit 40 -> Answer [50,90,90,45]
*/

function overSpeedFinder(speeds, limit){
    let overSpeed=[];
    for(let i=0;i<speeds.length;i++){
        if(speeds[i]>limit){
            overSpeed[i]=speeds[i];
        }
        
    }
    let filteredOverSpeed=overSpeed.filter(item => item!==null && item!==undefined);
    if(filteredOverSpeed.length===0){
        return [0,0];
    }
    return filteredOverSpeed;
}

let speed=[60,70,40,30,10,100];
let limit=30;
let overSpeeder=overSpeedFinder(speed,limit);
console.log(overSpeeder);