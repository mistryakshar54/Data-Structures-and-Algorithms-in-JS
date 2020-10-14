//Time complexity O(NLogN);
//Space complexity O(N);
const A = [3,5,6,7,8];
const B = [2,3,4,5];


const union = ( A , B ) => {
  A.sort( (a , b) => a - b );
  B.sort( (a , b) => a - b );
  const resultArr = [];
  let i = 0, j = 0; 
  while( i < A.length && j < B.length ){
    if( A[i] <= B[j] ){
      if( A[i] === B[j] ){ j++; }
      resultArr.push( A[i] ); i++;
    }
    else{
      resultArr.push( B[j] ); j++;
    }
  }
  console.log(i , j)
  if( i <= A.length ){
    while( i < A.length){ resultArr.push( A[i] ); i++; }
  }
  if( j <= B.length ){
    while( j < B.length){ resultArr.push( B[j] ); j++; }
  }
  return resultArr;
}

console.log(union(A , B))