// ********* Primitive vs Reference types in JavaScript *********
// 1. Primitive type: seperate copies
let a = 5;
let b=a;
b=10;
console.log(a); // Output: 5
console.log(b); // Output: 10

// 2. Reference type: same copy
let arr1=[1,2,3];
let arr2=arr1;
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]

let obj1={name:"yasir",age:17};
let obj2=obj1;
obj2.class=12;
console.log(obj1); // Output: { name: 'yasir', age: 17, class: 12 }
console.log(obj2); // Output: { name: 'yasir', age: 17, class: 12 }

/*
Note: Reference type stores the address of the object in memory while 
Primitive type stores the actual value in memory
*/

// 3. To create a copy of reference type use spread operator
let arr3=[...arr1]; // copy of arr1
arr3.push(5);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr3); // Output: [1, 2, 3, 4, 5]
let obj3={...obj1}; // copy of obj1
obj3.city="Karachi";
console.log(obj1); // Output: { name: 'yasir', age: 17, class: 12 }
console.log(obj3); // Output: { name: 'yasir', age: 17, class: 12, city: 'Karachi' }