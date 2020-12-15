// Minimum Swaps for Bracket Balancing

// Input  : []][][
// Output : 2
// First swap: Position 3 and 4
// [][]][
// Second swap: Position 5 and 6
// [][][]

// Input  : [[][]]
// Output : 0
// The string is already balanced.

// Solution : Time O(N) + Space O(1)
// Approach:
// Add +1 for [ and -1 for ] if the count is -1 that means there is an imbalanced bracket
// we store the index for the same and the moment we seen an [ we swap it with the imbalanced one
// We maintain the swap counts

const minSwapsForBracketBalanding = ( s ) => {
    let balCount = 0 //Keep the count of brackets by adding +1 for '[' and -1 for ']'
    let swapIndex = -1 //The imbalanced bracked which needs to be swaped to make it balanced
    let swapCount = 0 //Total no of swaps done
    for( let  i = 0; i < s.length; i++ ){
        if( s[i] === '[' ){
            if( swapIndex > 0 ){
                swapIndex = -1;
                swapCount++;
            }
            balCount++;
        }
        else{
            balCount--;
            if(balCount < 0 && swapIndex < 0){
                swapIndex = i; // The imbalanced bracket which needed to be replaced
            }
        }
    }
    return swapCount;
}
console.log(minSwapsForBracketBalanding('[]][]['))
console.log(minSwapsForBracketBalanding('[[][]]'))