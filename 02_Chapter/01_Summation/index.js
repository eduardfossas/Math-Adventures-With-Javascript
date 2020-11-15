function sum(range) {
    let running_sum = 0;
    for(let i = 0; i <= range; i++) {
      running_sum += i;
    } 
    return running_sum;
  }
  
  console.log(sum(100))