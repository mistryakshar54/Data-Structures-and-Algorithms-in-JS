/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let mp = new Map();
    let count = 0, currSum = 0;
    nums.forEach( item => {
      currSum += item;
      if( currSum === k ){
        count++;
      }
      
      if( mp.has( currSum - k )  ){
        count+= mp.get(currSum - k);
      }
        
      if( mp.has( currSum ) ){
        let val = mp.get( currSum ); 
        mp.set(currSum , ++val);
      }
      else{
        mp.set(currSum , 1);
      }
        
          
    })
    return count;
};

console.log( subarraySum([1,2,1,2,1] , 3) )