// For a given array of integers and number n, calculate the maximum sum of n consecutive elements of the array
//For [1,2,5,2,8,1,5] , 2 => 10  - 2 numbers having max sum [2,8]
//For [1,2,5,2,8,1,5] , 4 => 17  - 4 numbers having max sum [2,5,2,8]


//Solution Approach : 
// Create a window untill N elements and calculate the sum uptill that element.
// Now slide the window by N elements and get the max of the new sum( the one with the new added element) and the old sum.

// 0(N) Solution
const maxSubArraySumOptimized = ( arr , n ) => {
    if( arr.length === 0 ) { return null; }
    let tempSum = 0, currSum = 0;
    for( let  i =0; i < n; i++ ){
        tempSum += arr[i];
    }
  
    for( let j = 0; (j+n) < arr.length ; j++ ){
        currSum = (tempSum - arr[j]) + arr[j + n];
        tempSum = Math.max( tempSum , currSum );
    }
    return tempSum;
}

console.log("maxSubArraySum =>", maxSubArraySumOptimized([1, 2, 5, 2, 8, 1, 5], 2));
console.log("maxSubArraySum =>" , maxSubArraySumOptimized([1, 2, 5, 2, 8, 1, 5], 4));
console.log("maxSubArraySum =>", maxSubArraySumOptimized([], 4));
