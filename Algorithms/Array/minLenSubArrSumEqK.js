// 209. Minimum Size Subarray Sum

// Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value.

// Note: There is at least one subarray with sum greater than x

// Examples:
// A[] = {1, 4, 45, 6, 0, 19}
//    x  =  51
// Output: 3
// Minimum length subarray is {4, 45, 6}

// A[] = {1, 10, 5, 2, 7}
//    x  = 9
// Output: 1
// Minimum length subarray is {10}

const minLenSubArrSumEqK = ( s , nums ) => {
    let st = 0 , end = 0, n = nums.length ,tCount = nums.length + 1, sum = 0;
    while(end < n){
        while( sum < s && end < n ){
            sum += nums[end];
            end++;
        }
        while( sum > s && st < n ){
            tCount = Math.min(tCount , end - st);
            sum -= nums[st];
            st++;
        }
    }
    return tCount;
}