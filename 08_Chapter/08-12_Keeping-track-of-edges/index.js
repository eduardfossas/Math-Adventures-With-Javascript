let xmin = -10;
let xmax = 10;

let ymin = -10;
let ymax = 10;

let rangex = xmax - xmin
let rangey = ymax - ymin

let xscl = 600 / rangex;
let yscl = -600 / rangey

let fmatrix = [[0,0,1],[1,0,1],[1,2,1],[2,2,1],[2,3,1],[1,3,1],[1,4,1],[3,4,1],[3,5,1],[0,5,1]]


let transform_matrix = [[0, -1], [1,0]]

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

    for(let i = 0; i < n; i++) {
        output.push([])
        for(let j = 0; j < m; j++) {
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
    grid(xscl,yscl)
    graphPoints(fmatrix)
}

function drawF(matrix) {
    CTX.strokeStyle = 'red'
    graphPoints(matrix)
    CTX.stroke()
}

function grid(xscl, yscl) {
    CTX.lineWidth = '0.5'
    CTX.strokeStyle = '#009900'
    for(let i = xmin; i < xmax; i++) {
        CTX.moveTo(i*xscl, ymin*yscl)
        CTX.lineTo(i*xscl, ymax*yscl)
    }

    for(let i = ymin; i < ymax; i++) {
        CTX.moveTo(xmin*xscl, i*yscl)
        CTX.lineTo( xmax*xscl, i*yscl)
    }
    CTX.stroke()
    CTX.strokeStyle = '#000000'
    CTX.moveTo(0,ymin*yscl)
    CTX.lineTo(0,ymax*yscl)
    CTX.moveTo(xmin*xscl,0)
    CTX.lineTo(xmax*xscl,0)
    CTX.stroke()
}

function graphPoints(matrix) {
    CTX.lineWidth = '2'
    CTX.beginPath()
    for(let pt of matrix) {
        CTX.lineTo(pt[0]*xscl, pt[1]*yscl)
    }
    CTX.closePath()
    CTX.stroke()
}

CANVAS.addEventListener('mousemove', (e) => {
    let ang = map(e.clientX, 0, CANVAS.width, 0, Math.PI * 2)
    let rotMatrix = [[Math.cos(ang), -Math.sin(ang)], [Math.sin(ang), Math.cos(ang)]]
    let newMatrix = transpose(multMatrix(rotMatrix, transpose(fmatrix)))
    CTX.clearRect(-300,-300, CANVAS.width, CANVAS.height)
    draw()
    drawF(newMatrix) 
})


setup()
draw()
