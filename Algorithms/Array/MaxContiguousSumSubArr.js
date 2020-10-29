//Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
//Also called as Kadane's Algorithm
//O(N) approach
//Kadane's Algorithm
//Solution approach : for all elements of an array check the max between  item or sum + that item and check the same globally
const MaxContiguousSumSubArr = ( A ) => {
    let localSum = A[0],globalSum = A[0];
    for (let index = 1; index < A.length; index++) {
        localSum = Math.max( A[index] , localSum + A[index] );
        globalSum = Math.max( localSum , globalSum );
    }
    return globalSum
}

console.log( MaxContiguousSumSubArr( [ 1,2,3,-10,5 ]  ) )