let xmin = -10;
let xmax = 10;

let ymin = -10;
let ymax = 10;

let rangex = xmax - xmin
let rangey = ymax - ymin

let xscl = 600 / rangex;
let yscl = -600 / rangey

let fmatrix = [[0,0,0],[1,0,0],[1,2,0],[2,2,0],[2,3,0],[1,3,0],[1,4,0],
[3,4,0],[3,5,0],[0,5,0],
[0,0,1],[1,0,1],[1,2,1],[2,2,1],[2,3,1],[1,3,1],[1,4,1],
[3,4,1],[3,5,1],[0,5,1]]


let edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
[7, 8], [8, 9], [9, 0],[10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],[17, 18], [18, 19], [19, 10],
[0, 10], [1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17],
[8, 18], [9, 19]]


let transform_matrix = [[0, -1], [1, 0]]

const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

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

function transpose(a) {
    let output = []

    let m = a.length;
    let n = a[0].length

    for (let i = 0; i < n; i++) {
        output.push([])
        for (let j = 0; j < m; j++) {
            output[i].push(a[j][i])
        }
    }
    return output;
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
    CTX.translate(CANVAS.width / 2, CANVAS.height / 2)

}

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(-300,-300,600,600)
    CTX.fill()
}

function drawF(matrix,edges) {
    CTX.strokeStyle = 'red'
    graphPoints(matrix,edges)
    CTX.stroke()
}

function grid(xscl, yscl) {
    CTX.lineWidth = '0.5'
    CTX.strokeStyle = '#009900'
    for (let i = xmin; i < xmax; i++) {
        CTX.moveTo(i * xscl, ymin * yscl)
        CTX.lineTo(i * xscl, ymax * yscl)
    }

    for (let i = ymin; i < ymax; i++) {
        CTX.moveTo(xmin * xscl, i * yscl)
        CTX.lineTo(xmax * xscl, i * yscl)
    }
    CTX.stroke()
    CTX.strokeStyle = '#000000'
    CTX.moveTo(0, ymin * yscl)
    CTX.lineTo(0, ymax * yscl)
    CTX.moveTo(xmin * xscl, 0)
    CTX.lineTo(xmax * xscl, 0)
    CTX.stroke()
}

function graphPoints(pointList, edges) {
    CTX.lineWidth = '1'
    CTX.beginPath()
    for (let e of edges) {
        CTX.moveTo(pointList[e[0]][0] * xscl, pointList[e[0]][1] * yscl)
        CTX.lineTo(pointList[e[1]][0] * xscl, pointList[e[1]][1] * yscl)
    }
    CTX.closePath()
}

CANVAS.addEventListener('mousemove', (e) => {
    let rot = map(e.clientX, 0, CANVAS.width, 0, Math.PI * 2)
    let tilt = map(e.clientY, 0, CANVAS.width, 0, Math.PI * 2)
    let newMatrix = transpose(multMatrix(rottilt(rot, tilt), transpose(fmatrix)))
    CTX.clearRect(-300, -300, CANVAS.width, CANVAS.height)
    draw()
    drawF(newMatrix, edges)
})

function rottilt(rot, tilt) {
    let rotmatrix_Y = [[Math.cos(rot), 0.0, Math.sin(rot)],
    [0.0, 1.0, 0.0],
    [-Math.sin(rot), 0.0, Math.cos(rot)]]
    let rotmatrix_X = [[1.0, 0.0, 0.0],
    [0.0, Math.cos(tilt), Math.sin(tilt)],
    [0.0, -Math.sin(tilt), Math.cos(tilt)]]
    return multMatrix(rotmatrix_Y, rotmatrix_X)
}

setup()
draw()
