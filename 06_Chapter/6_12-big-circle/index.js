const canvas = document.createElement('canvas')
canvas.width = 600 + 2
canvas.height = 600 + 2
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

const RADIUS_BIG_CIRCLE = 300;
const RADIUS_CIRCLE= 174;
const RADIUS_DOT = 5;


let x1 = 0;
let y1 = 0;
let t = 0
let points = []


function radians(angle) {
    return angle * Math.PI / 180
}

function draw() {
    ctx.clearRect(-canvas.width/2, -canvas.height / 2, canvas.width * 2, canvas.height * 2)
    ctx.beginPath()
    ctx.arc(x1,y1, RADIUS_BIG_CIRCLE, 0, Math.PI * 2)
    ctx.stroke()
    
    requestAnimationFrame(draw)
    t += 0.016
}

draw()