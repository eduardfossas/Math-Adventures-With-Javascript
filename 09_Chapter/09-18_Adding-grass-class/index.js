const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

const WHITE = `rgb(255,255,255)`
const BROWN = `rgb(102,51,0)`
const RED = `rgb(255,0,0)`
const GREEN = `rgb(0,102,0)`
const YELLOW = `rgb(255,255,0)`
const PURPLE = `rgb(102,0,204)`

let sheepList = [];
let grassList = []
let patchSize = 10;

class Grass {
    constructor(x,y,sz) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.eaten = false;
        this.sz = sz;
    }

    update() {
        if(this.eaten) CTX.fillStyle = BROWN
        CTX.fillStyle = GREEN
        CTX.beginPath()
        CTX.rect(this.x,this.y,this.sz,this.sz)
        CTX.closePath()
        CTX.fill()
    }
}

class Sheep {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 10;
        this.energy = 20;
    }

    update() {
        let move = 10;
        this.energy -= 1;
        if(this.energy <= 0) {
            sheepList.splice(sheepList.indexOf(this), 1);
        }
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

    for(let i =0; i < 3; i++) {
        sheepList.push(new Sheep(random(0,CANVAS.width), random(0, CANVAS.height)))
    }

    for(let x = 0; x < CANVAS.width; x += patchSize) {
        for(let y = 0; y < CANVAS.height; y += patchSize) {
            grassList.push(new Grass(x,y,10))
        }
    }
}

function draw() {
    for(sheep of sheepList) {
        sheep.update()
    }
    requestAnimationFrame(() => draw())
}


setup()

requestAnimationFrame(() => draw())