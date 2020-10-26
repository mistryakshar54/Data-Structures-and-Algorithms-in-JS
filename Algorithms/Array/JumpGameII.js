// 55. Jump Game
// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index./**
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let reachable = 0, jc = 0, pos = 0;
    for( let i = 0 ; i < nums.length - 1; i++ ){
        reachable = Math.max( reachable , nums[i] + i );
        if( pos === i ){
          pos = reachable ;
          jc++;
        }
    }
    return jc;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));