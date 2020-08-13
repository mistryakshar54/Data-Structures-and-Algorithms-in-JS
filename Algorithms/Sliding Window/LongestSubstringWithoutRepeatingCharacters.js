// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Solution approach : O(N) Time + O(N) Space
// We will use 2 pointers and hence use a sliding window. 
// The window increments when a unique element is encountred and added to set 
// Steps:
// If the element is present in the hash 
// - Create two pointer st and end. Start from the begining.
// - If an element is NOT present in the set, 
//     - We will add it and get the updated length.
//     - Increment the end counter.
//     - Get the maxlength
// - If the element is present we will remove the element at post st and increment it

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const tempSet = new Set();
    let maxLength = 0;
    let st = 0 , end = 0;
    while( end < s.length ){
        if( ! tempSet.has( s[end] ) ){
            tempSet.add(s[end]);
            maxLength = Math.max( maxLength , tempSet.size );
            end++;
        }
        else{
            tempSet.delete( s[st] );
            st++;
        }
    }
    return maxLength;
};