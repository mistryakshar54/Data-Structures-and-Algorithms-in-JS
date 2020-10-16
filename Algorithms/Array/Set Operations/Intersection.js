
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


//Instersection result without duplicates:
var intersection = function(nums1, nums2) {
  const mp = new Map();
  const resultArr = [];
  for( let i =0; i < nums1.length; i++ ){
      if( !mp.has( nums1[i] ) ){
          mp.set( nums1[i] , 0 );
      }
  }
  for( let i = 0; i < nums2.length; i++ ){
      if( mp.has( nums2[i] ) && mp.get(nums2[i]) === 0){
        resultArr.push( nums2[i] );   
        mp.set(nums2[i] , -1);
      }
  }
  return resultArr;
};