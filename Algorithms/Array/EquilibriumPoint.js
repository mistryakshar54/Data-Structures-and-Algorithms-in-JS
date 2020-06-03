// Equilibrium Point
// Given an array A of N positive numbers. 
// The task is to find the position where equilibrium first occurs in the array. 
// Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

// E.G: [1 3 5 2 2] => 5 equilibrium point is at position 3 as elements below it (1+3) = elements after it (2+2).

  
const quilibriumPoint = ( A ) => {
    let equiPoint = -1;
    if(A.length <= 1){ return equiPoint; }
    let totalSum = A.reduce(function(a, b) {
      return a + b;
    }, 0);
    let prevSum = 0, tempTotal = totalSum;
    for (let index = 0; index < A.length; index++) {
        tempTotal -= A[index];
        if (tempTotal - prevSum === 0) {
          equiPoint = A[index];
        }
        prevSum += A[index];
        
    }
    return equiPoint;
}

console.log(quilibriumPoint([ 1,3,5,2,2 ]));
console.log(quilibriumPoint([ 1 ]));