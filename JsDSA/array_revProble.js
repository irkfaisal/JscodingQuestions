// rotation of an array by array method in the right direction
function rotateArray(arr, d) {
    for(let i =0; i<d; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
    return rotateArray;
    
}

// rotation of an array by array method in the right direction
function rotateArray1(arr1, d1) {
    let deletedArr1 = arr1.splice(arr1.length-d1);
    for(let i=0; i<d1; i++){
        arr1.splice(i,0,deletedArr1[i]);
    }
    console.log(arr1);
    return rotateArray1;
    
}

// rotation of an array by array method in the left direction
function rotateArray2(arr2, d2){
    for(let i=0; i<d2; i++){
        arr2.push(arr2.shift())
    }
    console.log(arr2);
    return rotateArray2
}

// rotation of an array by array method in the left direction
function rotateArray3(arr3,d3) {
    for (let index = 0; index < d3; index++) {
        let deletedArr3 = arr3.shift(d3-1)
        arr3.push(deletedArr3)
        
    }
    console.log(arr3);
    return rotateArray3;
}




let arr = [1,2,3,4,5];
let d = 2;
let arr1 = [1,2,3,4,5];
let d1 = 2;
let arr2 = [4,5,1,2,3];
let d2 = 2;
let arr3 = [4,5,1,2,3];
let d3 = 2;

console.log(rotateArray(arr,d));
console.log(rotateArray1(arr1,d1));
console.log(rotateArray2(arr2,d2));
console.log(rotateArray3(arr3,d3));
