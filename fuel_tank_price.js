// when a car fuel storage capacity current level of fuel and price per litre .
// return how many rupees it would take to fill the tank completely.

function fuelTankPrice(tankCapacity, CurrentFuel, pricePerLitre){
    let fuelRequired=tankCapacity-CurrentFuel;
    return fuelRequired*pricePerLitre;
}

let tankFuelCapacity=50;
let currentFuelLevel=15;
let perLitrePrice=200;

let totalPrice=fuelTankPrice(tankFuelCapacity,currentFuelLevel,perLitrePrice);
console.log("Total cost required to fill tank: ",totalPrice); // 7000

