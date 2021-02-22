// Given an array A and Target T, count the no of pairs possible with the given target
// For ex. for arr [1,1,1,1] with target 2 there are 7 pairs possible
const countPairsWithTargetSum = ( arr, target ) => {
    pairCount = 0;
    const mp = new Map();
    arr.forEach( item => {
        if( mp.has( item ) ){
          let val = mp.get(item);
          val++;
          mp.set( item , val );
        }else{
          mp.set( item , 1 );
        }
    });
  
    arr.forEach( item => {
        
        let currVal = mp.get(item);
        currVal--;
      
        mp.set(item,currVal);
        let diff = target - item;
      
        if( mp.has(diff) && (mp.get(diff) > 0) ){
            pairCount += mp.get(diff);
        }
    })
    
    return pairCount;
    
  }
  
  console.log( countPairsWithTargetSum([1, 1, 1, 1] , 2 ));