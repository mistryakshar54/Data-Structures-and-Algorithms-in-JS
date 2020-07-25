// Minimum Increment to Make Array Unique
// Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

// Return the least number of moves to make every value in A unique.
// Example 1:

// Input: [1,2,2]
// Output: 1
// Explanation:  After 1 move, the array could be [1, 2, 3].
// Example 2:

// Input: [3,2,1,2,1,7]
// Output: 6
// Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

var minIncrementForUnique = function(A) {
  let minChngeCounter = 0;
  A.sort((a, b) => a - b);
  for (i = 1; i < A.length; i++) {
    if (A[i] <= A[i - 1]) {
      let newVal = A[i - 1] + 1;
      minChngeCounter += Math.abs(A[i] - newVal);
      A[i] = newVal;
    }
  }
  return minChngeCounter;
};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));