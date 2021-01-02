function cMult(a,b) {
    return [a[0] * b[0] - a[1]* b[1], a[1] * b[0] + a[0] * b[1]]
}

let u = [1,2]
let v = [3,4]

console.log(cMult(u,v))