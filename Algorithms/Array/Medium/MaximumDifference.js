// Maximum difference between two elements such that larger element appears after the smaller number
// Given an array arr[] of integers, 
// find out the maximum difference between any two elements such that larger element appears after the smaller number.
//[ 2, 3, 10 , 4, 1] => 8

const maxDiff = ( A ) => {
    let minVal = A[0];
    let maxDiff = A[1] - A[0];
    for (let index = 1; index < A.length; index++) {
        if( A[index] - minVal > maxDiff ){
            maxDiff = A[index] - minVal;
        }
        if( A[index] < minVal ){
            minVal = A[index];
        }
    }
    return maxDiff;
}

console.log(maxDiff([2, 3, 10, 4, 1]));
console.log(maxDiff([1, 2, 90, 10, 110]));
console.log(maxDiff([80, 2, 6, 3, 100]));