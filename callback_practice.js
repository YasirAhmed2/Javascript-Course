// practice of callbacks in java
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing Data:", data);
}   
fetchData(processData);

// Another example with array operations    
let numbers = [5, 3, 8, 1, 2];
function filterEvenNumbers(arr, callback) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    callback(evenNumbers);
}

function displayNumbers(arr) {
    console.log("Even Numbers:", arr);
}
filterEvenNumbers(numbers, displayNumbers);
