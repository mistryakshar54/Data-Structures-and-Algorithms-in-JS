const tylerSeries = (num, pow) => {
  let fact = 1;
  let powr = 1;

  if (pow === 0) {
    return 1;
  }
  fact = fact * pow;
  powr = powr * num;

  return tylerSeries(num, pow - 1) + powr / fact;
};

console.log(tylerSeries(3, 3));
