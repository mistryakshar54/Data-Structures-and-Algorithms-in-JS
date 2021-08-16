// Longest Common Substring | DP-29
// Given two strings ‘X’ and ‘Y’, find the length of the longest common substring. 

// Examples : 
// Input : X = “GeeksforGeeks”, y = “GeeksQuiz” 
// Output : 5 
// Explanation:
// The longest common substring is “Geeks” and is of length 5.

// Input : X = “abcdxyz”, y = “xyzabcd” 
// Output : 4 
// Explanation:
// The longest common substring is “abcd” and is of length 4.

// Input : X = “zxabcdezy”, y = “yzabcdezx” 
// Output : 6 
// Explanation:
// The longest common substring is “abcdez” and is of length 6.

const LCS = ( str1 , str2 ) => {
    const matrix = [];
    let maxLen = 0;
    for (let m = 0; m < str1.length; m++) {
      
        matrix.push( Array(str2.length).fill(0) );

    }

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if( str1[i] === str2[j] ){
                let value = 1;
                if(i > 0 && j > 0){
                    value += matrix[i - 1][j - 1];
                }
                matrix[i][j] = value;
                maxLen = Math.max( maxLen , value );
            }
        }
    }

    return maxLen;
}

console.log( LCS("zxabcdezy","yzabcdezx") );