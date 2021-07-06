// Reverse array in groups
// Given an array arr[] of positive integers of size N. Reverse every sub-array of K group elements.

// [1,2,3,4,5] , 4 == revArrInGrp ==> [4,3,2,1,5]

const revArrInGrp = (A, k) => {
  let index = 0;
  while (index < A.length) {
    let lastInd = index + k - 1;
    if (lastInd < A.length) {
      for (let start = index, end = lastInd; start < end; start++, end--) {
        let temp = A[start];
        A[start] = A[end];
        A[end] = temp;
      }
    }
    index += k;
  }
  return A;
};

console.log(revArrInGrp([1, 2, 3, 4, 5], 4));
console.log(revArrInGrp([10, 20, 30, 40, 50, 60], 2));
