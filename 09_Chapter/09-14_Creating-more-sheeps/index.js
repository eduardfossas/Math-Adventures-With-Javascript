const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

let sheepList = [];
class Sheep {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 10;
    }

    update() {
        let move = 10;
        this.x += random(-move, move)
        this.y += random(-move, move)
        CTX.fillStyle = 'white'
        CTX.beginPath()
        CTX.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        CTX.closePath()
        CTX.fill()
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
    shawn = new Sheep(300,300)

    for(let i =0; i < 3; i++) {
        sheepList.push(new Sheep(random(0,CANVAS.width), random(0, CANVAS.height)))
    }
}

function draw() {
    CTX.fillStyle = 'black'
    CTX.rect(0, 0, CANVAS.width, CANVAS.height)
    CTX.fill()
    for(sheep of sheepList) {
        sheep.update()
    }
    requestAnimationFrame(() => draw())
}


setup()

requestAnimationFrame(() => draw())