//   Valid Sudoku
// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Rules
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition

// Input: [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];
// Output: true;

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

//Solution : O(N^2) Time Complexity + O(N^2) Space Complexity
//Approach : 
//Loop through all the items in the matrix and all the row/column and box info in a set
// There can be 3 cases : 
    //If there is a duplicate item in a row , it should be already present in the set as we add an entry for row
    //If there is a duplicate item in a column , it should be already present in the set as we add an entry for column
    //If there is a duplicate item in a grid , it should be already present in the formula i/3 , j/3
// If the elements are not there in the set, add them
// If still at the end the loop ends that means the grid is unique so return true.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
const st = new Set();
for( let i = 0; i< 9; i++ ){
  for( let j = 0; j < 9; j++ ){
   if( board[i][j] !== '.' ){
     if(
       !st.has( board[i][j]+" in row "+i ) &&
       !st.has( board[i][j]+" in column "+j ) &&
       !st.has( board[i][j]+" in box "+Math.floor(i/3)+"-"+Math.floor(j/3) )
     ){
        st.add( board[i][j]+" in row "+i );
        st.add( board[i][j]+" in column "+j );
        st.add( board[i][j]+" in box "+Math.floor(i/3)+"-"+Math.floor(j/3) );
     }
     else{
       return false;
     }
   } 
  }
}
return true;
};