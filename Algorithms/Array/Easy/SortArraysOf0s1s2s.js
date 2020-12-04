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


// Solution Approach 2
// Take 3 pointers m , l ,h 
// l takes care of zeros , m checks for 1
// If m is 0 then we swap with A[l] as l points to 0s
// If m is 1 , we move ahead as M always points to 1
// If m is 2 , then we swap with h as h handles all 2s

const Sort0s1sAgain = ( A ) => {
    let  m = 0, l = 0 , h = A.length - 1;
    while(m < h){
        if(A[m] === 0){
            let temp = A[m];
            A[m] = A[l];
            A[l] = temp;
            m++ , l++;
        }
        if( A[m] === 1 ){ 
            m++; 
        }
        if( A[m] === 2){
            let temp = A[m];
            A[m] = A[h];
            A[h] = temp;
            h--;
        }
    }   
    return A;
}

console.log(Sort0s1sAgain([1, 0, 0, 2, 1, 0, 2, 1]));
console.log(Sort0s1sAgain([1, 0, 0, 2, 2, 0, 1]));
