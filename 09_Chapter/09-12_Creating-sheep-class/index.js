const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

let shawn;
class Sheep {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 10;
    }

    update() {
        CTX.fillStyle = 'white'
        CTX.beginPath()
        CTX.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        CTX.closePath()
        CTX.fill()
    }
}

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
    shawn = new Sheep(300,300)
}

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(0, 0, CANVAS.width, CANVAS.height)
    CTX.fill()
    shawn.update()
    requestAnimationFrame(() => draw())
}


setup()

requestAnimationFrame(() => draw())