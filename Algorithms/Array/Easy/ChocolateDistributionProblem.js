// Chocolate Distribution Problem 
// Given an array A of positive integers of size N, where each value represents number of chocolates in a packet. 
// Each packet can have variable number of chocolates. 
// There are M students, the task is to distribute chocolate packets such that :
// 1. Each student gets one packet.
// 2. The difference between the number of chocolates given to the students having packet with 
//    maximum chocolates and student having packet with minimum chocolates is minimum.

// solution : n(logn)
const distributeChocolate = (A , N) => {
    A.sort( (a,b) => a-b );

    let minDiff = Infinity;    
    for (let start = 0, end = N - 1; end < A.length; start++ , end++) {
        let currDiff = A[end] - A[start];
        if( currDiff < minDiff ){
            minDiff = currDiff;
        }        
    }
    return minDiff;
}

console.log(distributeChocolate([3,4,1,9,56,7,9,12] , 5));
console.log(distributeChocolate([7,3,2,4,9,12,56] , 3));