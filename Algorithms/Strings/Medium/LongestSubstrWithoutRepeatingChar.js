// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// More "abcabcbb" => 3
// "tmmuxbt" => 5

// Approach : O(N) Time + O(N) Space 
// We will keep a track of start and end index of the array (kind of sliding window) 
// If a repeating character is found we need to remove that prev occurance of that char and update the start count to be lastFoundIndex + 1
// Because for "CABCA" we will remove C but pick "ABC" as the next string.
// Increment the end index and the current length and max length

var lengthOfLongestSubstring = function(s) {
    let st = 0, end = 0, currLen = 0, maxLen = 0;
    let mp = new Map();
    for( let i = 0; i < s.length; i++ ){
        if(  mp.has(s[i]) ){
            st = Math.max(mp.get(s[i]) + 1 , st);
        }
        mp.set( s[i] , i );
        end++;
        currLen = Math.max( currLen , end - st );
        maxLen = Math.max( currLen , maxLen );
        console.log("MaxLen"+maxLen, "currLen"+currLen,"st"+st , "end"+end )
    }
    return maxLen;
};

lengthOfLongestSubstring("abcabcbb")