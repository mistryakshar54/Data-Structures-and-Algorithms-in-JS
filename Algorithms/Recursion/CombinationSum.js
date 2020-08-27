// LC 39. Combination Sum
// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   if( candidates.length === 0 ){ return []; }
   candidates.sort( (a,b) => a - b );
   let mainArr = [],subsetArr = [];
   combSum( 0 , mainArr, subsetArr , 0,candidates ,target );
   return mainArr;
};

const combSum = ( index , mainArr , subsetArr, currSum,candidates , target ) => {
    if( currSum === target ){
      mainArr.push( [...subsetArr] );
      return;
    }
    
    if( currSum < target ){
      for( let i = index; i < candidates.length; i++ ){
        subsetArr.push(candidates[i]);
        combSum( i , mainArr , subsetArr,currSum+candidates[i], candidates, target);
        subsetArr.pop();
      }
    }   
}