//Rotate Arrays.
//Solution  Approach 1 O(N)
// Take an additional array and push all values from N to Array.length first in the additonal array
// Then take all elements from 0 to N
const roatateArray = (A , N) => {
    const tempArr = [];
    let endIndex = N; 
    let index = 0;
    while (endIndex < A.length) {
        tempArr.push(A[endIndex]);
        endIndex++;
    }
    while (index < N) {
        tempArr.push(A[index]);
        index++;
    }
    return tempArr;
}
console.log( roatateArray( [ 1,2,3,4,5,6] , 3) )


//Solution  Approach 2 O(N)
// Swap the N positions from N to 0
// Reverse first N position and then reverse the N -> Array.length positions