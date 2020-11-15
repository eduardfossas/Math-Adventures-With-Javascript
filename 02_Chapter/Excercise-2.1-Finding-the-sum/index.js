function sum(range) {
  let running_sum = 0;
  for(let i = 0; i <= range; i++) {
    running_sum += i ** 2 + 1;
  } 
  return running_sum;
}

console.log(sum(100))
console.log(sum(1000))

// divide the number by two and concatenate the result 1 time: eg: 100/2 = 50. 5050