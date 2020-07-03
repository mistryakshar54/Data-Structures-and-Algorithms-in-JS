// Pythagorean Triplet 

// Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.

// Input:
// 3 2 4 6 5

// Output:
// Yes ? =>   9 + 16 = 25

const PythagoreanTriplet = (A) => {
  A = A.map((x) => x * x); //Square the Array
  A.sort((a, b) => a - b); //Sort it
  let isPythagoreanTriplet = false;
  for (let index = 0; index < A.length; index++) {
    let start = 0,
      end = A.length - 1;
    while (start < end) {
      let sum = A[start] + A[end];
      if (sum === A[index]) {
        isPythagoreanTriplet = true;
        break;
      } else {
        if (sum < A[index]) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return isPythagoreanTriplet;
};

console.log(PythagoreanTriplet([3, 2, 4, 6, 5]));
