//Insertion sort
//O(N) Solution

const insertionSort = ( arr ) => {

    //Start with index 1 bc the first index is considered the sorted portion!!
    for (let counter1 = 1; counter1 < arr.length; counter1++) {
      if (arr[counter1] < arr[counter1 - 1]) {
        for (
          let counter2 = counter1 - 1, currVal = counter1;
          counter2 >= 0;
          counter2--, currVal--
        ) {
          if (arr[currVal] < arr[counter2]) {
            let temp = arr[currVal];
            arr[currVal] = arr[counter2];
            arr[counter2] = temp;
          }
        }
      }
    }
    return arr;
}

console.log("Array [5, 3 ,10 ,4 ,1 ] after insertionSort sort: " , insertionSort([5, 3 ,10 ,4 ,1 ]));
console.log("Array [5, 3 ,10 ,4 ,1 ] after insertionSort sort: " , insertionSort([-1, 3 ,0 ,1 ,0, -3, 15, 4 ]));