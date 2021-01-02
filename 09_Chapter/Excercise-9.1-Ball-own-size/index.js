const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

let ballList = []
let xcor = 300;
let ycor = 300;
let xvel = 1;
let yvel = 2;

class Ball {
    constructor(x, y) {
        this.xcor = x
        this.ycor = y
        this.xvel = random(-2, 2)
        this.yvel = random(-2, 2)
        this.color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
        this.size = random(5,50)
    }

    update() {
        this.xcor += this.xvel
        this.ycor += this.yvel
        if (this.xcor > CANVAS.width || this.xcor < 0) {
            this.xvel = -this.xvel;
        }
        if (this.ycor > CANVAS.height || this.ycor < 0) {
            this.yvel = -this.yvel;
        }
        CTX.fillStyle = this.color

        CTX.beginPath()
        CTX.arc(this.xcor, this.ycor, this.size, 0, Math.PI * 2)
        CTX.closePath()
        CTX.fill()
    }
}

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
    for(let i = 0; i < 30; i++) {
        ballList.push(new Ball(CANVAS.width, CANVAS.height))
    }

}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(0, 0, CANVAS.width, CANVAS.height)
    CTX.fill()

    for(ball of ballList) {
        ball.update()
    }
   
    requestAnimationFrame(() => draw())
}


setup()

requestAnimationFrame(() => draw())