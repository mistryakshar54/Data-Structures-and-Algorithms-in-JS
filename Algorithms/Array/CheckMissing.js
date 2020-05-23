
// Given an unsorted integer array, find the first missing positive integer.

// Example:
// Given [1,2,0] return 3,
// [3,4,-1,1] return 2,
// [-8, -7, -6] returns 1
//O(N) Approach with O(N) space

const checkMissing = (  A ) => {
    const intMap = new Map();
    let hasAllNeg = true;

    for (let index = 1; index <= A.length; index++) {
        if(A[index - 1] > 0){ hasAllNeg = false; }
        intMap.set(index , 0);
    }
    if (hasAllNeg === true) { return 1; }
    
    for (let index = 0; index < A.length; index++) {
        
        if(A[index] > 0 && A[index] <= A.length ){
            let val = intMap.get( A[index] );
            val++;
            intMap.set( A[index] , val );     
        }
    }
    for (let index = 1; index <= intMap.size; index++) {
        if( intMap.get(index) === 0 ){ return index; }    
    }
    return A.length + 1;
}


console.log(checkMissing([1]));
console.log(checkMissing([1, 2, 0]));
console.log(checkMissing( [ -8, -7, -6, 3, 1, 2 ] ) );
console.log(checkMissing( [ -8, -7, -6 ] ) );
console.log(checkMissing([3, 4, -1, 1]));