const contiguosSubArray = ( A  , sum ) => {
    let start = 0;
    for (let index = 0; index < A.length; index++) {
        let tempSum = 0;
        for (let j = index; j < A.length; j++) {
            if(tempSum + A[j] === sum) { return [index , j]; }
            else if(tempSum + A[j] > sum) { break; }
            else { 
                tempSum += A[j];
            }
        }
        
    }
    return -1;
}

console.log(contiguosSubArray( [  4,6,1,3,2 ] , 5  ));
console.log(contiguosSubArray( [  9,10,2,3,4,1 ] , 15  ));