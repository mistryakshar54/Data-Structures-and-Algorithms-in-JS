
const mergeArrays = (arr1, arr2) => {
  let i = 0,
    j = 0;
  const mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    let min = arr1[i];
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      min = arr2[j];
      j++;
    }
    mergedArray.push(min);
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
};

const mergeSort = ( arr1 ) => {
  if(arr1.length <= 1) {  return arr1;}
  let mid = Math.floor(arr1.length/2);
  return mergeArrays(
    mergeSort(arr1.slice(0, mid)),
    mergeSort(arr1.slice(mid))
  );  
}

console.log( mergeSort([ 10,3,2,11,45,90,1 ]) );
console.log( mergeSort([ 10,3,111,35,2,11,,4,45,90,132,24,1,89,73,55,22,64,15,49 ]) );

