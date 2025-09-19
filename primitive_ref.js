// Primitive type: seperate copies
let a = 5;
let b=a;
b=10;
console.log(a);
console.log(b);

// Reference type: same copy
let arr1=[1,2,3];
let arr2=arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);

let obj1={name:"yasir",age:17};
let obj2=obj1;
obj2.class=12;
console.log(obj1);
console.log(obj2);

