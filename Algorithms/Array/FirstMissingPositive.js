// //IMP LC-Hard
// Given an unsorted integer array nums, find the smallest missing positive integer.

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

// Example 1:

// Input: nums = [1,2,0]
// Output: 3

// Input: nums = [7,8,9,11,12]
// Output: 1

// Approach 1 : O(N) Time complexity | O(N) Space Complexity
// Add all elements into a map. And find the maximum element in the map
// Create a counter of missing element i.e starting from 1 and loop till the max element in the map.
// If element is not found in the map incr count.
// If found return counter

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const mp = new Map();
    let maxEl = 0;
    for( let i = 0; i < nums.length; i++ ){
        if( nums[i] > 0 ){
            mp.set(nums[i],0);
            maxEl = Math.max( maxEl , nums[i] );
        }
    }
    let missingPosNo = 1;
    while( missingPosNo <= maxEl ){
        if(!mp.has( missingPosNo )){
            return missingPosNo;
        }
        missingPosNo++;
    }
    return missingPosNo;
};


