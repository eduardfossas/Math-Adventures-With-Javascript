const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
}

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(0,0,CANVAS.width, CANVAS.height)
    CTX.fill()
    CTX.fillStyle = 'white'
    CTX.beginPath()
    CTX.arc(300,300,20,0,Math.PI * 2)
    CTX.closePath()
    CTX.fill()
}

setup()
draw()