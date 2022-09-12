// create an empty object
const obj = {};
console.log(obj);

const obj1 = {
    name: "Faisal",
    age : "20"
}
console.log(obj1);

// Getting values from an object

// We can access values of object using two methods:

// - using (.) followed by key name if the key-name is a one word
// - using square bracket and a quote
const obj2 = {
    name: "Faisal",
    age : 20,
    add: "N R R Road",
    city:"Asansol"
}
// accessing values using .
console.log(obj2.name, obj2.add, obj2.age);


// value can be accessed using square bracket and key name
console.log(obj2['name'], obj2['city'], obj2['age']);


// copy an object
const copyObj2 = Object.assign({}, obj2);
console.log("CopyObject",copyObj2);


// Getting object keys using Object.keys()
const obj4 = {
    name: "Raza",
    age : 25,
    add: "Road 25",
    city:"kolkata"
}
const keys1 = Object.keys(obj4)
console.log(keys1);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(obj4.hasOwnProperty('name'));