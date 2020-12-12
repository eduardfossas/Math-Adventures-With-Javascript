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


function draw() {
    ctx.beginPath()
    for(let i = 0; i < 6; i++) {
       ctx.lineTo(RADIUS * Math.cos(radians(60 * i)), RADIUS * Math.sin(radians(60 * i)))
    }
    ctx.closePath()
    ctx.stroke()
    
}

draw()