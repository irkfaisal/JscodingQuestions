let arr = [];
arrSize = arr.length;
max = 5;
let newVal;

function arrPush(newVal) {
    if (arrSize >= max) {
        console.log("array stack is full");
    }
    else {
        arr[arrSize] = newVal;
        arrSize++;
    }
    console.log(arr);
    return arrPush;
}
arrPush(20);
arrPush(20);
arrPush(20);