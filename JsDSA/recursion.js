// using recusrion factorial of a number
let data = 5;
function Factorial(n) {
    if (n === 0 || n===1) {
        return 1;
    }
    else {
        return n * Factorial(n - 1);
    }
}
console.log(Factorial(data));