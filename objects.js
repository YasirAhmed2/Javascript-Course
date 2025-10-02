// ********* Objects in JavaScript *********

// 1. Creating an Object
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(person); // Output: { name: 'Alice', age: 30, city: 'New York' }
// 2. Accessing Object Properties
console.log(person.name);
console.log(person["age"]);
// 3. Modifying Object Properties
person.age = 31;
person["city"] = "Los Angeles";
console.log(person);
// 4. Adding New Properties
person.country = "USA";
console.log(person);    
// 5. Deleting Properties
delete person.city;
console.log(person);    
// 6. Object Methods
person.greet = function(){
    return "Hello, my name is " + this.name;
}
console.log(person.greet()); // Output: Hello, my name is Alice
// 7. Iterating Over Object Properties
for(let key in person){ 
    console.log(key + ": " + person[key]);

}
// 8. Object.keys() and Object.values()
console.log(Object.keys(person)); // Output: [ 'name', 'age', 'country', 'greet' ]
console.log(Object.values(person)); // Output: [ 'Alice', 31, 'USA', [Function (anonymous)] ]
// 9. Object Destructuring
let {name, age} = person;
console.log(name); // Output: Alice
console.log(age); // Output: 31
// 10. Nested Objects
let student = {
    name: "Bob",
    marks: {
        math: 90,
        science: 85
    }
};
console.log(student.marks.math); // Output: 90
console.log(student["marks"]["science"]); // Output: 85
// 11. Object.assign()
let obj1 = {a: 1, b: 2};
let obj2 = {b: 3, c: 4};
let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
// 12. Spread Operator with Objects
let clonedObj = {...person};
console.log(clonedObj); // Output: { name: 'Alice', age: 31, country: 'USA', greet: [Function (anonymous)] }
