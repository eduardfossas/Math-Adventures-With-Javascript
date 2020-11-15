function factors(num) {
    let factorList = [];
    for(let i = 0; i <= num; i++) {
        if(num % i === 0) {
            factorList.push(i)
        }
    }
    return factorList;
}

console.log(factors(120))