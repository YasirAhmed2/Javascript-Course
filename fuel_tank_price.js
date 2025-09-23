// when a car fuel storage capacity current level of fuel and price per litre .
// return how many rupees it would take to fill the tank completely.

function fuelTankPrice(tankCapacity, CurrentFuel, pricePerLitre){
    if(tankCapacity<0||CurrentFuel<0||pricePerLitre<0){
        return "Error: Invalid input values";
    }else if (CurrentFuel==tankCapacity){
        return "Error: Tank is already full";
    }
  let fuelRequired=tankCapacity-CurrentFuel;
    return fuelRequired*pricePerLitre;
    }


    const prompt = require("prompt-sync")();
let tankFuelCapacity=prompt("Enter tank fuel capacity:");
let currentFuelLevel=prompt("Enter current fuel level:");
let perLitrePrice=prompt("Enter price per litre:");

let totalPrice=fuelTankPrice(tankFuelCapacity,currentFuelLevel,perLitrePrice);
console.log(totalPrice); 

