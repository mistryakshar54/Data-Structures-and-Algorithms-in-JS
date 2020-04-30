//Bubble sort


const bubbleSort = ( arr ) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if( arr[i] >= arr[j] ){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log("Bubble Sort", bubbleSort([ 10,7,3,5,1]));
console.log("Bubble Sort", bubbleSort([ 10,7,3,5,1,5,3]));
console.log("Bubble Sort", bubbleSort([ -5,3,0,10,-2,1,-4]));