let arr1 = new Array(5).fill(5,0,3);
console.log(arr1);

const arr2 = Array.apply(null, Array(5)).map(() => 1);
console.log(arr2);


const arr3 = Array.from({  
    length: 5  
  }, () => 0)  
  console.log(arr3);