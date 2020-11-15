function gcf(n,a) {
    let factorList = [];
    let biggerNumber = n < a ? a : n
    for(let i = 0; i <= biggerNumber; i++) {
        if(n % i === 0 && a % i === 0) {
            factorList.push(i)
        }
    }
    return Math.max(...factorList);
}

console.log(gcf(150,138))