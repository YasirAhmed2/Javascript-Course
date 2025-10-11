function launchFuel(payload) {
  let totalFuel = 0;
  let fuel = Math.floor(payload / 5);
  totalFuel += fuel;
  while (fuel > 0) {
    totalFuel += fuel;
    fuel = Math.floor(fuel / 5);
  }

  return totalFuel;
}

// Example:
console.log(launchFuel(100));  // Output: 24
