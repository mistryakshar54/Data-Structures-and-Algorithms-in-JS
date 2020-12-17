// DP Hard Longest Common Subsequence Of Strings

const lcsOfTwoStrings = ( s1 , s2 ) => {
    const matrix = [];
    let m = s1.length;
    let n = s2.length;
    for( let  i = 0 ; i <= m; i++ ){
        matrix.push( (new Array(n + 1)).fill(0) );
    }
    for( let i = 0 ; i <= m; i++ ){
        for( let j = 0 ; j <= n; j++ ){
            if( i === 0 ){
                matrix[i][j] = 0;
            }
            else if( j === 0 ){
                matrix[i][j] = 0;
            }
            else if( s1[i - 1] === s2[ j - 1] ){
                matrix[i][j] = 1 + matrix[i - 1 ][j - 1];
            }
            else{
                matrix[i][j] = Math.max( matrix[i - 1][j] , matrix[i][j - 1] ) ;
            }
        }
    }
    return matrix[m][n];
}

console.log(lcsOfTwoStrings('ABCDGH','AEDFHR'));
console.log(lcsOfTwoStrings('AGGTAB','GXTXAYB'));