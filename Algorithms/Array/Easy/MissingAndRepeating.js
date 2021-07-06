// Find Missing And Repeating
// Given an unsorted array of size N of positive integers.
// One number 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in array. Find these two numbers.
// Note: If you find multiple answers then print the Smallest number found. Also, expected solution is O(n) time and constant extra space.

const MissingAndRepeating = (arr) => {
    const mp = new Map();
    for (let i = 1; i <= arr.length; i++) {
      mp.set(i, 0);
    }

    arr.forEach((i) => {
      let counter = mp.get(i);
      counter++;
      mp.set(i, counter);
    });

    let missing = Infinity, repeating = Infinity;

    for (let i of mp) {
      [key, value] = i;
      if (value === 0 && key < missing) {
        missing = key;
      }
      if (value > 1 && key < repeating) repeating = key;
    }
}

console.log(MissingAndRepeating([3, 6, 3, 1, 2, 2]));