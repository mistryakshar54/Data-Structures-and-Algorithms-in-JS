sumNos = (n) => {
  if (n === 0) {
    return 0;
  }

  return n + sumNos(n - 1);
};

console.log(sumNos(10));
