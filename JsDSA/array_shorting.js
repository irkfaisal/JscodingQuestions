let arr = [4, 5, 1, 3, 2];

for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (j = 0; j < arr.length; j++) {
        // console.log(j);
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);