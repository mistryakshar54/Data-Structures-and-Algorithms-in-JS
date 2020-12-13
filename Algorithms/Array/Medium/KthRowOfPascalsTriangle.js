// Kth Row of Pascal's Triangle

// Given an index k, return the kth row of the Pascal’s triangle.
// Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.
// Example:
// Input : k = 3
// Return : [1,3,3,1]
//  NOTE : k is 0 based. k = 0, corresponds to the row [1]. 

const kthRoWOfPascalsTriangle = (num) => {
  num++;
  if (num < 1) {
    return [];
  }
  let prevRow = [1];
  for (let rows = 1; rows < num; rows++) {
    let rowArr = [1];
    for (let j = 1; j < prevRow.length; j++) {
      rowArr.push(prevRow[j] + prevRow[j - 1]);
    }
    rowArr.push(1);
    prevRow = rowArr;
  }
  return prevRow;
};

console.log("Pascal's Triangle for row no 0: ", kthRoWOfPascalsTriangle(0));
console.log("Pascal's Triangle for row no 5: ", kthRoWOfPascalsTriangle(5));

