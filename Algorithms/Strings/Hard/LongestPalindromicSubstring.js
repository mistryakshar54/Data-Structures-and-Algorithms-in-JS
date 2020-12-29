// LC Hard; 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = [];
    let st = 0, end = 0, maxLen = 1;
    for( let i = 0; i < s.length; i++ ){
      dp.push( new Array(s.length).fill(0) );
    }
    for( let i = 0; i < s.length; i++ ){
      dp[i][i] = 1;
      if( s[i] === s[i+1] ){
         dp[i][i+1] = 1;
        st = i;
        maxLen = 2;
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
          if( (j - i) + 1  > maxLen){
            maxLen = (j - i) + 1;
            st = i;
          }
        }
        }
      }
    }
  return s.substr(st,maxLen);
};