d = [53, 28, 54, 84, 65, 60, 22, 93, 62, 27, 16, 25, 74, 42, 4, 42,
  15, 96, 11, 70, 83, 97, 75]

const average = (range) => [...range].reduce((acc, curr) => acc + curr) / range.length

console.log(average(d))