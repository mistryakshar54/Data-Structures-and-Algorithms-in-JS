// LC 1337. The K Weakest Rows in a Matrix

// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. 
// Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

// Example 1:

// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return  mat
            .map( (r ,i ) => [  r.reduce( (a , c) => a + c ) , i   ] )
            .sort( (r , r1) => r[0] == r1[0] ? r[1] - r1[1] : r[0] - r1[0])
            .map( r => r[1] )
            .slice( 0 , k );   
};