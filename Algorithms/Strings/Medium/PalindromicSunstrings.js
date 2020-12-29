// LC Medium 647. Palindromic Substrings
// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const dp = [];
    let cnt = 0;
    for( let i = 0; i < s.length; i++ ){
      dp.push( new Array(s.length).fill(0) );
    }
    for( let i = 0; i < s.length; i++ ){
      dp[i][i] = 1;
      cnt++;
      if( s[i] === s[i+1] ){
         dp[i][i+1] = 1;
          cnt++;
       }
    }
    for( let k = 3; k <= s.length; ++k ){
      for( let i = 0; i < s.length - k + 1; ++i ){
        let j = i + k - 1;
        if( s[i] === s[j] ){
          if((dp[ i + 1 ][ j - 1] === 1) ){
              dp[i][j] = 1;
          }
        if(dp[i][j] === 1 ){
          cnt++
        }
        }
      }
    }
  return cnt;
};