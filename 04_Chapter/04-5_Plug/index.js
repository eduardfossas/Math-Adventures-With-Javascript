function g(x) {
  return 6*x**3 + 31*x**2 + 3*x - 10;
}

function plug() {
  let x = -100;
  while (x <= 100) {
    if(g(x) == 0) {
      console.log('x=' + x)
    }
    x++;
  }
  console.log('done')
}

plug();
