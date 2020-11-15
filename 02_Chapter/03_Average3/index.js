const average = (range) => [...range].reduce((acc, curr) => acc + curr) / range.length
  
console.log(average([8,11,15]))