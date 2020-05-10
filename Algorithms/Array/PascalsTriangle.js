// Given numRows, generate the first numRows of Pascal’s triangle.

// Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

// Example:
// Given numRows = 5,

// Return
// [
//      [1],
//      [1,1],
//      [1,2,1],
//      [1,3,3,1],
//      [1,4,6,4,1]
// ]

const pascalsTriangle = (num) => {
  if (num < 1) {
    return [];
  }
  const triangle = [[1]];
  for (let rows = 1; rows < num; rows++) {
    const rowArr = [1];
    const prevRow = triangle[rows - 1];
    for (let j = 1; j < prevRow.length; j++) {
      rowArr.push(prevRow[j] + prevRow[j - 1]);
    }
    rowArr.push(1);
    triangle.push(rowArr);
  }
  return triangle;
};

console.log("Pascal's Triangle uptill no 6: ", pascalsTriangle(6));
console.log("Pascal's Triangle uptill no 5: ", pascalsTriangle(5));

