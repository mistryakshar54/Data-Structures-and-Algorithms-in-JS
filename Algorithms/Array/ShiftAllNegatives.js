//Difficulty : Easy
// Shift all -ve Elements to left side of Array

const arr = [-5, 2, 1, -11, 12, -3];

let l = 0,
  h = 0;
while (h < arr.length) {
  if (arr[h] > 0) {
    h++;
  } else {
    let tem = arr[l];
    arr[l] = arr[h];
    arr[h] = tem;
    l++;
    h++;
  }
}
console.log(arr);
