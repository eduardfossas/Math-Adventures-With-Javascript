const average = (range) =>
  [...range].reduce((acc, curr) => acc + curr) / range.length;

function squareRoot(num, low, high) {
  for (let i = 0; i < 20; i++) {
    var guess = average([low, high]);
    let exponent = guess ** 2;
    if (exponent === num) {
      console.log(guess);
    } else if (exponent > num) {
      high = guess;
    } else {
      low = guess;
    }
  }
  console.log(guess);
}

squareRoot(60, 7, 8);
squareRoot(200, 1, 15);
squareRoot(1000, 1, 32);
squareRoot(50000, 1, 500);
