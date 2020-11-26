// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// Follow up: Could you implement the O(n) solution? 

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let mp = new Map();
    let maxCnt = 0;
    nums.forEach( item => mp.set(item,1) );
    nums.forEach( item => {
        let cnt = 0;
        if( ! mp.has( item - 1 )  ){
            let j = item;
            while( mp.has(j) ){
              j++; cnt++;
            }
        }
        maxCnt = Math.max( maxCnt , cnt );
    })
    return maxCnt;
};