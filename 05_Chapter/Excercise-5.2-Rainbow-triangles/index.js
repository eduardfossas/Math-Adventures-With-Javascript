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
}

function draw() {
    ctx.clearRect(-300, -300, 600,600)
    for(let i = 0; i < 90; i++) {
        ctx.rotate(radians(360) / 90)
        ctx.save()
        ctx.translate(200,0)
        ctx.rotate(radians(t + 2 * i * 360/90))
        ctx.strokeStyle = 'hsl(' + i * 360/90 + ',100%,40%)';
        tri(100 - MARGIN)
        ctx.restore()
    }
    requestAnimationFrame(draw)
    t += 0.5
    
}

draw()