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

