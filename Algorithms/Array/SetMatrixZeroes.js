// LC 73. Set Matrix Zeroes

// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
 const marked = [];
 for( let i =0; i < m; i++ ){
    for( let j =0; j < n; j++ ){
        if( matrix[i][j] === 0 ){ marked.push( [i,j] ); }
    }
 }
 
 marked.forEach( item => {
     for( let i = item[0], j = 0; j < n; j++ ){
         matrix[i][j] = 0;
     }
     for( let j = item[1], i = 0; i < m; i++ ){
         matrix[i][j] = 0;
     }
 });
    
};