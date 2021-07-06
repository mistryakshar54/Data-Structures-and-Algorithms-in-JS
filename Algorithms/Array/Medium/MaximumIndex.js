// Maximum Index 
// Given an array A[] of N positive integers. The task is to find the maximum of j - i subjected to the constraint of A[i] <= A[j].
// Input:
// [34, 8, 10, 3, 2, 80, 30, 33, 1];
// Output:
//6

const maxIndex = ( A ) => {
let minElem = A[0];
let maxDiff = 0;
for (let i = 0, j = 1; i < A.length - 1; i++, j++) {
  if (A[i] <= A[j]) {
    if (j - minElem > maxDiff) {
      maxDiff = j - minElem;
    }
  }
  if (j < minElem) {
    minElem = j;
  }
}
return maxDiff;
}

console.log(maxIndex([34, 8, 10, 3, 2, 80, 30, 33, 1]));
console.log(maxIndex([9, 2, 3, 4, 5, 6, 7, 8, 18, 0]));
console.log(maxIndex([1, 2, 3, 4, 5, 6]));