// hoisting
// problem 1 
function hoist1() {
    a =10;
    let b=20;
}
hoist1;
console.log(b);
console.log(a);
// here a is not declared with any 3 variables keyword so it will be assigned globally by js 
// meanwhile b which is declared with let keyword has scope only to it's block level {...} and we invoked our function outside the function thats why 
// b can not be availabled outside the function and hence we get  "b is not defined" error

// problem 2
// var code (global)
console.log(name); 
var name = 'Mukul Latiyan';

// the above code can be seen as
var name;
console.log(name);
name = "Hello world";
// so in both cases var name is assigned first then at last value is assigned 
// thats why we get name is not defined, it is declared but value not assigned
// because compiler will read the first line  

// problem 3
function foo() {
    function bar() { return 3; }
    return bar();
    function bar() { return 8; }
}
alert(foo());
// the output will be 8. The foo() is functional declartion so it will be hoisted at the top of the function foo() 

// problem 4
function parent() {
    var hoisted = "I'm a variable";
    function hoisted() { return "I'm a function"; }
    return hoisted();
}

console.log(parent());

// output will be hoisted is not a function

// problem 5
alert(foo());
function foo() {
    var bar = function () { return 3; };
    return bar();
    var bar = function () { return 8; };
}
// output will be 3

// problem 6
var myVar = 'foo';
(function () {
    console.log('Original value was: ' + myVar);
    var myVar = 'bar';
    console.log('New value is: ' + myVar);
})
();
// output is  Original value was: undefined
//            New value is: bar

// problem 7
console.log(y); 
y =1;
// y is not defined

// problem 8
console.log(y);
var y =1;

//problem 9
var y;
console.log(y);
y =1;

// problem 10
y =1;
console.log(y);
var y;

// problem 11
var a = 1;
console.log(a);
var a = 2;
console.log(a);

// problem 12
var z = 1;
let z;
console.log(z);

// problem 13
console.log(z);
let z =1;

// problem 14
function hoistExample() {
    var a;
    console.log("Before: ", a);  
    a = 10;  
    console.log("After: ", a);  
    }
    hoistExample();

// problem 15
function hoistingExample() {
    var a = undefined;
    console.log("Before: ", a);  // undefined  
    a = 10;  
    console.log("After: ", a);  // 10
    }
    hoistingExample();

// problem 16
function hoistingExample() {  
    console.log("Value of a in local scope: ", a); 
    } 
    console.log("Value of a in global scope: ", a);
    var a = 1;
    hoistingExample();

// problem 17
// var a = undefined;
function hoistingExample() {  
console.log("Value of a in local scope: ", a); // Value of a in local scope: 1
} 
console.log("Value of a in global scope: ", a); // Value of a in global scope: Undefined
a = 1;
hoistingExample();

// problem 18
function hoistingExample() {   
    a = 1;
    } 
    hoistingExample();
    console.log(a);


// problem 19 
    function hoistingExample() {   
    var a = 1;
    } 
    hoistingExample();
    console.log(a);

// problem 20
function a(){
  console.log("1")
}
a();
function a(){
  console.log("2")
}
a();

// problem 21
var test = 1;
function functionHoisting() {
  test = 10;
  return;
function test() {}
}
functionHoisting();
console.log(test);

// problem 22
alert(a());
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}


// problem 23
alert(a());
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}

console.log([] == []);
// false