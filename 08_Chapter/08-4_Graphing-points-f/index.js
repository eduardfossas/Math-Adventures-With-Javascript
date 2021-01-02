let xmin = -10;
let xmax = 10;

let ymin = -10;
let ymax = 10;

let rangex = xmax - xmin
let rangey = ymax - ymin

let xscl = 600 / rangex;
let yscl = -600 / rangey

let fmatrix = [[0,0],[1,0],[1,2],[2,2],[2,3],[1,3],[1,4],[3,4],[3,5],[0,5]]

const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
}

function draw() {
    CTX.translate(CANVAS.width / 2, CANVAS.height / 2)
    grid(xscl,yscl)
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
    CTX.strokeStyle = '#000000'
    CTX.beginPath()
    for(let pt of matrix) {
        CTX.lineTo(pt[0]*xscl, pt[1]*yscl)
    }
    CTX.closePath()
    CTX.stroke()
}


setup()
draw()
