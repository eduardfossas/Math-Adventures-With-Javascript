const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

let ballList = []
let xcor = 300;
let ycor = 300;
let xvel = 1;
let yvel = 2;

class Ball {
    constructor(x,y) {
        this.xcor = x
        this.ycor = y
        this.xvel = random(-2,2)
        this.yvel = random(-2,2)
    }
}

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
}

function random(min, max) {
    return Math.random() * (max - min) + min;
  }

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(0,0,CANVAS.width, CANVAS.height)
    CTX.fill()
    xcor += xvel
    ycor += yvel
    if(xcor > CANVAS.width || xcor < 0) {
        xvel = -xvel;
    }
    if(ycor > CANVAS.height || ycor < 0) {
        yvel = -yvel;
    }
    CTX.fillStyle = 'white'
    CTX.beginPath()
    CTX.arc(xcor,ycor,20,0,Math.PI * 2)
    CTX.closePath()
    CTX.fill()
    requestAnimationFrame(() => draw())
}


setup()

requestAnimationFrame(() => draw())