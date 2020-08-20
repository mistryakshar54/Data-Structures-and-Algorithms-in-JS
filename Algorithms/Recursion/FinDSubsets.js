// LC 78. Subsets
// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// Approach : Recursive Approach
// Take a result []  and a subset[].
// Recurse throught each of the item , add them into the subset and recurse repeatedly untill the end of the loop
//Reomve the last visited item and add the computed subset back into the result []

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subset = [] , result =[];
    getSubSets( 0 , nums , result , [] );
    return result;
};

var getSubSets = ( index , nums , result , subset ) => {
    result.push( [...subset] );
    for( let i = index; i < nums.length; i++ ){
        subset.push( nums[i] );
        getSubSets( i + 1 , nums, result , subset );
        subset.pop();
    }
}

console.log( getSubSets([1,2,3]) );