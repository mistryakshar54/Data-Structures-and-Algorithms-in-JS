// Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively 
// i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on...

//O(N) approach
//Time complexity : O(N)
//Space complexity : O(N) as using a temp array
const rearrangeAlt = ( A ) => {
    const tempArr = [];
    let start = 0, end = A.length - 1;
    for (; start < end; start++ ,  end--) {
        tempArr.push( A[end] );
        tempArr.push( A[start] );
    }
    if( start  === end){ tempArr.push(A[end]); } //Handle for odd places
    return tempArr;
}

console.log( rearrangeAlt( [ 1,2,3,4,5,6] ) );
console.log( rearrangeAlt( [ 1,2,3,4,5] ) );