const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

let xcor = 300;
let ycor = 300;

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
}

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(0,0,CANVAS.width, CANVAS.height)
    CTX.fill()
    xcor += 1
    ycor += 1
    CTX.fillStyle = 'white'
    CTX.beginPath()
    CTX.arc(xcor,ycor,20,0,Math.PI * 2)
    CTX.closePath()
    CTX.fill()
    requestAnimationFrame(() => draw())
}


setup()

requestAnimationFrame(() => draw())