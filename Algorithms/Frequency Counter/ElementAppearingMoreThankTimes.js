// Given an array of size n and a number k, find all elements that appear more than n/k times

const arr = [3, 1, 2, 2, 1, 2, 3, 3];

const elementsNKTimes = (arr, k) => {
    const mp = new Map();
    const maxTimes = Math.floor(arr.length / k);
    const resultArr = [];
    arr.forEach( item => {
        if(mp.has(item)){
            let appearenceCount = mp.get(item);
            appearenceCount++;
            if( appearenceCount === maxTimes  ){
                resultArr.push(item);
            }
            mp.set( item , appearenceCount );
        }
        else{
            mp.set(item , 1);
        }
    });
    return resultArr;
}

console.log(elementsNKTimes( arr , 4 ))