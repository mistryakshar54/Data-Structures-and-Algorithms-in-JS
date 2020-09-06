// 628. Maximum Product of Three Numbers
// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:

// Input: [1,2,3]
// Output: 6
// Note:

// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

// Gotchas : 
// The array can be unsorted!
// For an array of [-100,-99 , 1,2 , 3] the max prod of three nos is 326700 and not 3

// Solution Approach:
// O(NlogN) Time complexity + O(1) Space complexity
// Sort the array
// Get the max of ( prod of first 2 values * last element ) and ( prod of last 3 values)
// Why prod of first 2 values * last element ?  // BC - * - = +ve 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let len = nums.length;
    nums.sort( (a,b) => a - b );
    const firstTwoProds = nums[0] * nums[1] * nums[len - 1];
    const lastThreeProds = nums[len - 1] * nums[len - 2] * nums[len - 3];
    return Math.max( firstTwoProds , lastThreeProds);
};