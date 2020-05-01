//O(N^2) Solution

const selectionSort = ( arr ) => {
    arr.forEach((element, elemIndex) => {
    //For each element check if there is a minimum value in the array
    let minIndex = elemIndex;
        for (let index = elemIndex + 1; index < arr.length; index++) {
            if( arr[index] < arr[minIndex] ){ 
                //If for any value throughout the array select the index with the min value
                minIndex = index;
            }
        }
        //If there was an elem with minimum value found and there is an index mismatch, swap!!
        if(minIndex !== elemIndex){
            let temp = arr[minIndex];
            arr[minIndex] = arr[elemIndex];
            arr[elemIndex] = temp;
        }
    });
    return arr; //return the sorted array
}

console.log("Array [5, 3 ,10 ,4 ,1 ] after selection sort: " , selectionSort([5, 3 ,10 ,4 ,1 ]));
console.log("Array [5, 3 ,10 ,4 ,1 ] after selection sort: " , selectionSort([-1, 3 ,0 ,1 ,0, -3, 15, 4 ]));