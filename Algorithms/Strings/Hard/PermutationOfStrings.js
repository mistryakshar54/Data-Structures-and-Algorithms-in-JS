// Hard - Backtracking
//Find permutations of array elements

// Permutation is all about arrangement. Hence inorder to find permutation of elements all we need to do is
// Fix one element and swap the position of another and then recur. Once we have reached to the end we print the value
// And recur back. As we recur back we need to swap back the elements to retain the original string.

//        A            B

// swap A with A  swap B with A

//   AB       BA - Print the strings

// swap A with A  swap B with A - To keep the original string intact

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const findPerm = (arr, l, h) => {
  if (l === h) {
    console.log(arr);
  }

  for (let i = l; i < arr.length; i++) {
    swap(arr, i, l);
    findPerm(arr, l + 1, h);
    swap(arr, i, l);
  }
}; 

findPerm(["A", "B", "C"], 0, 2);
