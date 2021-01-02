let A = [[2, 3], [5, 8]]
let B = [[1, -4], [8, 6]]

function addMatrices(a,b) {
    let C = [[a[0][0] + b[0][0], a[0][1] + b[0][1]], [a[1][0] + b[1][0], a[1][1] + b[1][1]]]
    return C;
}

console.log(addMatrices(A,B))