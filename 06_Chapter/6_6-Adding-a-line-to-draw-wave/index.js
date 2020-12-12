const canvas = document.createElement('canvas')
canvas.width = 1240
canvas.height = 600

const MARGIN = 20;

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 6, canvas.height / 2)

const RADIUS = 125;
const RADIUS_SMALL = 10;

let t = 0
let i =0;
let circleList = []




function radians(angle) {
    return angle * Math.PI / 180
}

function draw() {
    ctx.clearRect(-canvas.width/2,-300, canvas.width * 2, canvas.height)
    ctx.beginPath()
    ctx.arc(0,0, RADIUS, 0, Math.PI * 2)
    ctx.stroke()
    
    let y = RADIUS * Math.sin(t)
    let x = RADIUS * Math.cos(t)

    if (circleList.length < 1000) circleList.push(y)
    ctx.beginPath()
    ctx.arc(x,y,RADIUS_SMALL, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(150 + i, y)
    ctx.stroke()

    for(let i = 0; i < circleList.length; i++) {
        ctx.beginPath()
        ctx.arc(150 + i , circleList[i], RADIUS_SMALL, 0, Math.PI * 2)
        ctx.fill()
    }
   
    requestAnimationFrame(draw)
    t += 0.016
    i++
}

draw()