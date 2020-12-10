// Cover Points
// You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.
// Input : [(0, 0), (1, 1), (1, 2)]
// Output : 2
// It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

//Solution Approach
// 00 01 02
// 10 11 12
// 20 21 22 
//for reaching (00) => (20) it takes Max of ([ 2 - 0 ], [0 - 0])  i.e 2 steps 


const coverPoints = (A , B) => {
 let steps = 0;
 for (let i = 0; i < A.length - 1; i++) {
    let x = Math.abs( A[i + 1] - A[i] );
    let y= Math.abs( B[i + 1] - B[i] );
    steps += Math.max(x,y);
 }
 return steps;
}

console.log(coverPoints([0, 1, 2] , [0, 1, 2]));