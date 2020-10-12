// Iterative binarySearch
// Time Complexity  : O(N)
// Space Complexity  : O(1)

const binarySearch = (arr, l, h, k) => {
  while (l <= h) {
    let mid = (l + h) / 2;
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] > k) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 0, 6, 1));
