const pivotHelper = ( arr , start = 0, end = arr.length - 1 ) => {
    let pivot = arr[start];
    let pivotCounter = start;
    let lastGreatIndex = -1;
    for(let i = start + 1; i <= end; i++){
        if (pivot > arr[i]) {
          if (lastGreatIndex > 0 && lastGreatIndex < i) {
            let temp = arr[i];
            arr[i] = arr[lastGreatIndex];
            arr[lastGreatIndex] = temp;
            lastGreatIndex = i;
          }
          pivotCounter++;
        } else if (lastGreatIndex == -1) {
          lastGreatIndex = i;
        }
    }
    let temp2 = arr[pivotCounter];
    arr[pivotCounter] = arr[0];
    arr[0] = temp2;
    return pivotCounter;
}

const quickSort = ( arr , start = 0, end = arr.length  - 1 ) => {
    if(  start < end  ){
    let pivotPoint = pivotHelper(arr, start , end);
    quickSort(arr , start , pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, end);
    }
    return arr;
}

console.log(quickSort([8, 5, 9, 3]));