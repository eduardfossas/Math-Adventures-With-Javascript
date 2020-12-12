const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600

const MARGIN = 20;

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

const RADIUS = 200;

function radians(angle) {
    return angle * Math.PI / 180
}

function polygon(sides, size) {
    ctx.beginPath()
    for(let i = 0; i < sides; i++) {
        let step = radians(360 / sides);
        ctx.lineTo(size * Math.cos(step * i), size * Math.sin(step * i))
    }
    ctx.closePath()
    ctx.stroke()
}


function draw() {
    polygon(3, 100)
}

draw()