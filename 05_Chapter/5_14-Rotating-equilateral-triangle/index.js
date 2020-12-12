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

function tri(length) {
    ctx.beginPath();
    ctx.moveTo(0, -length)
    ctx.lineTo(length * Math.sqrt(3) / 2, length / 2)
    ctx.lineTo(-length * Math.sqrt(3) / 2, length / 2)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = 'white'
    ctx.fill()
}

function draw() {
    ctx.clearRect(-300, -300, 600,600)
    ctx.rotate(radians(t))
        tri(300 - MARGIN)
    

    requestAnimationFrame(draw)
    t = 0.1
}

draw()