// pronlem 1
function a() {
    console.log(a);
    let a= 10;
}

function a1() {
    var a= 10;
    console.log(a);
    // var a= 10;
}
// a();
a1();


function b1(i) {
    for(var i=0; i<10; i++){
        // console.log(i); //will work
    }
    // console.log(i) //will work
}
// console.log(i) //will not work and throw a error i is not defined
b1();

function b2() {
    for(let i=0; i<10; i++){
        // console.log(i); //will work
    }
    // console.log(i) //will not work
}
// console.log(i) //will not work and throw a error i is not defined
b2();

var a = 1;
var a = 2;
console.log(a);


function redeclared() {
    var a = "global";
    if(true){
        var a = "local";
    }
    console.log(a);
}
redeclared();
// will result as local.

function redeclared1() {
    let a = "global";
    if(true){
        let a = "local";
        console.log(a);
    }
    console.log(a);
}
redeclared1();

{
    var a =10;
    let b = 20;
    const c = 30;
}
console.log(a);
console.log(b);
console.log(c);

{
    var a = 10;
    let b = 20;
    const c = 30;
    
    console.log(b);
    console.log(c);
}
console.log(a);

