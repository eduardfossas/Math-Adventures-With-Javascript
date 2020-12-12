const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600

const MARGIN = 20;

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

const RADIUS = 200;
const RADIUS_SMALL = 10;

let t = 0

function radians(angle) {
    return angle * Math.PI / 180
}

function draw() {
    ctx.clearRect(-300,-300, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(0,0, RADIUS, 0, Math.PI * 2)
    ctx.stroke()
    ctx.save()
    let y = RADIUS * Math.sin(t)
    let x = RADIUS * Math.cos(t)
    ctx.beginPath()
    ctx.arc(x,y,RADIUS_SMALL, 0, Math.PI * 2)
    
    ctx.fill()

    requestAnimationFrame(draw)
    t += 0.016
}

draw()