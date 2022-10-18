// array destructuring
let city = ["Kolkata", "New Delhi", "Chennai", "Patna", "Lucknow"];

// ES5
var c1 = city[0];
var c2 = city[1];
var c3 = city[2];
var c4 = city[3];
var c5 = city[4];
console.log("City is " + c4);

ES6
let [c1, c2, c3, c4, c5] = city;
console.log("City is " + c2);


let [c1, , , , c5] = city;
console.log(c1, c5);


let [c1, , , c5] = city;
console.log(c1, c5);

//
let [c1, , c3,] = city;
console.log(c1, c3)

// 
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);//"alpha"
console.log(secondName);//"beta

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);


//### Destructuring Object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)