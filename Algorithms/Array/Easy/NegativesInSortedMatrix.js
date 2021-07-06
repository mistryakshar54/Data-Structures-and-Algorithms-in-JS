// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return (grid.flat().filter( i => i < 0 )).length
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);