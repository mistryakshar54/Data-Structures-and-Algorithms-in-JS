// LC 56. Merge Intervals
// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Edge Cases : 
// [[1,4],[0,4]]
// [[1,3],[2,4]]
// [[2,3],[4,5],[6,7],[8,9],[1,10]]

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if( intervals.length === 0 ){ return []; }
    intervals.sort( (a , b) => a[0] - b[0] );

    let st = intervals[0][0];
    let end = intervals[0][1];
    let mergedIntervl = [];
    for( let i = 0; i < intervals.length; i++ ){
       if( intervals[i][0]  <= end ){
           end = Math.max( end , intervals[i][1] )
       }
        else{
            mergedIntervl.push( [st , end] );
            st = intervals[i][0];
            end = intervals[i][1];
        }
    }
    mergedIntervl.push( [st , end] );
    return mergedIntervl;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));