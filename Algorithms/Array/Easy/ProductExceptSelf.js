// LC : 238. Product of Array Except Self

// Given an array nums of n integers where n > 1,  
// return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let leftArr = Array(nums.length).fill(1),
    rightArr = Array(nums.length).fill(1);
  let resultArr = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    resultArr[i] = leftArr[i] * rightArr[i];
  }
  return resultArr;
};
