function quad(a, b, c) {
  let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  return { x1, x2 };
}

console.log(quad(2, 7, -15));
