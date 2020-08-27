// 62. Unique Paths
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Input: (m = 3), (n = 2);
// Output: 3;

// Input: (m = 7), (n = 3);
// Output: 28;

// Dynamic Programming

//Solution Approach : We consider the fact that reaching to a point takes sum of the previous bottom and right step
//For all other items in grid it would be same for a particular row and column 
//Hence we can take one single array and do it's summation for that row and column

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arr = Array(n).fill(1);
    for( let i = 1; i < m; i++ ){
        for( let j = 1; j < n; j++ ){
            arr[j] += arr[j - 1 ];
        }
    }
    return arr[ n - 1];
};

console.log(uniquePaths(7,3));