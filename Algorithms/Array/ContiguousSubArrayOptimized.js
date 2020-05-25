const contiguosSubArrayOpt = ( A  , sum ) => {
    let start = 0, end = 1;
    let tempSum = A[start] + A[end];
    while (end < A.legth) {
        if( tempSum < sum ){
            end ++;
            tempSum += A[end];
        }
        else if( tempSum > sum ){
            tempSum -= A[start];
            start++;
        }
        else{ return [start, end] ;}
    }
    return -1;
}

console.log(contiguosSubArrayOpt([4, 6, 1, 3, 2], 5));
console.log(contiguosSubArrayOpt([9, 10, 2, 3, 4, 1], 15));