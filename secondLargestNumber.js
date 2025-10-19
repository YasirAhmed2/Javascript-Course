let arr = [60,10,13,99,101,4,60,70,60];


// removing duplicates
let uniqueArray = [...new Set(arr)];
console.log("Unique array is: " + uniqueArray);

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];  // pivot value, I select the last element
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); 
        } else {
            right.push(arr[i]);
        }

    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let sortedArr = quickSort(uniqueArray);
console.log("Sorted array is: " + sortedArr);

function secondLargestNumber(arr) {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2]; // since sorted ascending
}

let secondLargest = secondLargestNumber(sortedArr);
console.log("Second largest number is: " + secondLargest);
