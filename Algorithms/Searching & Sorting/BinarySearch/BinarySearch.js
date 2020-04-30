// Binary Search

const binarySearch = ( arr, key ,lo, high ) => {
    let mid = parseInt((lo + high) / 2);
    if( mid + 1 > high || mid < lo ){ return false; }
    if( arr[mid] === key ) { return true; }
    else if( arr[mid] > key ) { return binarySearch( arr , key , lo , mid ); }
    else { return binarySearch( arr , key , mid + 1 , high ); }
}

console.log("Search for 5 in [1, 2, 3, 4]",binarySearch([1, 2, 3, 4], 5, 0, [1, 2, 3, 4].length));
console.log("Search for 2 in [1, 2, 3, 4]",binarySearch([1, 2, 3, 4], 2, 0, [1, 2, 3, 4].length));
console.log("Search for 1 in [1, 2, 3, 4]",binarySearch([1, 2, 3, 4], 1, 0, [1, 2, 3, 4].length));