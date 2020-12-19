// 767. LC Medium Reorganize String
// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    const mp = new Map();
    const priorityQueue = [];
    let result = "";
    for( let i of S ){
      let val = 1;
      if(mp.has(i)){
        val += mp.get(i);
      }
      mp.set( i , val);
    }

    for( let i of mp.entries() ){
      priorityQueue.push(i);
    }

    priorityQueue.sort( ( first , second ) => second[1] - first[1] );

    while( priorityQueue.length > 0 ){
            let firstItem = priorityQueue.shift();
        if(result[result.length - 1] !== firstItem[0]){
            result += firstItem[0];
            if( firstItem[1] > 1 ){
                firstItem[1] += -1;
                priorityQueue.push(firstItem);
            }
        }
        else{
            let nextItem = priorityQueue.shift();
            if( !nextItem){ return ""; }
            else{
                result += nextItem[0];
                if( nextItem[1] > 1 ){
                    nextItem[1] += -1;
                    priorityQueue.push(nextItem);
                }
                priorityQueue.push(firstItem);
                
            }
        }
    
        priorityQueue.sort( ( first , second ) => second[1] - first[1] );
    }
  return result;
};

console.log( reorganizeString("geeksforgeeks")  );