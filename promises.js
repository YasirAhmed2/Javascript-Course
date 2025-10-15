// ********* Promises in JavaScript *********
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data from Promise";
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log("Data received:", data);    
        return "Next Step Data";
    }
    )
    .then(nextData => {
        console.log("Chained Data:", nextData);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// example with async await

