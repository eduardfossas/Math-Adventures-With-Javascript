let A = [[1, 2, -3, -1]]
let B = [[4, -1],
[-2, 3],
[6, -3],
[1, 0]]

function multMatrix(a, b) {
    let m = a.length;
    let n = b[0].length;
    let newMatrix = []

    for (let i = 0; i < m; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            let sum1 = 0;

            for (let k = 0; k < b.length; k++) {
                sum1 += a[i][k] * b[k][j]

            }
            row.push(sum1)
        }
        newMatrix.push(row)

    }
    return newMatrix;
}

console.log(multMatrix(A, B))
