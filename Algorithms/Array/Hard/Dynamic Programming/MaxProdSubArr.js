// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) 
// which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// We maintain counters for maxP and minP. 
// MaxP takes care of the maximum value i.e. Max ( a[i] , a[i] * maxP) 
// MinP takes care of the minimum value i.e. Min ( a[i] , a[i] * minP) 
// If we encounter a -ve value we swap maxP and minP because we need to multiply -ve values as well
// if we multiply the max value with -ve val in maxP it wont be the maxVaue so we store that in minP


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = -Infinity, maxP = 1, minP = 1;
  for(let i=0; i<nums.length; i++){
      if(nums[i] < 0){ let tmp = maxP; maxP = minP; minP = tmp;}
      maxP = Math.max(maxP*nums[i], nums[i]);
      minP = Math.min(minP*nums[i], nums[i]);
      max = Math.max(max, maxP);
  }
  return max;
};

console.log( maxProduct([2,3,-2,4]) )
console.log( maxProduct([-2,0,-1]) )