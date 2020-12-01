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

//Solution Approach : 
// We will capture the max jump that an element can make at a particular index in reachable.
// If for an index, the jump value is less than the reachable, it means there was a previous element which can
// make a higher jump than the current element.
// If the value of reachable is less than the current index, it means we are stuck at 0 
// and there is no way we can jump further from that position

//Eg. for [3,2,1,0,4]
//       index    reachable
//        0           3
//        1           3
//        2           3
//        3           reachable is not < i hence return false as we cant go past 0
/**  
* @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachable = 0;
    for( let i = 0 ; i < nums.length; i++ ){
        if(reachable < i){
            return false;
        }
        reachable = Math.max( reachable , nums[i] + i );
    }
    return true;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));