function sendMessage(route) {
  const speedOfLight = 300000; // km/s
  const totalDistance = route.reduce((sum, dist) => sum + dist, 0);
  const timeInSeconds = totalDistance / speedOfLight;
  return timeInSeconds;
}

// Example:
console.log(sendMessage([200000, 150000, 100000])); 
// Output: 1.5 (seconds)
