const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600

const MARGIN = 20;

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

function radians(angle) {
    return angle * Math.PI / 180
}

let t = 0;

function draw() {
    ctx.rotate(radians(t))
    ctx.beginPath();
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -canvas.height / 2 + MARGIN)
    ctx.lineTo(canvas.width / 2 - MARGIN * 4,0)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = 'white'
    ctx.fill()

    requestAnimationFrame(draw)
    t = 0.5
}

draw()