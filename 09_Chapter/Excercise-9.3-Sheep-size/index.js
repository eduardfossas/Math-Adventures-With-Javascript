const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')

const WHITE = `rgb(255,255,255)`
const BROWN = `rgb(102,51,0)`
const RED = `rgb(255,0,0)`
const GREEN = `rgb(0,102,0)`
const YELLOW = `rgb(255,255,0)`
const PURPLE = `rgb(102,0,204)`

let colorList = [WHITE, RED, YELLOW, PURPLE]
let sheepList = [];
let grassList = []
let patchSize = 10;
let rows_of_grass;

class Grass {
    constructor(x, y, sz) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.eaten = false;
        this.sz = sz;
    }

    update() {
        if (this.eaten) {
            if(random(0,100) < 5) {
                this.eaten = false
            }
            else {
                CTX.fillStyle = BROWN
            }
        }
        else {
            CTX.fillStyle = GREEN
        }
        CTX.beginPath()
        CTX.rect(this.x, this.y, this.sz, this.sz)
        CTX.closePath()
        CTX.fill()
    }
}

class Sheep {
    constructor(x, y, col) {
        this.x = x
        this.y = y
        this.size = 5;
        this.energy = 20;
        this.color = col;
        this.life = 100;
    }

    update() {
        let move = 10;

        this.energy -= 1;
        this.life -= 1;
        if(this.life <= 0) {
            sheepList.splice(sheepList.indexOf(this), 1);
        }
        if (this.energy <= 0) {
            sheepList.splice(sheepList.indexOf(this), 1);
        }
        if (this.energy >= 50) {
            this.energy -= 30;
            console.log('dsad')
            sheepList.push(new Sheep(this.x, this.y, this.color))
        }
        this.x += random(-move, move)
        this.y += random(-move, move)

        if (this.x > CANVAS.width) {
            this.x %= CANVAS.width
        }
        if (this.y > CANVAS.height) {
            this.y %= CANVAS.height
        }
        if (this.x < 0) {
            this.x += CANVAS.width
        }

        if (this.y < 0) {
            this.y += CANVAS.height
        }
        let xscl = parseInt(this.x / patchSize)
        let yscl = parseInt(this.y / patchSize)

        let grass = grassList[xscl * rows_of_grass + yscl]

        if (!grass.eaten) {
            this.energy += grass.energy;
            grass.eaten = true;
        }
        this.size = map(this.energy, 0, this.size,0,this.size) 
        CTX.fillStyle = this.color
        CTX.beginPath()
        CTX.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        CTX.closePath()
        CTX.fill()
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
    rows_of_grass = CANVAS.height / patchSize

    for (let i = 0; i < 10; i++) {
        sheepList.push(new Sheep(random(0, CANVAS.width), random(0, CANVAS.height), choice(colorList)))
    }

    for (let x = 0; x < CANVAS.width; x += patchSize) {
        for (let y = 0; y < CANVAS.height; y += patchSize) {
            grassList.push(new Grass(x, y, 10))
        }
    }
}

function draw() {
    for (grass of grassList) {
        grass.update()
    }
    for (sheep of sheepList) {
        sheep.update()
    }
    requestAnimationFrame(() => draw())
}

function choice(list) {
    return list[Math.floor(Math.random() * list.length)]
}

setup()

requestAnimationFrame(() => draw())