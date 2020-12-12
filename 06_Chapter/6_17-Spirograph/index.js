const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

const RADIUS_BIG_CIRCLE = 300;
const RADIUS_CIRCLE= 175;
const RADIUS_DOT = 5;


let x1 = 0;
let y1 = 0;
let t = 0
let points = []
let prop = 0.9;


function draw() {
    let x2 = (RADIUS_BIG_CIRCLE - RADIUS_CIRCLE) * Math.cos(t);
    let y2 = (RADIUS_BIG_CIRCLE - RADIUS_CIRCLE) * Math.sin(t);

    let x3 = x2 + prop * (RADIUS_CIRCLE - RADIUS_DOT) * Math.cos(-((RADIUS_BIG_CIRCLE - RADIUS_CIRCLE) / RADIUS_BIG_CIRCLE) * t)
    let y3 = y2 + prop * (RADIUS_CIRCLE - RADIUS_DOT) * Math.sin(-((RADIUS_BIG_CIRCLE - RADIUS_CIRCLE) / RADIUS_BIG_CIRCLE) * t)

    if(points.length < 2000) points.push([x3,y3])

    ctx.clearRect(-canvas.width/2, -canvas.height / 2, canvas.width * 2, canvas.height * 2)

    ctx.beginPath()
    ctx.arc(x1,y1, RADIUS_BIG_CIRCLE, 0, Math.PI * 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x2,y2, RADIUS_CIRCLE, 0, Math.PI * 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x3,y3, RADIUS_DOT, 0, Math.PI * 2)
    ctx.stroke()

    ctx.beginPath()

    for(let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1])
    }
    ctx.stroke()

    
    requestAnimationFrame(draw)
    t += 0.05
}

draw()