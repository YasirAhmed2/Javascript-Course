// ********* Callbacks in JavaScript *********
function processData(data, callback){
    // Simulating data processing with a timeout
    setTimeout(() => {
        const processedData = data.toUpperCase();
        callback(processedData);
    }, 1000);
}


processData("hello world", function(result){
    console.log("Processed Data:", result); // Output: Processed Data: HELLO WORLD
});

// Example with arrow function as callback
processData("javascript callbacks", (result) => {
    console.log("Processed Data:", result); // Output: Processed Data: JAVASCRIPT CALLBACKS
}); 



