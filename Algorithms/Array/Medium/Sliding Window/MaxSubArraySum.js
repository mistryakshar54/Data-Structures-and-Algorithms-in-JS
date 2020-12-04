// For a given array of integers and number n, calculate the maximum sum of n consecutive elements of the array
//For [1,2,5,2,8,1,5] , 2 => 10  - 2 numbers having max sum [2,8]
//For [1,2,5,2,8,1,5] , 4 => 17  - 4 numbers having max sum [2,5,2,8]

// 0(N^2) Solution

const maxSubArraySum = ( arr , n) => {
    if(arr.length === 0) { return null; }
    let maxSum = -Infinity; // Set of integers can be -ve
    for( let i=0; i< arr.length; i++ ){
        let nCount = n - 1;
        let sumCount = 0;
        for (let j = i; j < arr.length && nCount >= 0; j++ , nCount-- ) {
            sumCount += arr[j];
        }
        if(sumCount > maxSum) { maxSum = sumCount; }
    };
    return maxSum;
}

console.log("maxSubArraySum =>" , maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log("maxSubArraySum =>" , maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log("maxSubArraySum =>" , maxSubArraySum([], 4));