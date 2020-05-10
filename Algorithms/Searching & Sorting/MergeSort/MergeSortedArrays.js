
//MErge two sorted arrays: Should be O(n + m) time and space complexity
const mergeArrays = ( arr1 , arr2 ) => {
    let i = 0, j=0;
    const mergedArray = [];
    while (i < arr1.length && j < arr2.length) {
        let min = arr1[i];
        if( arr1[i] < arr2[j]){
            i++;
        }
        else{
            min = arr2[j];
            j++;
        }
        mergedArray.push(min);
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

 console.log(mergeArrays([1, 2, 3 , 6],[0 , 4 , 8]));


