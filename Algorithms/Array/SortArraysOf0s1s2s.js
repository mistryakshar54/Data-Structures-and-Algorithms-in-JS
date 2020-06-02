// Sort an array of 0s 1s 2s

// O(N) Solution 
// Approach : Loop two times, once for sorting all os and 2nd for sorting all 1s

const sort0s1s = ( A ) => {
    let swapIndex = 0;
    for (let index = 0; index < A.length; index++) {
        if(A[index] == 0){
            if(index != swapIndex){
                let temp = A[index];
                A[index] = A[swapIndex];
                A[swapIndex] = temp;
            }
            swapIndex++;
        }
    }
    for (let index = 0; index < A.length; index++) {
        if(A[index] == 1){
            if(index != swapIndex){
                let temp = A[index];
                A[index] = A[swapIndex];
                A[swapIndex] = temp;
            }
            swapIndex++;
        }
    }
    return A;
}

console.log(  sort0s1s([ 1, 0 , 0, 2, 1, 0 ,2, 1   ]) )
console.log(  sort0s1s([ 1,0,0,2,2,0,1   ]) )

}