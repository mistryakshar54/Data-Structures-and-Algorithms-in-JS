// Stock Buy Sell to Maximize Profit
// The cost of a stock on each day is given in an array, 
// find the max profit that you can make by buying and selling in those days. 

// E.g : if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0, selling on day 3. 
// Again buy on day 4 and sell on day 6. 
// If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.

const BuySellStocks = (A) => {
    let localMin = 1;
    let localMax = 0;
    let arr = [];
    let index = 0;

    while (index < A.length - 1) {
        while( (index < A.length - 1) &&  (A[index + 1] <= A[index]) ){
            index++;
        }
        localMin = index++;
        while( index < A.length &&  A[index] >= A[index - 1] ){
            index++;
        }
        localMax = index - 1;
        arr.push( [ localMin , localMax ] );
    }
    return arr;
}

console.log(BuySellStocks([5, 2, 4, 3, 1, 8]));
console.log(BuySellStocks([100, 180, 260, 310, 40, 535, 695]));