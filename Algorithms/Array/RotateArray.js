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