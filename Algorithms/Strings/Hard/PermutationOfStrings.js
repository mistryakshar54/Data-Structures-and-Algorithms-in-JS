//Find permutation of array elements

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
