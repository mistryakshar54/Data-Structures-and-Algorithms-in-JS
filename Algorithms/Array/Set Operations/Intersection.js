
//Time complexity O(N);
//Space complexity O(N);
const A = [3,5,6,7,8];
const B = [2,3,4,5];


const intersection = ( A , B ) => {
  const mp = new Map();
  const resultArr = [];
  for( let i =0; i < A.length; i++ ){
      if( !mp.has( A[i] ) ){
          mp.set( A[i] , 0 );
      }
  }
  for( let i = 0; i < B.length; i++ ){
      if( mp.has( B[i] ) ){
        resultArr.push( B[i] );
      }
  }
  return resultArr;
}

console.log(intersection(A, B));