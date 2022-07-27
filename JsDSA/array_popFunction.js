let arr = [1,2,3,4,5];
arrSize = arr.length;
max = 5;
let newVal;

function arrPop(newVal) {
    if(arrSize>0){
       arrSize --;
       arr.length = arrSize;
    }
    else{
        console.log("array stack is empty");
    }
    console.log(arr);
    return arrPop;
}
arrPop();
arrPop();
arrPop();
arrPop();

