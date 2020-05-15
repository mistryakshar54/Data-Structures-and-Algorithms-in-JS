// Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.
// Example Input:
// 1 2 3
// 4 5 6
// 7 8 9

// Output :
// [ 
//   [1],
//   [2, 4],
//   [3, 5, 7],
//   [6, 8],
//   [9]
// ]

//Solution Approach : In the first iteration mark all the start of the anti diagonals.
//All elements of the first row are the start points of the anti diagonals
//E.g. 1,2,3 here.
//The pattern is with each iteration row increates by 1 and column decreases by 1 i.e. r + 1 , c - 1
//For the second loop we know that the start of the anti diagonals will be the last element of remaining rows
//The pattern for element selection remains the same! i.e. r + 1,c - 1

const findAntiDiagonals = ( A ) => {
    const diagArr = [];
    for( let  i = 0; i < A[0].length; i++ ){
        let [row , col] = [0 , i];
        rowArr = [];
        while (col >= 0) {
            rowArr.push(A[row][col]);
            row++;col--;
        }
        diagArr.push(rowArr);
    }
    for (let i = 1; i < A.length; i++) {
        let totalItrPerRow = A.length - i;
        rowArr = [];
        let [row, col] = [i, A[i].length - 1 ];
        while (totalItrPerRow > 0) {
            rowArr.push(A[row][col]);
            row++;
            col--;
            totalItrPerRow--;
        }
      diagArr.push(rowArr);
    }
    return diagArr;
}

console.log(findAntiDiagonals(
    [
        [1, 2 ,3, 4],
        [5, 6, 7, 8 ],
        [9, 10,11,12],
        [13,14,15,16]
    ]
));

console.log(findAntiDiagonals(
    [
        [1,   2 , 3],
        [4,   5 , 6],
        [7,   8 , 9]
        [10, 11, 12]
    ]
));